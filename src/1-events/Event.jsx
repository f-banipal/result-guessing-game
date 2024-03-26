import React, { useState } from "react";
import "./Event.scss";

const ciftSayilar = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92,94, 96, 98, 100];

 
function rastgeleCiftSayiSec() {
  // Dizinin uzunluğunu alın
  const uzunluk = ciftSayilar.length;
  // Rastgele bir indeks seçin
  const randomIndex = Math.floor(Math.random() * uzunluk);
  // Seçilen indeksteki sayıyı döndürün
  return ciftSayilar[randomIndex];
}

 const secilenCiftSayi = rastgeleCiftSayiSec();
const Event = () => {


  let [message1, setMessage1] = useState("Bir sayi tuttum.");
  let [message2, setMessage2] = useState("2 ile carptim");
  let [message3, setMessage3] = useState(`${secilenCiftSayi} ekledim`);
  let [message4, setMessage4] = useState("2'ye boldum");
  let [message5, setMessage5] = useState("ilk sayiyi cikardim");
  let [message6, setMessage6] = useState(secilenCiftSayi/2);

  const [isHidden1, setIsHidden1] = useState(false);
  const [isHidden2, setIsHidden2] = useState(true);
  const [isHidden3, setIsHidden3] = useState(true);
  const [isHidden4, setIsHidden4] = useState(true);
  const [isHidden5, setIsHidden5] = useState(true);
  const [isHidden6, setIsHidden6] = useState(true);

  // Butona tıklanıp tıklanmadığını izleyen bir state
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [clicked6, setClicked6] = useState(false);

  const handleClick1 = () => {
    if (!clicked1) {
      // Eğer birinci butona daha önce tıklanmadıysa
      setIsHidden1(true); // İlk butona tıklandığında gizle
      setClicked1(true); // clicked1 state'ini true yapın
    }
  };

  const handleClick2 = () => {
    if (!clicked2) {
      // Eğer ikinci butona daha önce tıklanmadıysa
      setIsHidden2(!isHidden2);
      setClicked2(true); // clicked2 state'ini true yapın
    }
  };
  const handleClick3 = () => {
    if (!clicked3) {
      // Eğer ikinci butona daha önce tıklanmadıysa
      setIsHidden3(!isHidden3);
      setClicked3(true); // clicked2 state'ini true yapın
    }
  };

  const handleClick4 = () => {
    if (!clicked4) {
      // Eğer ikinci butona daha önce tıklanmadıysa
      setIsHidden4(!isHidden4);
      setClicked4(true); // clicked2 state'ini true yapın
    }
  };

  const handleClick5 = () => {
    if (!clicked5) {
      // Eğer ikinci butona daha önce tıklanmadıysa
      setIsHidden5(!isHidden5);
      setClicked5(true); // clicked2 state'ini true yapın
    }
  };
  const handleClick6 = () => {
    if (!clicked6) {
      // Eğer ikinci butona daha önce tıklanmadıysa
      setIsHidden6(!isHidden6);
      setClicked6(true); // clicked2 state'ini true yapın
    }
  };

  const handleDegistir1 = () => {
    setMessage1("OK");
  };
  const handleDegistir2 = () => {
    setMessage2("OK");
  };
  const handleDegistir3 = () => {
    setMessage3("OK");
  };
  const handleDegistir4 = () => {
    setMessage4("OK");
  };
  const handleDegistir5 = () => {
    setMessage5("OK");
  };
  const handleDegistir6 = () => {
    setMessage6(secilenCiftSayi / 2);
  };

  const handleButtonClick1 = () => {
    handleClick2();
    handleDegistir1();
    handleClick1();
  };
  const handleButtonClick2 = () => {
    handleClick3();
    handleDegistir2();
  };
  const handleButtonClick3 = () => {
    handleClick4();
    handleDegistir3();
  };
  const handleButtonClick4 = () => {
    handleClick5();
    handleDegistir4();
  };
  const handleButtonClick5 = () => {
    handleClick6();
    handleDegistir5();
  };
  const handleButtonClick6 = () => {
    handleDegistir6();
  };

  return (
    <div className="container">
      <h1>Sonucu Bilme Oyunu</h1>
      <section className="sec sec__sec1">
        <h3>0-100 arasinda bir sayi tut!</h3>
        <button
          className={`sec__sec1__sayi1 ${
            isHidden1 ? "sec__sec1__sayiTuttum" : "sec__sec1__sayiTutmadim"
          }`}
          onClick={handleButtonClick1}
        >
          {message1}
        </button>
      </section>

      <section
        style={{ visibility: isHidden2 ? "hidden" : "visible" }}
        className="sec sec__sec2"
      >
        <h3>Tuttugun sayiyi 2 ile carp</h3>
        <button
          className={`sec__sec2__sayi2 ${
            isHidden1 ? "sec__sec2__sayiTuttum" : "sec__sec2__sayiTutmadim"
          }`}
          onClick={handleButtonClick2}
          id="nbtn"
          name="my-button"
        >
          {message2}
        </button>
      </section>

      <section
        style={{ visibility: isHidden3 ? "hidden" : "visible" }}
        className="sec sec__sec3"
      >
        <h3>Sonuca {secilenCiftSayi} ekle</h3>
        <button
          className={`sec__sec3__sayi3 ${
            isHidden3 ? "sec__sec3__sayiTuttum" : "sec__sec3__sayiTutmadim"
          }`}
          onClick={handleButtonClick3}
          id="nbtn"
          name="my-button"
        >
          {message3}
        </button>
      </section>
      <section
        style={{ visibility: isHidden4 ? "hidden" : "visible" }}
        className="sec sec__sec4"
      >
        <h3>Cikan sonucu 2'ye bol</h3>
        <button
          className={`sec__sec4__sayi4 ${
            isHidden4 ? "sec__sec4__sayiTuttum" : "sec__sec4__sayiTutmadim"
          }`}
          onClick={handleButtonClick4}
          id="nbtn"
          name="my-button"
        >
          {message4}
        </button>
      </section>
      <section
        style={{ visibility: isHidden5 ? "hidden" : "visible" }}
        className="sec sec__sec5"
      >
        <h3>Cikan sonuctan ilk tutugun sayiyi cikar</h3>
        <button
          className={`sec__sec5__sayi5 ${
            isHidden5 ? "sec__sec5__sayiTuttum" : "sec__sec5__sayiTutmadim"
          }`}
          onClick={handleButtonClick5}
          id="nbtn"
          name="my-button"
        >
          {message5}
        </button>
      </section>
      <section
        style={{ visibility: isHidden6 ? "hidden" : "visible" }}
        className="sec sec__sec5"
      >
        <h3>KALAN SAYI</h3>
        <button
          className={`sec__sec6__sayi6 ${
            isHidden6 ? "sec__sec6__sayiTuttum" : "sec__sec6__sayiTutmadim"
          }`}
          onClick={handleButtonClick6}
          id="nbtn"
          name="my-button"
        >
          {message6}
        </button>
      </section>
    </div>
  );
};

export default Event;
