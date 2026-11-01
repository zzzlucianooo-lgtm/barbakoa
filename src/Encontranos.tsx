
import "./Encontranos.css";

const MAPS_URL =
  "https://maps.app.goo.gl/4kXou8vMcqF18SFR6";

const WHATSAPP_URL = "https://wa.me/595971328330";

function Encontranos() {
  return (
    <section className="ubicacion-section" id="ubicacion">
      <div className="ubicacion-container">

        <div className="ubicacion-header">
          <span className="ubicacion-eyebrow">
            04 / VISITANOS
          </span>

          <h2>
            ENCONTRA<span>NOS.</span>
          </h2>

          <p>
            El fuego está encendido. Solo faltás vos.
          </p>
        </div>

        <div className="ubicacion-grid">

          {/* INFORMACIÓN DEL LOCAL */}
          <div className="ubicacion-info">

            <div className="ubicacion-intro">
              <span className="ubicacion-small-label">
                BARBAKOA · TEXAS BARBECUE
              </span>

              <h3>
                EL BUEN BBQ
                <br />
                TIENE UN <span>LUGAR.</span>
              </h3>

              <p>
                Vení a disfrutar de nuestras carnes
                ahumadas, el auténtico sabor del fuego
                y un ambiente hecho para compartir.
              </p>
            </div>

            <div className="ubicacion-datos">

              <div className="ubicacion-dato">
                <div className="ubicacion-dato-icon">
                  <svg viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.7"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/>
                    <circle cx="12" cy="10" r="2.5"/>
                  </svg>
                </div>

                <div>
                  <span className="ubicacion-dato-label">
                    DIRECCIÓN
                  </span>
                  <p>Florida 1008 esq. Dr. Ciancio</p>
                  <small>Barrio Jara · Asunción, Paraguay</small>
                </div>
              </div>

              <div className="ubicacion-dato">
                <div className="ubicacion-dato-icon">
                  <svg viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.7"
                    strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 7v5l3.5 2"/>
                  </svg>
                </div>

                <div>
                  <span className="ubicacion-dato-label">
                    HORARIOS
                  </span>
                  <p>Jueves a domingos</p>
                  <small>18:00 a 23:00 hs</small>
                </div>
              </div>

              <div className="ubicacion-dato">
                <div className="ubicacion-dato-icon">
                  <svg viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.7"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.1 10a16 16 0 0 0 6.9 6.9l1.6-1.9a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.7 1.9Z"/>
                  </svg>
                </div>

                <div>
                  <span className="ubicacion-dato-label">
                    CONTACTO
                  </span>
                  <p>+595 971 328330</p>
                  <small>Consultas y pedidos por WhatsApp</small>
                </div>
              </div>

            </div>

            <div className="ubicacion-botones">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ubicacion-btn ubicacion-btn-primary"
              >
                CÓMO LLEGAR <span>↗</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ubicacion-btn ubicacion-btn-outline"
              >
                WHATSAPP <span>↗</span>
              </a>
            </div>

          </div>

          {/* MAPA INTERACTIVO */}
          <div className="ubicacion-mapa-columna">
            <div className="ubicacion-mapa-top">
              <span className="ubicacion-mapa-punto"></span>
              <span>EN EL CORAZÓN DE BARRIO JARA</span>
            </div>

            <div className="ubicacion-mapa">
              <iframe
                title="Ubicación de BARBAKOA en Google Maps"
                src="https://www.google.com/maps?q=BARBAK%C3%93A%2C%20Florida%201008%2C%20Asunci%C3%B3n%2C%20Paraguay&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="ubicacion-mapa-footer">
              <span>ASUNCIÓN, PARAGUAY</span>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                ABRIR EN GOOGLE MAPS ↗
              </a>
            </div>
          </div>

        </div>

        <footer className="ubicacion-footer">
          <div className="ubicacion-footer-line"></div>

          <div className="ubicacion-footer-content">
            <span>BARBAKOA © 2026</span>
            <span>FUEGO. HUMO. CARÁCTER.</span>
            <a href="#inicio">VOLVER ARRIBA ↑</a>
          </div>
        </footer>

      </div>
    </section>
  );
}

export default Encontranos;
