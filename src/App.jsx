import { useEffect, useState } from 'react';

const benefits = [
  {
    title: 'Entrenamiento con propósito',
    text: 'Rutinas diseñadas para ayudarte a avanzar con constancia y resultados reales.'
  },
  {
    title: 'Comunidad que motiva',
    text: 'Te rodeas de energía positiva con JesusFit y su gente bella en cada sesión.'
  },
  {
    title: 'Plan a tu ritmo',
    text: 'Opciones para principiantes y nivel avanzado con seguimiento semanal.'
  }
];

const plans = [
  {
    name: 'Inicio Activo',
    price: '$19/mes',
    items: ['3 clases en vivo por semana', 'Plan base de movilidad', 'Grupo de soporte']
  },
  {
    name: 'Fuerza Total',
    price: '$39/mes',
    items: ['5 clases en vivo por semana', 'Plan de fuerza y cardio', 'Seguimiento de progreso']
  },
  {
    name: 'Elite JesusFit',
    price: '$59/mes',
    items: ['Entrenamiento personalizado', 'Nutricion practica', 'Mentoria mensual 1:1']
  }
];

const testimonials = [
  {
    name: 'Carla M.',
    quote: 'Nunca habia sido tan constante. En JesusFit entreno feliz y con resultados.'
  },
  {
    name: 'David R.',
    quote: 'La energia del equipo te empuja a no rendirte. Se siente como familia.'
  },
  {
    name: 'Luisa P.',
    quote: 'Baje medidas y subi confianza. Todo con una rutina que si puedo sostener.'
  }
];

const heroSlides = [
  {
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=80',
    alt: 'Mujer entrenando con pesas en un gimnasio'
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80',
    alt: 'Grupo realizando entrenamiento funcional'
  },
  {
    src: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1400&q=80',
    alt: 'Hombre haciendo ejercicio intenso con cuerda'
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const whatsappLink = 'https://wa.me/51915350883?text=Hola%20JesusFit%2C%20quiero%20informacion';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="site-wrapper">
      <header className="hero">
        <nav className="nav">
          <p className="brand">JesusFit</p>
          <a href="#contacto" className="nav-cta">
            Empezar hoy
          </a>
        </nav>

        <div className="hero-layout">
          <div className="hero-content reveal">
            <p className="tag">Entrena con actitud</p>
            <h1>
              JesusFit
              <span>Y su gente bella</span>
            </h1>
            <p className="hero-text">
              Un espacio para transformar tu cuerpo y tu mentalidad con entrenamientos guiados,
              buena vibra y una comunidad que te impulsa.
            </p>
            <div className="hero-actions">
              <a href="#planes" className="btn btn-main">
                Ver planes
              </a>
              <a href="#beneficios" className="btn btn-ghost">
                Conocer mas
              </a>
              <a href={whatsappLink} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-carousel reveal" aria-label="Galeria de entrenamientos">
            <div className="hero-carousel-track">
              {heroSlides.map((slide, index) => (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  className={`hero-image ${index === currentSlide ? 'active' : ''}`}
                />
              ))}
            </div>

            <div className="carousel-controls">
              <button type="button" className="carousel-btn" onClick={goToPrev} aria-label="Imagen anterior">
                ←
              </button>
              <button type="button" className="carousel-btn" onClick={goToNext} aria-label="Imagen siguiente">
                →
              </button>
            </div>

            <div className="carousel-dots">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.alt}
                  type="button"
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hero-shape hero-shape-1" aria-hidden="true" />
        <div className="hero-shape hero-shape-2" aria-hidden="true" />
      </header>

      <main>
        <section id="beneficios" className="section">
          <div className="section-head reveal">
            <p className="section-kicker">Por que elegirnos</p>
            <h2>Lo que hace diferente a JesusFit</h2>
          </div>

          <div className="grid benefits-grid">
            {benefits.map((item) => (
              <article key={item.title} className="card reveal">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="planes" className="section section-alt">
          <div className="section-head reveal">
            <p className="section-kicker">Programas</p>
            <h2>Elige tu plan y activa tu mejor version</h2>
          </div>

          <div className="grid plans-grid">
            {plans.map((plan) => (
              <article key={plan.name} className="card plan-card reveal">
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <ul>
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#contacto" className="btn btn-main">
                  Quiero este
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head reveal">
            <p className="section-kicker">Testimonios</p>
            <h2>Personas reales, cambios reales</h2>
          </div>

          <div className="grid testimonials-grid">
            {testimonials.map((testimony) => (
              <article key={testimony.name} className="card testimonial reveal">
                <p>"{testimony.quote}"</p>
                <h3>{testimony.name}</h3>
              </article>
            ))}
          </div>
        </section>
      </main>

      <section id="contacto" className="section cta reveal">
        <h2>Tu momento es ahora</h2>
        <p>
          Reserva tu clase de prueba y comienza a entrenar con JesusFit y su gente bella.
        </p>
        <a className="btn btn-main" href="mailto:contacto@jesusfit.com">
          Contactar por correo
        </a>
        <a className="btn btn-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
          Escribir por WhatsApp
        </a>
      </section>

      <footer className="footer">
        <p>JesusFit 2026 | Y su gente bella</p>
      </footer>
    </div>
  );
}

export default App;
