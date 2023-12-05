import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import Home from './Home';
import Projects from './Projects';

const App = () => {
  return (
    <div>
      <div className='z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </div>
  )
}

export default App