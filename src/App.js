import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import List from './pages/List'
import Test from './pages/Test'
import Form from './pages/Form'
import Curl from './pages/Curl'

function App () {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test/form" element={<Form />} />
        <Route path="/test/curl" element={<Curl />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
