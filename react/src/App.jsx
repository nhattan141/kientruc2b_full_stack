import Routes from '../src/routes';
import * as React from 'react';

import Loader from './layout/UserLayout/Loader/Loader';

function App() {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes />
    </React.Suspense>
  );
}

export default App;
