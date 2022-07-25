import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { context } from '../../api/CartContext';

function NavBar() {

	const { cart } = useContext(context);

	const clase = isActive => isActive.isActive === true ? 'nav-link active text-primary' : 'nav-link';

	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
			<NavLink to="/" className="navbar-brand border-end pe-4">Zipi gamestore</NavLink>
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav">
				<NavLink to="/" className={clase}>Inicio</NavLink>
				<NavLink to="/category/action" className={clase}>Acción</NavLink>
				<NavLink to="/category/rpg" className={clase}>RPG</NavLink>
				<NavLink to="/category/puzzles" className={clase}>Puzzles</NavLink>
				</div>
			</div>
			{
				cart.length > 0 ? <CartWidget /> : null
			}
			</div>
		</nav>
	);
}

export default NavBar;
