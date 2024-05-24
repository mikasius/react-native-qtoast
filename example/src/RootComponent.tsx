import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from './common/AppButton';
import { useToastContext } from '../../src/provider/Context';

export const RootComponent = () => {
  const toasts = useToastContext();

  const [index, setIndex] = useState<number>(0);

  const buttons: { message: string; onPress: () => void }[] = useMemo(
    () => [
      {
        onPress: () => {},
        message: 'Show toast',
      },
      {
        onPress: () => {},
        message: 'Show permanent toast',
      },
      {
        onPress: () => {},
        message: 'Pause all toasts',
      },
      {
        onPress: () => {},
        message: 'Unpause all toasts',
      },
      {
        onPress: () => {},
        message: 'Clear queue',
      },
    ],
    []
  );

  return (
    <View style={OwnStyles.appContainer}>
      {buttons.map((button) => (
        <StyledAppButton {...button} key={button.message} />
      ))}
    </View>
  );
};

const StyledAppButton = (props: { message: string; onPress: () => void }) => (
  <AppButton onPress={props.onPress} style={OwnStyles.button}>
    <Text>{props.message}</Text>
  </AppButton>
);

const OwnStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: 16,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  button: {
    padding: 16,
  },
});
