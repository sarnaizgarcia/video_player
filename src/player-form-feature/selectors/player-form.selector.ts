import { PlayerFormState } from '../reducer';

export const FEATURE_PLAYER_FORM = 'playerForm';

export interface State {
  [FEATURE_PLAYER_FORM]: PlayerFormState
};