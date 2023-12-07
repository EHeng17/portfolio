import { About, Hero, Experience, Works, Contact, StarsCanvas, Podium } from './components';

function Home() {
  return (
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Podium />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
    </div>
  )
}

export default Home