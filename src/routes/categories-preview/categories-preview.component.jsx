import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import CategorySneak from "../../components/category-sneak/category-sneak.component";


const CategoriesPreview = () => {

    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategorySneak key={title} title={title} products={products} />
            })}
        </>
    )
}

export default CategoriesPreview;