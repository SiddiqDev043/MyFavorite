import React, { useEffect, useRef } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home,Picture,Card,Cake,Present } from "./components"
import './index.css'

function App() {

  const audioRef = useRef(null);
  const isPlayedRef = useRef(false); // untuk mencegah double play

  useEffect(() => {
    audioRef.current = new Audio('/StillWithYou.mp3'); // dari folder public
    audioRef.current.loop = true; // biar muter terus

    const handleClick = () => {
      if (!isPlayedRef.current && audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log('Gagal memutar audio:', err);
        });
        isPlayedRef.current = true;
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pictures" element={<Picture/>}/>
          <Route path="/card" element={<Card/>}/>
          <Route path="/cake" element={<Cake/>}/>
          <Route path="/present" element={<Present/>}/>
      </Routes>

    </Router>
  )
}

export default App
