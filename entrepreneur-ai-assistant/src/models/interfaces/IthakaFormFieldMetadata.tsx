import { IthakaForm } from "./IthakaFormInterface";

export interface IthakaFormFieldMetadata {
  field: keyof IthakaForm;
  label: string; // Proper name of the field
  description: string; // Description of what the field contains
  section: string;
  type: 'string' | 'boolean' | 'select' | 'multiselect' | 'array';
  importance: 'critical' | 'optional';
  aiExtractionHints?: string[]; // Snippets that can help the AI scout this info in a message
  aiEnrichmentHints?: string[]; // Prompts for the ai to propose or ask for key enrichments for the answer
  isRepeatable?: boolean;
}
