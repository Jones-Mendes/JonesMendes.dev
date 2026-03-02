import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-15 bg-primary text-white flex items-center justify-between px-5 md:justify-around relative z-40">
      <Link to="/" className="text-xl md:text-2xl font-bold hover:text-red transition-colors z-50">
        <span>JonesDeveloper</span>
      </Link>
      
      {/* Menu Hamburger - Mobile */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden z-50 flex flex-col gap-1.5 w-8 h-8 justify-center"
        aria-label="Menu"
      >
        <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Menu Desktop */}
      <nav className="hidden md:flex gap-6">
        <Link to="/" className="text-white text-lg hover:text-red transition-colors">Home</Link>
        <Link to="/sobre" className="text-white text-lg hover:text-red transition-colors">Sobre</Link>
        <Link to="/projetos" className="text-white text-lg hover:text-red transition-colors">Projetos</Link>
        <Link to="/contatos" className="text-white text-lg hover:text-red transition-colors">Contato</Link>
      </nav>

      {/* Menu Mobile */}
      <nav 
        className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden z-50 bg-cover bg-center bg-no-repeat ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{backgroundImage: "url('/cidade.png')"}}
      >
        {/* Overlay escuro para melhor legibilidade */}
        <div className="absolute inset-0 bg-black/60 -z-10"></div>
        
        <Link 
          to="/" 
          className="text-white text-2xl hover:text-red transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/sobre" 
          className="text-white text-2xl hover:text-red transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Sobre
        </Link>
        <Link 
          to="/projetos" 
          className="text-white text-2xl hover:text-red transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Projetos
        </Link>
        <Link 
          to="/contatos" 
          className="text-white text-2xl hover:text-red transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
export default Header;