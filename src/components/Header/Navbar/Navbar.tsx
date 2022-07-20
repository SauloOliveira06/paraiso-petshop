import ThemeContext from '../../../context/ThemeContext';
import { Link } from 'react-router-dom';
import moon from '../../../assets/icons/moon.svg';
import logo from '../../../assets/logo/logo.svg';
import sun from '../../../assets/icons/sun.svg';
import box from '../../../assets/icons/box.svg'
import Search from '../../Search/Search';
import './navbar.scss';
import Cart from '../../Cart/Cart';

const Navbar = () => {
    return (
        <ThemeContext.Consumer>
            {value => {
                const { isDarkTheme, toggleTheme } = value
                return (
                    <>
                        {!isDarkTheme ? (
                            <div className="nav-bar-container-light">
                                <Link to="/">
                                    <img
                                        src={logo}
                                        className="website-logo"
                                        alt="logo"
                                    />
                                </Link>
                                <Search />
                                <ul className="middle-items">
                                    <img src={box} alt="box" className='icon-box' />
                                    <li className="list-item">
                                        <Link to="/meus-pedidos" className="link-light">
                                            Meus pedidos
                                        </Link>
                                    </li>
                                    <Cart />
                                    <li className="list-item">
                                        <Link to="/meu-carrinho" className="link-light">
                                            Carrinho
                                        </Link>
                                    </li>
                                </ul>
                                <button
                                    type="button"
                                    className="theme-button"
                                    // testid="theme"
                                    onClick={toggleTheme}
                                >
                                    <img
                                        src={moon}
                                        className="theme-img"
                                        alt="theme"
                                    />
                                </button>
                            </div>
                        ) : (
                            <div className="nav-bar-container-dark">
                                <Link to="/">
                                    <img
                                        src={logo}
                                        className="website-logo"
                                        alt="logo"
                                    />
                                </Link>
                                <Search />
                                <ul className="middle-items">
                                    <img src={box} alt="box" className='icon-box' />
                                    <li className="list-item">
                                        <Link to="/meus-pedidos" className="link-dark">
                                            Meus pedidos
                                        </Link>
                                    </li>
                                </ul>
                                <button
                                    type="button"
                                    className="theme-button"
                                    // testid="theme"
                                    onClick={toggleTheme}
                                >
                                    <img
                                        src={sun}
                                        className="theme-img"
                                        alt="theme"
                                    />
                                </button>
                            </div>
                        )}
                    </>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default Navbar;