import { useCopilotAction } from "@copilotkit/react-core";
import { faqData } from "../constants/faqData";

type UseFaqReferenceActionProps = {
  onRedirect?: () => void;
};

export const useFaqReferenceAction = ({ onRedirect }: UseFaqReferenceActionProps) => {
  useCopilotAction({
    name: "navigateToFaqIfRelevant",
    description:`
    Usa esta herramienta siempre que el usuario haga una pregunta que 
    pueda estar relacionada con las preguntas frecuentes (FAQ) de ITHAKA.
    Las preguntas frecuentes son ${faqData.map(({question}) => question)}
    `,
    parameters: [
      {
        name: "question",
        type: "string",
        description: "La pregunta que el usuario hizo",
        required: true,
      },
    ],
    handler: async ({ question }: { question: string }) => {
      if (onRedirect) {
        onRedirect();
      }
    },
  });
};
