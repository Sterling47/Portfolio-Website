import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '@/Navbar/Navbar';
import Intro from '@/Intro/Intro';
import About from '@/About/About';
import Portfolio from '@/Portfolio/Portfolio';
import Contact from '@/Contact/Contact';
import Resume from '@/Resume/Resume';
import '../src/style.css'
import AnimatedBg from '@/AnimatedBg/AnimatedBg';



function App() {
 
  return (
    <Router>
      <AnimatedBg />
      <div className="relative flex  flex-col m:gap-8 overflow-y-hidden w-full h-full justify-between items-center ">
        <Intro className="h-[100vh] w-full" />
        <About className="h-[100vh] w-full" />
        <Portfolio className="h-[100vh] w-full" />
        <Contact className="h-[100vh] w-full" />
      </div>
    </Router>
  );
}

export default App;
