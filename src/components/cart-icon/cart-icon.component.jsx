import { useContext } from 'react'
import { cartContext } from '../../contexts/cart.context'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg'
import './cart-icon.styles.scss'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(cartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
        
    )
}

export default CartIcon;