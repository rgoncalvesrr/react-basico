import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/Routes';
import { UsuarioLogadoProvider } from './shared/contexts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <UsuarioLogadoProvider>
      <AppRoutes />
    </UsuarioLogadoProvider>
  </BrowserRouter>
);