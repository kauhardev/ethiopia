import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProdCategory = () => {
const nav = useNavigate()
    return (
        <div id='prodCategory'>
            <div className="conteiner">
                <div className="prodCategory">
                    <button  
                    onClick={() => nav('/category/Завтрак')}
                    >Завтрак</button>
                    <button 
                    onClick={() => nav('/category/Салаты')}
                    >Салаты</button>
                    <button>Десерты</button>
                    <button >Кофе</button>
                    <button> напитки</button>
                    <button>Чай</button>
                    <button>Пицца</button>
                    <button>Суши</button>
                    <button>Суп</button>
                </div>
            </div>
        </div>
    );
};

export default ProdCategory;