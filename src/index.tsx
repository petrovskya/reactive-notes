import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';

import { queryClient } from 'api';
import { router } from 'router';
import { store } from 'store';
import { GlobalStyles, theme } from 'ui';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>,
);
