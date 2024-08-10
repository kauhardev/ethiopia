import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const ProductCard = ({el}) => {
    const dispatch = useDispatch()
    const [more,setMore] = useState(false)
    const {dark} = useSelector((s)=> s.create)

    return (
        <div className="product--products" style={{
            background : dark ? 'white' : 'rgb(16, 16, 17)',
          
        }} >
  <img src={el.image} alt="img" />
                    <h1>{el.title}</h1>
                    <div className="product--products__text">
                    <p 
                    onMouseOver={() => setMore(true)}
                    onMouseOut={()=> setMore(false)}
                        > {el.description.slice(0,20)}
                         </p>
                {/* <h4 onClick ={() => setMore(true)}><i>Читать дальше...</i></h4> */}
                    </div>
                    <h3>{el.price * el.quantity}c </h3>
                    <div className="product--products__btns" >
                    <div className="product--products__btns--count">
<button onClick={() => dispatch({type:"MINUS_PRODUCT",payload:el})}>-</button>
<h3>{el.quantity}</h3>
<button onClick={() => dispatch({type:"PLUS_PRODUCT",payload:el})}>+</button>
                    </div>
                    <button onClick={() => dispatch({type: 'ADD_TO_BASKET', payload:el})} className='add '>В корзину</button>
                    </div>
                    {
                        more ?   
                         <div className="more"
                         onMouseOver={() => setMore(true)}
                    onMouseOut={()=> setMore(false)}
                        //   style={{
                        //     transition : '2s',
                        //     transform : more 
                        //     ? 'translateY(-80px)'
                        //     : 'translateY(0px)',
                        //     opacity : more ? '1' : '0'
                        //  }} 
                         >
                        <h3 onClick={() => setMore(false)}>X</h3>  
                        <h1 >Ингредиенты для приготовления блюда:</h1>
                        <p> <i> {el.description}</i></p>
                    </div>
                         : null
                    } 
                 
                        </div>
   
               
    
    );
};

export default ProductCard;