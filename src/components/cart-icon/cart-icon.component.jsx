import { useContext } from 'react'
import { cartContext } from '../../contexts/cart.context'
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-cart.svg'
import './cart-icon.styles.scss'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(cartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            {cartCount ?
            (
            <div className='count-container'>
                <span className="item-count">{cartCount}</span>
            </div>
            ) 
            : null
            }
        </div>
        
    )
}

export default CartIcon;