import { BrowserRouter } from 'react-router-dom';
import PageLayout from './layout/PageLayout';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <AppRoutes />
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;
