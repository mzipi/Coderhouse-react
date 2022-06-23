import CartWidget from '../../CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand border-end pe-4">Zipi gamestore</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
            <Link to="/category/action" className="nav-link">Acción</Link>
            <Link to="/category/adventure" className="nav-link">Aventuras</Link>
            <Link to="/category/fps" className="nav-link">FPS</Link>
          </div>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
