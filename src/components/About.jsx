import React from 'react';

const About = () => {
    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
            <div className="container">
                <div className="grid-2" style={{ alignItems: 'center' }}>
                    {/* Image Column */}
                    <div className="fade-in-up">
                        <div style={{
                            width: '100%',
                            height: '500px',
                            backgroundColor: 'var(--color-accent)',
                            borderRadius: 'var(--radius-lg)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* This is a placeholder for the real image */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--color-text-light)',
                                fontSize: '1.5rem',
                                fontFamily: 'var(--font-serif)',
                                fontStyle: 'italic'
                            }}>
                                Foto Vanesa Aiello Rocha
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <span className="section-subtitle">Sobre mí</span>
                        <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Hola, soy Vanesa</h2>

                        <p style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.05rem' }}>
                            Curiosa y apasionada por lo que hago. Mi objetivo es ayudarte a mejorar tu bienestar,
                            superar tus desafíos y encontrar la felicidad en cada momento. Estoy aquí para apoyarte
                            en tu camino hacia un mejor desempeño y menor sufrimiento.
                        </p>

                        <div style={{ marginBottom: 'var(--spacing-md)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>Formación y Trayectoria</h3>
                            <ul style={{ listStyle: 'none', space: 'y-2' }}>
                                {[
                                    "Licenciada en Psicología (USAL)",
                                    "Doctoranda en Psicología (UCA)",
                                    "Especialista en Terapia Sistémica - Relacional (UBA)",
                                    "Especialista en Trastornos de Ansiedad (AATA)",
                                    "Especialista certificada en ADHD",
                                    "Investigadora doctoral (CIPP UCA)"
                                ].map((item, index) => (
                                    <li key={index} style={{
                                        marginBottom: '0.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: 'var(--color-text-muted)'
                                    }}>
                                        <span style={{
                                            width: '6px',
                                            height: '6px',
                                            backgroundColor: 'var(--color-primary-light)',
                                            borderRadius: '50%',
                                            marginRight: '10px'
                                        }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
