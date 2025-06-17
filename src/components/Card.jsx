import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "../assets/css/card.css";
import { Link } from 'react-router-dom'; 

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const timerRef = useRef(null);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true); 
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-clip">
    <div className="w-[400px]  h-screen flex flex-col items-center justify-center">
      <motion.div  initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{duration: 1.2}}>
      <div id="card" className={`${cardClass}`} onClick={toggleCard}>     
        <div id="card-inside">
          <div className="wrap">
            <p>Selamat ulang tahun ya, maaf baru bisa ngucapin sekarang :(</p>
            <p>
              Oh iya, aku ingat dulu kamu ingin menjadi pramugari yang baik dan cantik ya kan? ku harap itu tercapai ya. Tapi, apapun keinginan mu aku akan mendukung dan mendoakan. Kecuali jadi istri cha eun woo. Dia dah tunangan awowkwok :P
            </p>
            <p>
             Aku cuma ingin kamu tau bahwa semenyakitkan apapun
             yang diberi mereka ke kamu, anggapan apapun yang mereka beri ke kamu. Disini masih ada 1 orang yang menyukaimu bahkan dari 6 tahun lalu, Dan akan terus begitu
            </p>
            <p>
              You always be my favorite
            </p>
            <p className="signed"></p>
          </div>
        </div>

        <div id="card-front">
          <div className="wrap">
            <h1>Happy Birthday Fhiaaaaa!</h1>
          </div>
        </div>
    </div>

      </motion.div>

    {/* prone to bugs */}
      {isCardOpened && (
        <motion.div className="-mt-[3rem]" initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ opacity: 1, visibility: "visible" }}
        transition={{duration: 1.2}}> 
        <Link to ='/cake'>
        <p className="-mt-[4rem] px-7 py-3 bg-customBlue text-white font-medium text-base rounded-full hover:bg-blue-600">
            selanjutnya
          </p>
        </Link>
            
        </motion.div>
         
        )}

    </div>
    
    </div>
    
  );
}

export default Card;