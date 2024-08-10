import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard';

const Search = () => {
    const{ searchProduct} = useSelector((s) =>s.create)

    return (
        <div id='home' >
            <div className="conteiner">
                <div className="home">
                {
                         searchProduct.map((el) => <ProductCard el={el} key={el.id}/>)
                    }
                </div>
            </div>
               
        </div>
    );
};

export default Search;