import { Toast } from './provider/Context';

export const initialState: State = {
  toasts: [],
};

type State = {
  toasts: Toast[];
};
type Action =
  | { type: 'show'; payload: { id: string } }
  | { type: 'hide'; payload: { id: string } }
  | { type: 'pause'; payload: { id: string } }
  | { type: 'unpause'; payload: { id: string } };

export const toastReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'show': {
      return { ...state, toasts: [{ id: action.payload.id }] };
    }

    case 'unpause': {
      return { ...state, toasts: [{ id: action.payload.id }] };
    }

    default:
      return initialState;
  }
};
