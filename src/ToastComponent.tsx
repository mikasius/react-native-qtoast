import React, { VFC } from 'react';
import { Text, View } from 'react-native';
import { useToastContext } from './provider/Context';

/**
 * Render toast in certain place.
 */
export const ToastComponent: VFC = () => {
  const context = useToastContext();

  // const timeoutEnd = useRef<number | null>(null);
  // const remainingTimeout = useRef<typeof props.timeout>(props.timeout);
  // const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // const onHide = useCallback(async () => {
  //   await props.onHide?.();
  //   context.onHide(props.id);
  // }, [onHide, props]);
  //
  // useEffect(() => {
  //   if (props.paused) {
  //     if (timer.current && timeoutEnd.current) {
  //       clearTimeout(timer.current);
  //       remainingTimeout.current = timeoutEnd.current - new Date().getTime();
  //
  //       timer.current = null;
  //     }
  //
  //     return;
  //   }
  //
  //   if (props.timeout == null) return;
  //
  //   timer.current =
  //     timer.current ?? setTimeout(async () => await onHide(), remainingTimeout.current);
  //
  //   timeoutEnd.current = timeoutEnd.current ?? new Date().getTime() + props.timeout;
  // }, [onHide, onHide, props, props.paused]);

  return (
    <View pointerEvents="box-none" style={{ padding: 20 }}>
      {context.map((toast) => (
        <View key={toast.id}>
          <Text>{`Toast ${toast.id}`}</Text>
        </View>
      ))}
    </View>
  );
};
