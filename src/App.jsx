import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage';
import TemaOnePage from './pages/Diamond/TemaOnePage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/features" element={<Features />} /> */}

          <Route path="/tema-1-diamond" element={<TemaOnePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
