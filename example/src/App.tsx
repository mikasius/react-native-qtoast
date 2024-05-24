import * as React from 'react';

import { RootComponent } from './RootComponent';
import { ToastProvider } from '../../src/provider/Provider';

export default function App() {
  return (
    <ToastProvider>
      <RootComponent />
    </ToastProvider>
  );
}
