import { useContext } from 'react'
import { cartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item-component'

import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, cartCount, cartTotal } = useContext(cartContext)

    return (
        <div className="checkout-container">
            <div className='checkout-header'>
                <div className='header-block'> 
                    <span>Product</span>
                </div>
                <div className='header-block'> 
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map((Cartitem) => (
                Cartitem.quantity >= 1 
                ?
                <CheckoutItem key={Cartitem.id} cartItem={Cartitem} />
                : null
            ))}

            {cartCount ? (
                <div className="total">
                    <span>Total: ${cartTotal}</span>
                </div>
            ) : (
                <div className="checkout-total">
                    <span>Your cart is empty</span>
                </div>
            )
            }
        </div>
    )

}

export default Checkout