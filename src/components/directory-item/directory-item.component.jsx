import './directory-item.styles.scss'
import { Link } from 'react-router-dom'

const DirectoryItem = ({ category }) => {
    const {imageUrl, title} = category
    return(
        <>
        <Link className="directory-item-container" to={`/shop/${title.toLowerCase()}`}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className="body">
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </Link>
        </>

    )

}

export default DirectoryItem;
