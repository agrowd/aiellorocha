import React from 'react';

const Investigacion = () => {
    const topics = [
        "Diagnóstico y procesos transdiagnósticos: implicancias en psicoterapia.",
        "Terapias basadas en la evidencia: ACT, terapias contextuales, TCC clásica.",
        "Trastorno Obsesivo-Compulsivo y del espectro.",
        "Trastornos de Ansiedad y Trastornos asociados.",
        "Trastornos del Estado del Ánimo (Bipolar y Depresivo Mayor).",
        "Tricotilomanía y Movimientos Centrados en el Cuerpo.",
        "Bullying, Cyberbullying y Salud Mental.",
        "Perfeccionismo y Trastorno Obsesivo de la Personalidad.",
        "CHAT GPT, Chatbots y LLMs para uso en salud mental.",
        "Conductas problemáticas de los adolescentes (adicción a internet, videojuegos, apuestas)."
    ];

    return (
        <section id="investigacion" className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
            <div className="container">
                <span className="section-subtitle">Ciencia & Avance</span>
                <h2 className="section-title">Investigación y Colaboraciones</h2>

                <div className="grid-2">
                    <div className="fade-in-up">
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                            Vanesa realiza tareas de investigación continuas para mantenerse a la vanguardia de los tratamientos psicológicos.
                            Actualmente se encuentra desarrollando estudios en las siguientes áreas:
                        </p>
                        <div style={{
                            padding: '2rem',
                            backgroundColor: 'var(--color-white)',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: 'var(--shadow-sm)'
                        }}>
                            <p style={{ fontStyle: 'italic', color: 'var(--color-text-light)' }}>
                                "Próximamente encontrarás un cuestionario para participar en las investigaciones.
                                Tu colaboración será de gran ayuda para la comunidad científica."
                            </p>
                        </div>
                    </div>

                    <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <ul style={{ display: 'grid', gap: '1rem' }}>
                            {topics.map((topic, i) => (
                                <li key={i} style={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    fontSize: '1rem',
                                    color: 'var(--color-text-main)'
                                }}>
                                    <span style={{
                                        minWidth: '8px',
                                        height: '8px',
                                        backgroundColor: 'var(--color-primary)',
                                        borderRadius: '50%',
                                        marginRight: '12px',
                                        position: 'relative',
                                        top: '-2px'
                                    }}></span>
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Investigacion;
