import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './layout/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
