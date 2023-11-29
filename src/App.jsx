import { BrowserRouter } from 'react-router-dom';
import { About, Navbar, Hero, Experience, Tech, Works, Contact } from './components';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App