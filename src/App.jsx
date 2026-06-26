import React, { useState, useEffect, useRef } from 'react'

const galleryImages = [
  '/foto1.jpeg',
  '/foto2.jpeg',
  '/foto3.jpeg',
  '/foto4.jpeg',
].map(encodeURI)

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const carouselRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollCarousel = (direction) => {
    const container = carouselRef.current
    if (!container) return
    const scrollAmount = container.offsetWidth * 0.75
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' })
  }

  return (
    <>
      <div className="app-shell">
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <nav className="nav-container">
            <div className="logo-text">
              <img
                src="/logo.png"
                alt="Logo Ação Acolher"
                className="nav-logo"
              />
            </div>
            <div className="nav-links">
              <a href="#sobre">Sobre</a>
              <a href="#momentos">Momentos</a>
              <a href="#participar">Participar</a>
            </div>
          </nav>
        </header>

        <header className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">✨ Projeto Social</p>
            <h1>Ação Acolher</h1>
            <p>
              Visitamos casas de acolhimento para levar <strong>carinho, conversa</strong> e <strong>boas memórias</strong> às crianças em situação de acolhimento.
            </p>

            <div className="hero-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">🏠</div>
                <p>Levamos presença</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💬</div>
                <p>Escuta que acolhe</p>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">😊</div>
                <p>Memórias que ficam</p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img src="/logo.png" alt="Logo Ação Acolher" className="hero-logo" />
          </div>
        </header>

        <main>
          <section id="sobre" className="section card">
            <h2>💖 Quem somos</h2>
            <p>
              O <strong>Ação Acolher</strong> é um projeto social formado por
              voluntários que visitam casas de acolhimento para levar amor,
              atenção e momentos de felicidade às crianças. Através de ações
              solidárias, atividades recreativas e arrecadação de doações,
              buscamos transformar pequenos gestos em grandes lembranças,
              contribuindo para um futuro mais acolhedor e cheio de esperança.
            </p>
          </section>

          <section className="section grid-section">
            <article className="card feature-card">
              <div>
                <h3>🏠 Visitas acolhedoras</h3>
                <p>
                  Levamos alegria e atenção pessoal para cada criança, com atividades
                  lúdicas e carinho em todos os encontros.
                </p>
              </div>
            </article>

            <article className="card feature-card">
              <div>
                <h3>💝 Boas memórias</h3>
                <p>
                  Nosso foco é transformar um dia comum em um dia de esperança, riso
                  e afeto, criando lembranças positivas para o futuro.
                </p>
              </div>
            </article>

            <article className="card feature-card">
              <div>
                <h3>🤝 Doações e apoio</h3>
                <p>
                  Sempre que arrecadamos, levamos doações úteis e significado para
                  as casas de acolhimento e para as crianças que visitamos.
                </p>
              </div>
            </article>
          </section>

          <section id="momentos" className="section card gallery-section">
            <h2>✨ Momentos especiais</h2>
            <div className="carousel-wrapper">
              <button
                className="carousel-btn carousel-btn--prev"
                onClick={() => scrollCarousel(-1)}
                aria-label="Anterior"
              >
                ‹
              </button>
              <div className="carousel-track" ref={carouselRef}>
                {galleryImages.map((src, index) => (
                  <figure key={index} className="gallery-item">
                    <img src={src} alt={`Momento especial ${index + 1}`} loading="lazy" />
                  </figure>
                ))}
              </div>
              <button
                className="carousel-btn carousel-btn--next"
                onClick={() => scrollCarousel(1)}
                aria-label="Próximo"
              >
                ›
              </button>
            </div>
          </section>

          <section id="participar" className="section card form-section">
            <h2>🎯 Quero ajudar / Doar / Ser voluntário</h2>
            <p>
              Se você quer fazer a diferença na vida de crianças em situação de acolhimento,
              clique no botão abaixo para preencher nosso formulário:
            </p>
            <a href="https://forms.gle/MU7cRZo8FXYE1NpR7" target="_blank" rel="noreferrer" className="primary-button">
              ✉️ Acessar formulário
            </a>
          </section>

          <section className="section card contact-section">
            <h2>📞 Junte-se a nós</h2>
            <p>
              Quer saber mais sobre nosso trabalho ou participar? Fale conosco:
            </p>
            <p>
              <strong>Instagram:</strong> <a href="https://instagram.com/acaoacollher" target="_blank" rel="noreferrer">@acaoacollher</a>
            </p>
            <p className="contact-info">
              <strong>Email:</strong> <a href="mailto:acaoacolher@gmail.com">acaoacolher@gmail.com</a>
            </p>

            <div className="pix-section">
              <h3>💰 Faça uma doação via PIX</h3>
              <p>Sua contribuição faz uma grande diferença. Se deseja, copie a chave do PIX que está no QR CODE abaixo. </p>
              <div className="hero-image">
                <img src="/qrcode.jpeg" alt="QR Code PIX" className="hero-logo" />
              </div>
              <div className="pix-preview">
                <img src="/pix-qr.png" alt="QR PIX" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer>
        <div className="footer-content">
          <div>
            <h3>❤️ Ação Acolher</h3>
            <p>Transformando pequenos gestos em grandes lembranças para crianças em acolhimento.</p>
          </div>
          <div>
            <h3>Como participar</h3>
            <p><a href="https://forms.gle/MU7cRZo8FXYE1NpR7" target="_blank" rel="noreferrer">👤 Ser voluntário</a></p>
            <p><a href="https://forms.gle/MU7cRZo8FXYE1NpR7" target="_blank" rel="noreferrer">💝 Fazer doação</a></p>
            <p><a href="https://instagram.com/acaoacollher" target="_blank" rel="noreferrer">📱 Nos acompanhar</a></p>
          </div>
          <div>
            <h3>Contato</h3>
            <p><a href="https://instagram.com/acaoacollher" target="_blank" rel="noreferrer">Instagram: @acaoacollher</a></p>
            <p><a href="mailto:acaoacolher@gmail.com">Email: acaoacolher@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Ação Acolher. Feito com ❤️ para quem precisa.</p>
        </div>
      </footer>
    </>
  )
}