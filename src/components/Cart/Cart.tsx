import cart from '../../assets/icons/cart.svg';
import './cart.scss';

const Cart = () => {
    return (
        <>
            <img src={cart} alt="carrinho" className='cart-icon' />
        </>
    )
}

export default Cart;