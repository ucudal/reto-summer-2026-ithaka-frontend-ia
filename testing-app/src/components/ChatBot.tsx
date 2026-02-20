'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ChatBot.module.css';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatBotProps {
  apiUrl?: string;
  title?: string;
  placeholderText?: string;
}

export default function ChatBot({
  apiUrl = '/api/copilotkit',
  title = 'Ithaka AI Compass',
  placeholderText = '¿Listo para postular tu proyecto o conocer más sobre nuestro centro?',
}: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isEmpty = messages.length === 0;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    // Agregar mensaje del usuario inmediatamente
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message || data.content || 'No se pudo obtener una respuesta',
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Disculpa, hubo un error al procesar tu mensaje. Por favor, intentá de nuevo.',
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      {isEmpty ? (
        // EMPTY STATE
        <div className={styles.emptyState}>
          <div className={styles.emptyStateTitleWrapper}>
            <Image
              src="/logoucu.svg"
              alt="UCU Logo"
              width={120}
              height={50}
              className={styles.emptyStateLogo}
              priority
            />
            <h1 className={styles.emptyStateTitle}>{title}</h1>
          </div>

          <form className={styles.emptyStateInputWrapper} onSubmit={sendMessage}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholderText}
                disabled={loading}
                className={styles.input}
                autoFocus
                aria-label="Mensaje para el chatbot"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className={styles.sendButton}
                aria-label="Enviar mensaje"
              >
                {loading ? '...' : '→'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        // MODO CHAT
        <>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <Image
                src="/logoucu.svg"
                alt="UCU Logo"
                width={80}
                height={32}
                className={styles.headerLogo}
              />
              <h1 className={styles.title}>{title}</h1>
            </div>
          </div>

          <div className={styles.messagesContainer}>
            <div className={styles.messagesWrapper}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`${styles.message} ${styles[message.role]}`}
                >
                  <div className={styles.messageContent}>
                    <p style={{ margin: 0 }}>{message.content}</p>
                  </div>
                  <span className={styles.timestamp}>
                    {message.timestamp.toLocaleTimeString('es-ES', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              ))}
              {loading && (
                <div className={`${styles.message} ${styles.assistant}`}>
                  <div className={styles.messageContent}>
                    <div className={styles.loadingDots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <form className={styles.inputContainer} onSubmit={sendMessage}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                disabled={loading}
                className={styles.input}
                aria-label="Mensaje para el chatbot"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className={styles.sendButton}
                aria-label="Enviar mensaje"
              >
                {loading ? '...' : '→'}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}