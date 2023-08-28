import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ThemeProvider from './components/ThemeProvider/index.ts';
import { Provider } from 'react-redux';
import { store } from './redux/';

import './styles/fonts.css';
import './styles/globals.css';
import './styles/scrollbar.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    //<React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <App />
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
    //</React.StrictMode>,
);
