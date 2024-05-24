import React, { FC, PropsWithChildren, useReducer } from 'react';
import { Toast, ToastContext, ToastContextType } from './Context';
import { ViewStyle } from 'react-native';
import { ToastComponent } from '../ToastComponent';
import { initialState, toastReducer } from '../reducer';

export type ToastProviderProps = PropsWithChildren<{
  wrapperStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  amountOfShownToasts?: number;
  position?: 'top' | 'bottom';
  inverted?: boolean;
}>;

// const DEFAULT_AMOUNT_OF_TOASTS = 3;

export let ToastAccessor: ToastContextType;

const toasts: Toast[] = [{ id: 'some1' }, { id: 'some2' }, { id: 'some3' }, { id: 'some4' }];

export const ToastProvider: PropsWithChildren<FC> = props => {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  // const [queue, setQueue] = useState<ToastProps[]>([]);
  // const [shownToasts, setShownToasts] = useState<ToastProps[]>([]);
  // const providerRef = useRef<ToastContextType>();
  // const shownToastsRef = useRef(shownToasts);
  //
  // useLayoutEffect(() => {
  //   shownToastsRef.current = shownToasts;
  // });
  //
  // const hide = useCallback(async (id?: string) => {
  //   const toasts = shownToastsRef.current;
  //   if (id === undefined) {
  //     await Promise.all(toasts.map(async (toast) => await toast.onHide?.()));
  //   } else {
  //     await toasts.find((x) => x.id === id)?.onHide?.();
  //   }
  //
  //   setQueue((current) => (id === undefined ? [] : current.filter((toast) => toast.id !== id)));
  // }, []);
  //
  // const show = useCallback((newToast: CreateToastProps): string => {
  //   const animatedToast = newToast.animated ? createAnimatedToastConfig(newToast) : newToast;
  //
  //   const _id = generateUniqueId();
  //   setQueue((current) => [...current, { ...animatedToast, id: _id }]);
  //
  //   return _id;
  // }, []);
  //
  // const togglePause = useCallback((id: string | undefined, pause: boolean) => {
  //   const pausedToasts = shownToastsRef.current.map((toast) =>
  //     toast.id !== id && id !== undefined ? toast : { ...toast, paused: pause }
  //   );
  //
  //   setShownToasts(pausedToasts);
  // }, []);
  //
  // const pause = useCallback((id?: string) => togglePause(id, true), [togglePause]);
  //
  // const unpause = useCallback((id?: string) => togglePause(id, false), [togglePause]);
  //
  // const getSliceFromQueue = useCallback(() => {
  //   let q = queue.slice(0, props.amountOfShownToasts ?? DEFAULT_AMOUNT_OF_TOASTS);
  //
  //   shownToastsRef.current.forEach((toast) => {
  //     q = q.map((x) => (x.id === toast.id ? toast : x));
  //   });
  //
  //   return props.inverted ? q : q.reverse();
  // }, [props.amountOfShownToasts, props.inverted, queue]);
  //
  // useEffect(() => {
  //   setShownToasts(getSliceFromQueue());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [queue]);
  //
  // useEffect(() => {
  //   providerRef.current = {
  //     queue,
  //     onShow: show,
  //     onHide: hide,
  //     onPause: pause,
  //     onUnpause: unpause,
  //   };
  //
  //   ToastAccessor = providerRef.current;
  // }, [hide, pause, queue, show, unpause]);
  //

  return (
    <ToastContext.Provider value={toasts}>
      <ToastComponent />

      {props.children}
    </ToastContext.Provider>
  );
};
