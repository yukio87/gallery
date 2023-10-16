import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Filters from './features/filters/Filters';
import Pag from './features/pagination/Pag';
import PaintingsList from './features/paintings/PaintingsList';
import AppContainer from './ui/AppContainer';
import Header from './ui/Header';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AppContainer>
        <Header />
        <Filters />
        <PaintingsList />
        <Pag />
      </AppContainer>
    </QueryClientProvider>
  );
}

export default App;
