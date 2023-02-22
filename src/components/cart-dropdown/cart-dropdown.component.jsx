import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import CartItem from '../cart-item/cart.item.component';
import { useContext } from 'react';
import { cartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';


const CartDropdown = () => {

    const { cartItems, isCartOpen, setIsCartOpen  } = useContext(cartContext);
    const navigate = useNavigate();
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    const goToCheckout = () => {
        navigate('/checkout')
        toggleIsCartOpen();
    }


    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" >
                {cartItems.map((item) => (
                 item.quantity >= 1 ? <CartItem key={item.id} cartItem ={item}/> : null
                ))}
            </div>
            <Button buttonType="primary" onClick= {goToCheckout}> Go to Checkout </Button>
        </div>
    )
}

export default CartDropdown;