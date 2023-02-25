
import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import './category-sneak.styles.scss'

const CategorySneak = ({title, products}) => {
    return (
        <div className="category-sneak-container">
            <h2>
                <Link to={`/shop/${title.toLowerCase()}`}>
                    <span className='title'>
                        {title.toUpperCase()}
                    </span>
                </Link>
            </h2>
            <div className="sneak">
                {
                    products.filter((product, index) => index < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>

    )
}

export default CategorySneak;
