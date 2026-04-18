/**
 * High-level wizard step for the client-only Favify flow.
 * Extend here when adding new screens (e.g. crop editor, account).
 */
export type FlowPhase =
  | 'landing'
  | 'generating'
  | 'confirm'
  | 'building_favicons'
  | 'export'
