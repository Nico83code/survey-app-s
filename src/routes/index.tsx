import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Step from '../pages/Steps/Steps';

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='steps'>
              <Route index element={<Step />} />
              <Route path=':stepNumber' element={<Step />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
