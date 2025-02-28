import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import img1 from '../assets/burger-bar.png';
import facebook from '../assets/facebook.png';
import hello from '../assets/Hello.png';
import { getCurrentWeekNumber } from '../utils/dateUtils';
import { Link, Element } from 'react-scroll';
import image from '../assets/image.png'
gsap.registerPlugin(useGSAP);

const HomePage: React.FC = () => {
  const currentWeekNumber = getCurrentWeekNumber();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  // Animate the call-to-action text
  useGSAP(() => {
    gsap.to('#cta', { opacity: 1, x: 20, delay: 1 });
  });

  // Animate the dropdown menu when isMenuOpen changes
  useGSAP(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#1e3e3e] text-[#dcca87] font-sans">
      {/* 1) Thin gold stripe at the top */}
      <Element name="home">
        <div className="bg-[#dcca87] w-full h-8"></div>
        </Element>
      

      {/* 2) Top Navbar Section */}
      <header className="bg-[#1e3e3e] px-6 py-4 flex items-center justify-between relative">
        {/* Brand Name */}
        <h1 className="text-xl font-bold text-black font-cormorant">
          <img src={image} alt="" className=" h-6"/>
        </h1>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#dcca87] focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <img src={img1} alt="Close menu" className="w-6 h-6 " />
            )
            
            
            
            }
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 text-2xl font-cormorant">
          <a href="#" className="hover:underline">
            Hem
          </a>
          <a href="#" className="hover:underline">
            Meny
          </a >
          <Link className="hover:underline cursor-pointer" 
          to='lunch'
          smooth={true}
          duration={1000}
          >
          Lunch
          </Link>
          <Link
          to="contact"
          smooth={true}
          duration={1000}
          className="hover:underline cursor-pointer"
        >
          Kontakt
        </Link>
        </nav>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className="overflow-hidden md:hidden absolute top-full left-0 w-full bg-[#0c0b08] z-10"
          style={{ height: 0, opacity: 0 }}
        >
          <nav className="flex flex-col ml-5 gap-4 text-xl font-cormorant py-4 text-[#dcca87]">
          <a href="#" className="hover:underline" onClick={closeMenu}>
            Hem
          </a>
          <a href="#" className="hover:underline" onClick={closeMenu}>
            Meny
          </a >
          <Link className="hover:underline cursor-pointer" 
          to='lunch'
          smooth={true}
          duration={1000}
          onClick={closeMenu}
          >
          Lunch
          </Link>
          <Link
          to="contact"
          smooth={true}
          duration={1000}
          className="hover:underline cursor-pointer"
          onClick={closeMenu}
        >
          Kontakt
        </Link>
          </nav>
        </div>
      </header>



      {/* 3) Main Content */}
      <main className="px-4 py-8 flex flex-col items-center font-cormorant">

        {/* Big Heading */}
        <h1
          id='cta'
          className="text-4xl md:text-6xl font-bold text-center mb-4 opacity-0 "
        >
          Välkomna in till en smaklig måltid!
        </h1>

        {/* Subtitle */}
      <Element name="lunch">
            <h2 className="text-4xl md:text-6xl text-center mb-2">
          Lunchmeny
        </h2>
      </Element>
    

        {/* Vecka + Number */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-white">Vecka</h3>
          <p className="text-4xl font-bold text-white">{currentWeekNumber}</p>
        </div>

        {/* Menu Items */}
        <div className="space-y-4 text-center max-w-xl">
          <div>
            <h4 className="font-bold text-xl text-white">Måndag</h4>
            <p>
              Fläskgryta med fruktcocktail, ris &amp; panerad stilla
              havsspätta med remouladsås, kokt potatis
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xl text-white">Tisdag</h4>
            <p>
              Stekt fläsk med raggmunk, lingon &amp; spaghetti
              med köttfärssås
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xl text-white">Onsdag</h4>
            <p>
              Boeuf bourguignon med potatismos &amp; parmesan-toppad
              kycklingfilé, krämig tomatsås, klyftpotatis
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xl text-white">Torsdag</h4>
            <p>
              Hemgjorda köttbullar, potatismos, gräddsås, lingon
              &amp; stekt falukorv, stuvade makaroner
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xl text-white">Fredag</h4>
            <p>
              Panerad fläsknoisette med bearnaisesås, klyftpotatis
            </p>
          </div>
        </div>
      </main>
      
      <section className="bg-[#00000070] w-full py-8 flex justify-center">
  <div className="max-w-3xl px-6">
    <Element name="contact">
      <p className="mb-4 text-xl font-cormorant text-left text-white">
        Här hittar ni all vår kontaktinformation. Tveka inte att höra av er vid beställningar eller om ni har några frågor – vi finns här för att hjälpa till!
      </p>
    </Element>
    <p className="mb-4 text-xs text-left text-[#aaa]">
      Centrumgatan 1<br />
      363 44 Lammhult
    </p>
    <p className="mb-4 text-xs text-left text-[#aaa]">
      0472-26 01 33<br />
      hej@lammhultsvardshus.se
    </p>
    <h3 className="text-2xl font-bold mb-2 font-cormorant text-left text-[#dcca87]">Öppentider</h3>
    <p className="mb-4 text-xs text-left text-[#aaa]">
      Mån-Tor 11:30 - 20:00<br />
      Fre-Lör 12:00 - 21:00<br />
      Sön 11:30 - 20:00
    </p>
        <div className="flex justify-center">
  <a
    href="https://www.google.com/maps/dir//Centrumgatan+1,+363+44+Lammhult/@57.1690966,14.4997153,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x46574b16489833c7:0xb9bdedf11e0498ea!2m2!1d14.582024!2d57.1690333?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-[#dcca87] text-[black] px-4 py-2 hover:opacity-80 font-cormorant">
      Vägbeskrivning
    </button>
  </a>
</div>
</div>
      </section>

      {/* Gold Section with 4 Large Buttons */}
      <section className="text-[#0d3b36] px-6 py-8 font-cormorant text-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center max-w-lg mx-auto">
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className="border border-[#0d3b36] py-6 font-bold bg-[#dcca87] cursor-pointer"
        >
          Hem
        </Link>
        <Link
          to="menu"
          smooth={true}
          duration={500}
          className="border border-[#0d3b36] py-6 font-bold bg-[#dcca87] cursor-pointer"
        >
          Meny
        </Link>
        <Link
          to="lunch"
          smooth={true}
          duration={1000}
          className="border border-[#0d3b36] py-6 font-bold bg-[#dcca87] cursor-pointer"
        >
          Lunch
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="border border-[#0d3b36] py-6 font-bold bg-[#dcca87] cursor-pointer"
        >
          Kontakt
        </Link>
      </div>



    </section>

      {/* Footer Bar (Black) */}
      <footer className="text-center">
        <a href="https://www.facebook.com/lammhultsvardshus?locale=sv_SE" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="facebook" className="w-10 h-10 mx-auto text-[#dcca87]"/>
            </a>


            <div className="flex justify-center mt-10">
              <div className="flex items-center bg-[#00000070] text-white px-4 py-2 ">
                <p className="flex items-center">
                  Med
                  <span className="text-red-500 mx-1">❤️</span>
                  av
                </p>
                <img src={hello} alt="" className="h-6 ml-2" />
              </div>
          </div>

      </footer>
    </div>
  );
};

export default HomePage;
