import React from 'react';

const ServiceCard = ({ title, description, highlight = false }) => (
    <div style={{
        padding: '2rem',
        backgroundColor: highlight ? 'var(--color-primary)' : 'var(--color-bg-alt)',
        borderRadius: 'var(--radius-md)',
        color: highlight ? 'var(--color-white)' : 'inherit',
        transition: 'transform 0.3s ease',
        cursor: 'default'
    }}
        className="hover:scale-[1.02]"
    >
        <h3 style={{
            marginBottom: '1rem',
            color: highlight ? 'var(--color-white)' : 'var(--color-primary)',
            fontSize: '1.25rem'
        }}>
            {title}
        </h3>
        <p style={{
            color: highlight ? 'rgba(255,255,255,0.9)' : 'var(--color-text-muted)',
            fontSize: '0.95rem'
        }}>
            {description}
        </p>
    </div>
);

const Services = () => {
    const services = [
        {
            title: "Terapia Cognitivo Conductual (TCC)",
            description: "Tratamientos basados en evidencia para ansiedad, depresión, TOC y más. Enfocados en resolver problemas actuales modificando pensamientos y comportamientos."
        },
        {
            title: "Terapia Sistémica y ACT",
            description: "Abordaje Terapia de Aceptación y Compromiso y Sistémica-Relacional para parejas y familias. Trabajamos sobre los vínculos y el contexto."
        },
        {
            title: "Evaluaciones Psicodiagnósticas",
            description: "Pericias psicológicas, evaluaciones certificadas y diagnósticos personalizados respetando la singularidad de cada paciente."
        },
        {
            title: "ALTA-MENTE: Coaching Premium",
            description: "Servicio exclusivo para deportistas de alto rendimiento y ejecutivos con dificultad horaria. Optimización del desempeño y manejo del estrés.",
            highlight: true
        },
        {
            title: "Atención Online Global",
            description: "Sesiones virtuales en Español, Inglés y Portugués. Flexibilidad horaria para pacientes en Argentina y el exterior (Europa/USA)."
        },
        {
            title: "Áreas de Especialización",
            description: "Trastornos de Ansiedad, TOC, TDAH/ADHD, Trastornos del Sueño, Tricotilomanía, y desarrollo personal."
        }
    ];

    return (
        <section id="services" className="section">
            <div className="container">
                <span className="section-subtitle">Lo que ofrezco</span>
                <h2 className="section-title">Servicios Terapéuticos</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((s, i) => (
                        <ServiceCard key={i} {...s} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
