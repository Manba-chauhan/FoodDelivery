import React from 'react';
import Header from './Components/Header';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section4 from './Components/Section4';
import Section3 from './Components/Section3';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Footer from './Components/Footer';
// import Section3 from './Components/Section3';

const App = () => {
  return (
    <div className='w-full h-full bg-white text-black'>
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
   <Section5 />
   <Section6 />
   <Footer />
    </div>
  );
}

export default App;
