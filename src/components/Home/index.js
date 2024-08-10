import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard';

const Home = () => {
    const {product} = useSelector((s) => s.create)

    return (
        <div id='home' >
            <div className="conteiner">
                <div className="home">
                {
                    product.map((el) => <ProductCard el={el} key={el.id}/>)
                }
                  
                  
                </div>
            </div>
        </div>
    );
};

export default Home;