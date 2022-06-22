import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand border-end pe-4">Zipi gamestore</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
            <Link to="/catalogo" className="nav-link">Catalogo</Link>
            <Link to="/deseados" className="nav-link">Deseados</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </div>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
