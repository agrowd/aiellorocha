import React from 'react';

const Contact = () => {
    return (
        <footer id="contact" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: 'var(--spacing-lg) 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>Comienza tu proceso hoy</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.9 }}>
                        No tienes que hacerlo solo/a. Consulta por disponibilidad de turnos presenciales en Buenos Aires o sesiones online desde cualquier lugar del mundo.
                    </p>
                    <a
                        href="https://wa.me/5491100000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                            backgroundColor: 'white',
                            color: 'var(--color-primary)',
                            fontWeight: 600
                        }}
                    >
                        Enviar Mensaje por WhatsApp
                    </a>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '0.9rem',
                    opacity: 0.7
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                        <span>📍 Buenos Aires, Argentina</span>
                        <span>📧 contacto@vanesaropsi.com</span>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                        <a href="https://www.instagram.com/vanesa.rocha.ar/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.2rem' }}>
                            Instagram
                        </a>
                        <a href="https://www.linkedin.com/in/vanesa-aiello-rocha/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.2rem' }}>
                            LinkedIn
                        </a>
                        {/* Facebook search result link as placeholder since direct link wasn't found */}
                        <a href="https://www.facebook.com/public/Vanesa-Aiello-Rocha" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '1.2rem' }}>
                            Facebook
                        </a>
                    </div>

                    <p style={{ marginTop: '1rem' }}>© {new Date().getFullYear()} Vanesa Aiello Rocha. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
