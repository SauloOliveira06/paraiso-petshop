import { Link } from 'react-router-dom';
import './subNavbar.scss';

const SubNavbar = () => {
    return (
        <>
            <div className='sub-nav-container'>
                <ul className="sub-nav">
                    <li><Link to="/area-cachorros">Cachorros</Link></li>
                    <li><Link to="/area-gatos">Gatos</Link></li>
                    <li><Link to="/outros-pets">Outros pets</Link></li>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/banho-tosa">Banho e Tosa</Link></li>
                </ul>
            </div>
        </>
    )
}

export default SubNavbar;