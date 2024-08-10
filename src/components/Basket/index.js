import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TiDeleteOutline } from "react-icons/ti";
import axios from 'axios'
import load from '../../assets/image/load.svg'
import { FcApproval } from "react-icons/fc";



const Basket = () => {
    const {basket ,dark} = useSelector((s) => s.basket)
    const nav= useNavigate()
    const dispatch = useDispatch()
    const[userAddress,setUserAddress] =useState('')
    const [modal,setModal] = useState(false)
    const [text,setText] = useState(false)
const [loader,setLoader] = useState(false)
const [mess,setMess] = useState(false)

    let totalPrice = basket.reduce((acc,el) =>{
return acc + +el.price * el.quantity
    },0)
    
const resetState = () =>{
setLoader(false)
setText(false)
setMess(false)
}
    const formSubmit = () =>{
      const my_id =`-1002135791648`;
      const token = `6457990274:AAFGskP4i1VeckCLYcYi4tGMRysb3wICBiM`;
      const url_api = `https://api.telegram.org/bot${token}/sendMessage`;
  
  if( userAddress.trim() === ''){
  alert(404)
  } else{
      let newOrder = {
          chat_id: my_id,
          parse_model: "html",
          text: `order :
          address : ${userAddress},
          `,
  
      }
      
      setTimeout(() => {
        axios.post(url_api,newOrder)
setLoader(false)
setMess(true)
      }, 2000);
      setText(true)
      setModal(true)
      setLoader(true)
      setUserAddress('')
    }}

    const openModal = () =>{
      setModal(true)
    }
    useEffect(()=>{
      resetState()
    },[modal])
    return (
        <div id='basket'>
            <div className="conteiner">
                {
                    basket.length ?
                    <>
                <div className="basket">
                <div className="baskett">
                {
         basket.map((el) => (
            <div className="baskett--products"
          
            >
                <a onClick={() => dispatch({type: 'DELETE_BASKET', payload:el})} className='baskett--products__del'><TiDeleteOutline /></a>
                <img src={el.image} alt="" />
                <h1>{el.title}</h1>
                <div className="baskett--products__count">
                    <h2>{el.price * el.quantity}c</h2>
                    <div className="btns">
<a onClick={() => dispatch({type:  "MINUS_BASKET",payload:el})}>-</a>
<h3>{el.quantity}</h3>
<a onClick={() => dispatch({type:  "PLUS_BASKET",payload:el})}>+</a>
                    </div>
                </div>
            </div>
         ))
                    }
</div>
                    <div className="basket--items" >
                      <div className="basket--items__comment">
                     <input onChange={(e) => setUserAddress(e.target.value)}
          value={userAddress}
                     type="text" placeholder='Комментарий к заказу...'/>
                        <div className="basket--items__comment--btns" 
                        >
                        <button>Ok</button>
                        <button>Отмена</button>
                        </div>
                      </div>
                        <div className="basket--items__total"
                        >
                        <button >Общая сумма: </button>
                          <div className="basket--items__total--price">
                          <button > {totalPrice} c</button>
                          <button onClick={() => openModal()}
                          className='basket--items__total--price__add'>Заказать</button>
                          </div>
                       
                        </div>
                    </div>
                    <div className=" basket--items__itemss">
                        <button className='basket--items__itemss--left'>Добавить еще</button>
                        <button onClick={() => dispatch({ type: "REMOVE_ALL" })}className='basket--items__itemss--rigth'>Очистить корзину</button>
                        </div>
                        {
                    modal ? 
                    <div className="modal">
                    <h1 className='modal--close' onClick={() => setModal(false)}>X</h1>
                  {
                     !text ? 
                     <div className="modal--text">
                     <h1> Проверте свои данные:</h1>
                   <h3> Address:  {userAddress}</h3>
                     <button
                      onClick={() => formSubmit()}
                      >Sing in</button>
                     </div>
                     : null
                  }
                  {
                    loader ? <img src={load} alt="img" className='modal--load' />
                    : null
                  }

                  {
                    mess  ? 
<div className="modal--otpravleno">
                <a ><FcApproval /></a>
                <h1>Заказ отправлен успешно</h1>
              </div>
                    : null
                  }
              
                </div>
                 : null
                } 
                </div>
            
                    </> 
                   
                    : 
                    <div className="text-center mt-[130px]">
                    {" "}
                    <h1 className="text-[30px] text-black  mt-[100px]">
                      {" "}
                      В корзине пока пусто
                    </h1>
                    <h3 className="text-[20px] mb-[30px] text-black mt-[20px]">
                      Загляните на главную, чтобы выбрать <br /> товары или найдите
                      нужное <br /> в поиске
                    </h3>
                    <button
                      onClick={() => nav("/")}
                      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-[17px] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                    >
                      <span className="relative px-5 py-[10px] transition-all ease-in duration-75 text-gray-300 bg-purple-800 rounded-md group-hover:bg-opacity-0">
                        Перейти на главную страницу
                      </span>
                    </button>
                  </div>
                }
         
            </div>
        </div>
    );
  }

export default Basket;