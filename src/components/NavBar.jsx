import CartWidget from './CartWidget';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand border-end pe-4" href="#">Zipi gamestore</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            <a className="nav-link" href="#">Catalogo</a>
            <a className="nav-link" href="#">Deseados</a>
            <a className="nav-link" href="#">Contacto</a>
          </div>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
