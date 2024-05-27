import { useContext } from 'react';
import { ToastContext, ToastContextProps } from './Context';

export const useToastContext = (): ToastContextProps => useContext(ToastContext);
