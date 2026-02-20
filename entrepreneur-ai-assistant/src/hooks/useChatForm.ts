import { useReducer, useEffect } from "react";
import { IthakaForm } from "../models/interfaces/IthakaFormInterface";
import { initialFormState } from "../models/IthakaForm";

// Estado del formulario
interface FormState {
  form: IthakaForm;
}

// Acciones del reducer
type FormAction =
  | { type: 'SET_FIELD'; field: keyof IthakaForm; value: any }
  | { type: 'CLEAR_FORM' }
  | { type: 'RESET_FORM' };

// Estado inicial
const initialState: FormState = {
  form: initialFormState,
};

// Reducer
function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      // Validar que el campo existe en la interfaz IthakaForm
      if (action.field in state.form) {
        return { ...state, form: { ...state.form, [action.field]: action.value } };
      }
      console.warn(`Campo "${action.field}" no existe en la interfaz IthakaForm`);
      return state;
    case 'CLEAR_FORM':
      return { ...state, form: initialFormState };
    case 'RESET_FORM':
      return initialState;
    default:
      throw Error('Unknown action: ' + (action as any).type);
  }
}

export function useChatForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Debug: cada vez que cambia el estado
  useEffect(() => {
    console.log("📌 Estado del formulario actualizado", state.form);
  }, [state.form]);

  return { state, dispatch };
} 