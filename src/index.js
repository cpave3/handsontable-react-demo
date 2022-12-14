import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'handsontable/dist/handsontable.full.min.css';
import App from './App';

import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';

registerAllModules();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
