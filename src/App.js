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
function App() {
    return (React.createElement(QueryClientProvider, { client: queryClient },
        React.createElement(ReactQueryDevtools, { initialIsOpen: false }),
        React.createElement(AppContainer, null,
            React.createElement(Header, null),
            React.createElement(Filters, null),
            React.createElement(PaintingsList, null),
            React.createElement(Pag, null))));
}
export default App;
