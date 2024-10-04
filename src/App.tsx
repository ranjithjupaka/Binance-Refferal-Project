import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '@/lib/layout';
import Routings from '@/lib/router/Routings';
import { AuthProvider } from './contexts/AuthContext'

const App = () => (
  <Router>
    <AuthProvider>
      <Layout>
        <Routings />
      </Layout>
    </AuthProvider>
  </Router>
)

export default App;
