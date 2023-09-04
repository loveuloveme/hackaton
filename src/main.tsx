import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ThemeProvider from './components/ThemeProvider/index.ts';
import { Provider } from 'react-redux';
import { store } from './redux/';

import './styles/fonts.css';
import './styles/globals.css';
import './styles/scrollbar.css';

import { BrowserRouter } from 'react-router-dom';
import AuthMiddleware from './components/AuthMiddleware/AuthMiddleware.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    //<React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <AuthMiddleware>
                <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                    <App />
                </ThemeProvider>
            </AuthMiddleware>
        </Provider>
    </BrowserRouter>
    //</React.StrictMode>,
);
