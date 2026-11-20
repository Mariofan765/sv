import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroCard from './components/HeroCard';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import Details from './components/Details';
import Gift from './components/Gift';
import DressCode from './components/DressCode';
import RSVP from './components/RSVP';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date('2027-07-31T16:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <HeroCard />
      <Intro />
      <Timeline />
      <Details countdownDays={countdown.days} countdownHours={countdown.hours} countdownMinutes={countdown.minutes} countdownSeconds={countdown.seconds} />
      <Gift />
      <DressCode />
      <RSVP />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
