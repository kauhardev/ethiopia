import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard';

const ChangeCategory = () => {
    const{categTitle} = useParams()
    const {product} = useSelector((s) =>s.create)
    let filterCat = product.filter((el)=> el.category === categTitle)
    return (
        <div id='home'>
            <div className="conteiner">
                <div className="home">
{
    filterCat.map((el) => <ProductCard el={el} key={el.id} />)
}
                </div>
            </div>
        </div>
    );
};

export default ChangeCategory;