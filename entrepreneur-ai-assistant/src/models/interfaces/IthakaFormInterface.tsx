export interface IthakaForm {
  name: string;
  lastname: string;
  email: string;
  cellphone: string;
  ci: string;
  placeOfResidence: Department;
  placeOfContactIthaka: DepartmentsWithIthaka;

  relationToUCU: string;

  howFoundOut: string;

  hasTeam: boolean;
  team?: TeamMember[]; // If he has a team

  previousExperience: string;
  problemToSolve: string;
  proposedSolution: string;
  differentialFromCompetitors: string;
  businessModel: string;

  currentProjectPhase: ProjectPhase;

  wantsFromIthaka: IthakaServices;

  availableTime: AvailableTimePeriod;

  comments?: string;
}

export interface TeamMember {
  name: string;
  lastname: string;
  cellphone: string;
  email: string;
  role: string;
}

export type ProjectPhase =
  | "es solo una idea"
  | "una idea que vengo trabajando hace un tiempo"
  | "es un negocio que ya genero sus primeras ventas"
  | "es un emprendimiento consolidado";

  export type Department =
  | "Montevideo"
  | "Canelones"
  | "San Jose"
  | "Colonia"
  | "Flores"
  | "Soriano"
  | "Florida"
  | "Paysandu"
  | "Salto"
  | "Artigas"
  | "Rivera"
  | "Cerro Largo"
  | "Rio Negro"
  | "Rocha"
  | "Maldonado"
  | "Tacuarembo"
  | "Treinta y Tres"
  | "Lavalleja";

export type DepartmentsWithIthaka = 
  | "Montevideo"
  | "Salto"
  | "Maldonado";

export interface IthakaServices {
  financing: boolean;
  validateIdea: boolean;
  businessPlan: boolean;
  training: boolean;
  mentorship: boolean;
  otherService?: string;
}

export interface AvailableTimePeriod {
  morning: boolean;
  evening: boolean;
  lateEvening: boolean;
  other?: string;
}
