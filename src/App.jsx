import { useEffect } from 'react';

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

function App() {
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

  return (
    <div className="site-wrapper">
      <header className="hero">
        <nav className="nav">
          <p className="brand">JesusFit</p>
          <a href="#contacto" className="nav-cta">
            Empezar hoy
          </a>
        </nav>

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
      </section>

      <footer className="footer">
        <p>JesusFit 2026 | Y su gente bella</p>
      </footer>
    </div>
  );
}

export default App;
