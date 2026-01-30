import React from 'react';

const Articulos = () => {
    const articles = [
        {
            year: "2021",
            citation: "Aiello Rocha, V. (2021). \"Trabajo con la familia: los padres como co-terapeutas\". En Mosquera y cols. Autismo y Asperger para Padres y Educadores. Buenos Aires: Bonum (pp. 177-210)."
        },
        {
            year: "2021",
            citation: "Aiello Rocha, V. & Mosquera, M.S. (2021). \"Co-morbilidades: otras entidades que se dan conjuntamente con los Trastornos del Espectro Autista\". En Mosquera y cols. Autismo y Asperger para Padres y Educadores."
        },
        {
            year: "2019",
            citation: "Borda, T. & Aiello Rocha, V. (2019). \"Procrastinación y Trastorno Bipolar\". En Cognición y Comportamiento. 1 (3) (pp. 20-35)."
        },
        {
            year: "2019",
            citation: "Aiello Rocha, V. (2019). \"Trastorno Depresivo Mayor, Trastorno Bipolar y Trastorno Límite de la Personalidad: solapamiento sintomático y diagnóstico diferencial\". En Enciclopedia Argentina de Salud Mental."
        }
    ];

    return (
        <section id="articulos" className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
            <div className="container">
                <span className="section-subtitle">Publicaciones Académicas</span>
                <h2 className="section-title">Artículos & Libros</h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {articles.map((article, i) => (
                        <div key={i} className="fade-in-up" style={{
                            marginBottom: '2rem',
                            paddingBottom: '2rem',
                            borderBottom: '1px solid #e5e5e5'
                        }}>
                            <span style={{
                                display: 'inline-block',
                                backgroundColor: 'var(--color-primary)',
                                color: 'white',
                                padding: '2px 8px',
                                fontSize: '0.8rem',
                                marginBottom: '0.5rem',
                                fontWeight: 600
                            }}>
                                {article.year}
                            </span>
                            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-main)' }}>
                                {article.citation}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Articulos;
