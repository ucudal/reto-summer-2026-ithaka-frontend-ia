import { IthakaForm } from "./interfaces/IthakaFormInterface";

export const initialFormState: IthakaForm = {
  name: "",
  lastname: "",
  email: "",
  cellphone: "",
  ci: "",
  placeOfResidence: "Montevideo", // Most probable place
  placeOfContactIthaka: "Montevideo",
  relationToUCU: "",
  howFoundOut: "",
  hasTeam: false,
  team: [],
  previousExperience: "",
  problemToSolve: "",
  proposedSolution: "",
  differentialFromCompetitors: "",
  businessModel: "",
  currentProjectPhase: "es solo una idea",
  wantsFromIthaka: {
    financing: false,
    validateIdea: false,
    businessPlan: false,
    training: false,
    mentorship: false,
  },
  availableTime: {
    morning: false,
    evening: false,
    lateEvening: false,
  },
};