import { CopilotKit } from '@copilotkit/react-core';
import { CopilotKitCSSProperties, CopilotPopup } from "@copilotkit/react-ui";
import '@copilotkit/react-ui/styles.css';
import { useFaqReferenceAction } from "./hooks/useFaqReferenceAction";
import { useRouter } from "next/navigation";

import { useChatForm } from './hooks/useChatForm';

interface ChatPopupProps {
  apiUrl?: string;
  themeColor?: string;
  title?: string;
  initialMessage?: string;
  pageName?: string;
}

export default function ChatPopup({
  apiUrl = undefined,
  themeColor = "deepskyblue",
  title = "Asistente de ITHAKA",
  initialMessage = "Hola soy el asistente de ITHAKA, ¿en qué puedo ayudarte hoy?",
}: ChatPopupProps) {
  
  const { state, dispatch } = useChatForm();

  return (
    <CopilotKit
      runtimeUrl={apiUrl}
    >
      <ChatUIWrapper
        themeColor={themeColor}
        title={title}
        initialMessage={initialMessage}
      />
      {/* Debug - Comentado para no commitear */}
        {/*
        <div style={{ padding: '1rem', background: '#f5f5f5', marginTop: '1rem' }}>
          <h4>Datos actuales del formulario:</h4>
          <pre>{JSON.stringify(state.form, null, 2)}</pre>
        </div>
        */}
    </CopilotKit>
  );
}

function ChatUIWrapper({
  themeColor,
  title,
  initialMessage,
}: {
  themeColor: string;
  title: string;
  initialMessage: string;
}) {
  const router = useRouter();

  useFaqReferenceAction({
    onRedirect: () => {
      router.push("/faq");
    }
  });

  return (
    <div style={{ "--copilot-kit-primary-color": themeColor } as CopilotKitCSSProperties}>
      <CopilotPopup
        defaultOpen
        labels={{
          title: title,
          initial: initialMessage,
        }}
      />
    </div>
  );
}
