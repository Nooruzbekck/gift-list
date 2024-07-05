import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
