import React from 'react';

const Blog = () => {
    const posts = [
        {
            title: "Terapia de pareja: un espacio seguro para sanar y reconectar",
            excerpt: "Un espacio seguro para sanar y reconectar. Explorando cómo la terapia puede fortalecer el vínculo.",
            link: "#"
        },
        {
            title: "Cómo manejar el estrés de las reuniones de fin de año",
            excerpt: "Herramientas desde la Terapia Cognitivo-Conductual (TCC) para enfrentar la ansiedad social y familiar.",
            link: "#"
        },
        {
            title: "Cómo apoyar a tu adolescente",
            excerpt: "Estrategias basadas en evidencia y herramientas TCC para padres de adolescentes.",
            link: "#"
        },
        {
            title: "Fobias específicas",
            excerpt: "Mecanismos, manifestaciones y tratamiento de las fobias más comunes.",
            link: "#"
        }
    ];

    return (
        <section id="blog" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <span className="section-subtitle">Lecturas & Recursos</span>
                <h2 className="section-title">Blog</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {posts.map((post, i) => (
                        <div key={i} className="fade-in-up" style={{
                            backgroundColor: 'var(--color-white)',
                            padding: '2rem',
                            boxShadow: 'var(--shadow-sm)',
                            borderBottom: '2px solid var(--color-primary)'
                        }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{post.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                {post.excerpt}
                            </p>
                            <a href={post.link} style={{
                                textDecoration: 'underline',
                                fontWeight: 600,
                                fontSize: '0.9rem'
                            }}>
                                LEER MÁS
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
