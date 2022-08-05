import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Step from '../pages/Step/Step';
import Summary from '../pages/Summary/Summary';
import Thankyou from '../pages/Thankyou/Thankyou';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='steps'>
          <Route index element={<Step />} />
          <Route path=':stepNumber' element={<Step />} />
        </Route>
        <Route path='summary' element={<Summary />} />
        <Route path='thankyou' element={<Thankyou />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
