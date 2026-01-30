import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Acerca de mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Investigación', href: '#investigacion' },
    { name: 'Artículos', href: '#articulos' },
    { name: 'Prensa', href: '#prensa' },
    { name: 'Contacto', href: '#contact' },
    { name: 'Novedades', href: '#novedades' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img
            src="/logo.png"
            alt="Vanesa Aiello Rocha"
            style={{
              maxHeight: '60px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--color-text-main)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
              className="hover:opacity-60"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button - simplified for inline css usage without tailwind classes */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none', // Hidden on desktop normally
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '6px'
          }}
          className="mobile-toggle"
        >
          <span style={{ width: '25px', height: '2px', backgroundColor: 'var(--color-primary)', display: 'block' }}></span>
          <span style={{ width: '25px', height: '2px', backgroundColor: 'var(--color-primary)', display: 'block' }}></span>
          <span style={{ width: '25px', height: '2px', backgroundColor: 'var(--color-primary)', display: 'block' }}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown - Logic handling via style for vanilla css */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'white',
          padding: '2rem',
          boxShadow: 'var(--shadow-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ color: 'var(--color-primary)', fontSize: '1.1rem' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden.md\\:flex { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
