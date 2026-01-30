import React from 'react';

const Prensa = () => {
    const mediaItems = [
        {
            media: "Total Medios & Fund TV",
            date: "2017",
            title: "Premio FUND TV: Campaña contra el bullying del CPA",
            desc: "Ganadora por el spot animado 'Hoy el Bullying no da respiro'."
        },
        {
            media: "LT10 Radio Universidad Nacional del Litoral",
            date: "2017",
            title: "Entrevista en 'Al derecho y al revés'",
            desc: "Conducido por Andrea Scandolo y Martin Blanc."
        },
        {
            media: "América TV",
            date: "2017",
            title: "Entrevista en 'Te cuento al mediodía'",
            desc: "Día Internacional de la Concientización del Bullying."
        },
        {
            media: "TN Argentina",
            date: "2016",
            title: "Psicología, Salud Mental y Uso de Tecnologías",
            desc: "Debate sobre exhibicionismo y redes sociales."
        },
        {
            media: "TV Pública",
            date: "2013",
            title: "Nación Zonámbula. Edición especial: BULLYING",
            desc: ""
        },
        {
            media: "Clarín",
            date: "2014",
            title: "Las escuelas ya sacan seguros para cubrirse contra el bullying",
            desc: "Entrevista experta."
        },
        {
            media: "El Litoral",
            date: "2013",
            title: "Cyberbullying: cuando el acoso dura las 24 horas",
            desc: ""
        }
    ];

    return (
        <section id="prensa" className="section">
            <div className="container">
                <span className="section-subtitle">Medios & Difusión</span>
                <h2 className="section-title">Prensa y Comunicación</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {mediaItems.map((item, i) => (
                        <div key={i} className="fade-in-up" style={{
                            padding: '1.5rem',
                            borderLeft: '3px solid var(--color-primary-light)',
                            backgroundColor: 'var(--color-white)',
                            boxShadow: 'var(--shadow-sm)',
                            transition: 'transform 0.2s ease'
                        }}>
                            <span style={{
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                color: 'var(--color-primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                {item.media} • {item.date}
                            </span>
                            <h3 style={{
                                fontSize: '1.1rem',
                                margin: '0.5rem 0',
                                fontFamily: 'var(--font-sans)',
                                fontWeight: 600
                            }}>
                                {item.title}
                            </h3>
                            {item.desc && (
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                    {item.desc}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Prensa;
