import React from 'react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'var(--header-height)',
            backgroundImage: 'linear-gradient(rgba(245, 241, 232, 0.9), rgba(245, 241, 232, 0.8)), url("/hero-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>

            <div className="container relative z-10 text-center fade-in-up" style={{ position: 'relative', zIndex: 1 }}>
                <span className="section-subtitle">Psicología Clínica & Bienestar</span>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    marginBottom: 'var(--spacing-md)',
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Encuentra el equilibrio y la felicidad en cada momento
                </h1>

                <p style={{
                    fontSize: '1.125rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: 'var(--spacing-lg)',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Terapia Cognitivo Conductual y Sistémica especializada.
                    Un espacio seguro para tu proceso de cambio, presencial u online.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="#contact" className="btn btn-primary">
                        Agendar Consulta
                    </a>
                    <a href="#about" className="btn btn-outline">
                        Conocer más
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
