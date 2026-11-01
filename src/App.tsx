
import './App.css'

import { useState } from "react";

import MenuBarbakoa from "./MenuBarbakoa";

import Encontranos from "./Encontranos";

import ScrollReveal from "./ScrollReveal";

function MasQueFuego() {
  const fotos = [
    "/images/local3.png",
    "/images/local2.png",
    "/images/local1.png",
    "/images/local4.png",
    "/images/local5.png",
  ];

  const [fotoActual, setFotoActual] = useState(0);

  const cambiarFoto = (direccion: number) => {
    setFotoActual((actual) =>
      (actual + direccion + fotos.length) % fotos.length
    );
  };

  return (
    <section className="experiencia" id="nosotros">
      <div className="experiencia-container">
        <div className="experiencia-heading">
          <span className="experiencia-etiqueta">
            02 / LA EXPERIENCIA
          </span>

          <h2>
            MÁS QUE <span>FUEGO.</span>
          </h2>

          <p>
            Una experiencia que va más allá del primer bocado.
          </p>
        </div>

<div className="experiencia-grid">
  <div className="experiencia-carrusel">

        
<div className="experiencia-foto">
  <div
    className="experiencia-track"
    style={{
      transform: `translateX(-${fotoActual * 100}%)`,
    }}
  >
    {fotos.map((foto, index) => (
      <img
        key={foto}
        src={foto}
        alt={`Ambiente de BARBAKOA - foto ${index + 1}`}
      />
    ))}
  </div>
</div>


            <div className="experiencia-controles">
              <button
                type="button"
                onClick={() => cambiarFoto(-1)}
                aria-label="Fotografía anterior"
              >
                ←
              </button>

              <span>
                {String(fotoActual + 1).padStart(2, "0")}
                {" / "}
                {String(fotos.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={() => cambiarFoto(1)}
                aria-label="Fotografía siguiente"
              >
                →
              </button>
            </div>
          </div>

          {/* COLUMNA DERECHA */}
          <div className="experiencia-derecha">
            <div className="experiencia-foto-secundaria">
              <img
                src="/images/cocina.png"
                alt="Cocina y gastronomía de BARBAKOA"
              />
            </div>

            <div className="experiencia-texto">
              <h3>
                FUEGO. HUMO. <span>CARÁCTER.</span>
              </h3>

              
<p>
  En BARBAKOA, la buena comida y el ambiente se encuentran
  para crear momentos que vale la pena compartir.

  <br /><br />

  Inspirados en la auténtica tradición del{" "}
  <strong>Texas Barbecue</strong>, donde el humo, la paciencia
  y el sabor son protagonistas, llevamos a tu mesa carnes
  ahumadas lentamente, llenas de carácter y ese sabor
  inconfundible que solo el fuego puede crear.
</p>

            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

function App() {
  return (
    <div className="site">
       <ScrollReveal />
      <header className="navbar">
        <a href="#inicio" className="brand">
          <img
            src="/images/logo.png"
            alt="Barbakoa"
            className="brand-logo"
          />
        </a>

        <nav className="nav-links">
          <a href="#inicio" className="active">Inicio</a>
          <a href="#menu">Menú</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#ubicacion">Ubicación</a>
        </nav>

        <a href="#menu" className="nav-order">
          VER MENÚ ↗
        </a>
      </header>

      <main>
        <section className="hero-section" id="inicio">

          {/* TEXTO CENTRAL */}
          <div className="hero-content">
            <p className="eyebrow">
              <span className="eyebrow-line"></span>
              SMOKED TEXAS BARBECUE
              <span className="eyebrow-line"></span>
            </p>

            <h1>
              EL SABOR DEL <span>FUEGO.</span>
            </h1>

            <p className="hero-description">
              Carnes ahumadas lentamente, burgers irresistibles
              y el auténtico espíritu del Texas BBQ.
              Hecho en Paraguay.
            </p>

            <div className="hero-actions">
  <a href="#nosotros" className="hero-cta">
  EXPLORAR ↗
</a>
</div>
          </div>

          {/* PRODUCTOS EN TRIÁNGULO */}
          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="food food-meat">
              <img
                src="/images/brisket.png"
                alt="Carne brisket ahumada"
                className="food-image"
              />
              <span>01 / AHUMADOS</span>
            </div>

            <div className="food food-fries">
              <img
                src="/images/fries.png"
                alt="Papas fritas Barbakoa"
                className="food-image"
              />
              <span>02 / PAPAS</span>
            </div>

            <div className="food food-burger">
              <img
                src="/images/burger.png"
                alt="Hamburguesa Barbakoa"
                className="food-image"
              />
              <span>03 / BURGERS</span>
            </div>
          </div>

{/* FLECHA PARA BAJAR A MÁS QUE FUEGO */}
<a
  href="#nosotros"
  className="hero-scroll-arrow"
  aria-label="Descubrir más sobre BARBAKOA"
>
  
  <span className="hero-scroll-icon">↓</span>
</a>

          <div className="hero-bottom">
            <span>BARBAKOA © 2026</span>
            <span>TEXAS BBQ — ASUNCIÓN, PY</span>
          </div>
        </section>
        
{/* FRANJA ANIMADA TEXAS BBQ */}
<div className="bbq-marquee" aria-label="Texas BBQ, carnes ahumadas, hecho en Paraguay">
  <div className="bbq-marquee-track">
    {[0, 1, 2, 3].map((grupo) => (
      <div
        className="bbq-marquee-group"
        key={grupo}
        aria-hidden="true"
      >
        <span>TEXAS BBQ</span>
        <span className="bbq-star">★</span>
        <span>CARNES AHUMADAS</span>
        <span className="bbq-star">★</span>
        <span>HECHO EN PARAGUAY</span>
        <span className="bbq-star">★</span>
      </div>
    ))}
  </div>
</div>

<MasQueFuego />

<MenuBarbakoa />

<Encontranos />
      </main>
    </div>
  )
}

export default App
