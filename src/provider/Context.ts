import { createContext, useContext } from 'react';

export type Toast = {
  id: string;
  // Timeout for displaying.
  timeout?: number;

  // Render toast component.
  onRender?: () => void;

  // Toast methods.
  onShow?: () => void;
  onHide?: () => void;
  onPause?: () => void;
  onUnpause?: () => void;
};

export type ToastContextType = Toast[] | null;
export const ToastContext = createContext<ToastContextType>(null);
export const ToastsDispatchContext = createContext(null);

export const useToastContext = (): ToastContextType => useContext(ToastContext);
