import './cart-dropdown.styles.scss'
import Button from '../button/button.component';
import CartItem from '../cart-item/cart.item.component';
import { useContext } from 'react';
import { cartContext } from '../../contexts/cart.context';


const CartDropdown = () => {

    const { cartItems } = useContext(cartContext);


    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" >
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem ={item}/>
                ))}
            </div>
            <Button buttonType="primary"> Go to Checkout </Button>
        </div>
    )
}

export default CartDropdown;