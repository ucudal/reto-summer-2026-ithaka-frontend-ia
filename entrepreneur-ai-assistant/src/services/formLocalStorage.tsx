import { IthakaForm } from "../models/interfaces/IthakaFormInterface";
import { initialFormState } from "../models/IthakaForm";

const FORM_STATE_KEY = "ithakaFormState";

export function createFormState(formState: IthakaForm) {
  const exists = localStorage.getItem(FORM_STATE_KEY);

  if (!exists) {
    localStorage.setItem(FORM_STATE_KEY, JSON.stringify(formState));
  }
}

export function saveFormState(formState: IthakaForm) {
  localStorage.setItem(FORM_STATE_KEY, JSON.stringify(formState));
}

export function loadFormState(): IthakaForm | null {
  try {
    const data = localStorage.getItem(FORM_STATE_KEY);
    return data ? (JSON.parse(data) as IthakaForm) : null;
  } catch (error) {
    return null;
  }
}

export function clearFormState() {
  localStorage.removeItem(FORM_STATE_KEY);
}

export function updateFormState(partialState: Partial<IthakaForm>) {
  createFormState(initialFormState); 
  const currentState = loadFormState() as IthakaForm;
  const newState = { ...currentState, ...partialState };
  saveFormState(newState);
  return newState;
}