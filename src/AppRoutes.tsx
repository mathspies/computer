// Contains routing for entire application

import React, { ReactElement } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import ROUTES from './AppRouteNames';

import Home from './pages/Home';
import Version from './pages/Version';
import FourOhFour from './pages/FourOhFour';
import OperationOrder from './redirects/OperationOrder';

const AppRoutes = (): ReactElement => (
  <>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      {/* EXAMPLE: Route with a redirect*/}
      <Route path='/home' element={<Navigate to={ROUTES.HOME} />} />
      <Route path={ROUTES.VERSION} element={<Version />} />
      <Route
        path={ROUTES.EXTERNAL.RESTORE_ORDER}
        element={<OperationOrder />}
      />

      <Route path='*' element={<FourOhFour />} />
    </Routes>
  </>
);

export default AppRoutes;
