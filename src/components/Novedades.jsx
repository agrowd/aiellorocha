import React from 'react';

const Novedades = () => {
    return (
        <section id="novedades" className="section">
            <div className="container">
                <span className="section-subtitle">Nuevos Espacios</span>
                <h2 className="section-title">Novedades: Terapia Verde ®️</h2>

                <div className="grid-2" style={{ alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
                    <div className="fade-in-up">
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Bienestar al aire libre</h3>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            Bienvenidos a mi espacio de TERAPIA VERDE®️, donde la naturaleza se convierte en nuestra aliada para el bienestar emocional.
                            Como psicóloga, te ofrezco un enfoque innovador que combina la terapia tradicional con la revitalización que ofrece el aire libre.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Ya sea caminando a mi lado o conversando por teléfono, juntos exploraremos tus inquietudes y preocupaciones mientras disfrutamos de un entorno saludable.
                        </p>
                    </div>

                    <div style={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        borderRadius: 'var(--radius-md)'
                    }}>
                        <img
                            src="/terapia-verde.png"
                            alt="Terapia Verde session outdoors"
                            style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)' }}
                        />
                    </div>
                </div>

                <div className="grid-2">
                    <div style={{ padding: '2rem', border: '1px solid var(--color-accent)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Misión</h3>
                        <p>
                            Ofrecerte un espacio de conversación y psicoterapia donde el contacto con la naturaleza sea esencial para tu bienestar.
                            Creo firmemente que estar al aire libre potencia la tranquilidad y claridad.
                        </p>
                    </div>
                    <div style={{ padding: '2rem', border: '1px solid var(--color-accent)' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Visión</h3>
                        <p>
                            Fomentar un estilo de vida saludable y equilibrado, donde los valores humanos como la conexión, la paz y el bienestar se entrelazan con la belleza de la naturaleza.
                        </p>
                    </div>
                </div>

                <div style={{
                    marginTop: 'var(--spacing-lg)',
                    textAlign: 'center',
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    padding: '2rem'
                }}>
                    <h3>Información de Contacto</h3>
                    <p style={{ margin: '1rem 0' }}>
                        Superí 1408 - 1C, Ciudad de Buenos Aires<br />
                        +54 911 2450 8227<br />
                        vanesaaiellorocha@hotmail.com
                    </p>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                        Lunes a Viernes: 8:00 am – 8:00 pm
                    </p>
                </p>
            </div>
        </div >
    </section >
  );
};

export default Novedades;
