import React, { useState } from 'react';
import logo from '../../assets/image/Ethiopia.svg'
import { FaCartPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { PiUserCheckFill } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';





const Header = () => {
    const [passwordValue,setPasswordValue] = useState('')
    const [modal,setModal]= useState(false)
    const [inputSearch,setInputSearch] = useState('')
const nav = useNavigate()
const dispatch = useDispatch()
const {basket} = useSelector((s) =>s.basket)
const {dark} = useSelector((s) =>s.create)
    const checkPassword = () => {
        if(passwordValue === '123'){
     nav('/create')
       setModal(false)
        }else{
            alert(404)
        }
    }

    const getSearch = () => {
dispatch({type: 'SEARCH' , payload: inputSearch})
nav('/search')
setInputSearch('')
    }
    return (
        <div id='header' style={{
          background:  dark  ?   '#1C3040' : ' rgb(16, 16, 17)',
          color : dark ? 'black' : 'black'
        }}>
            <div className="conteiner">
                <div className="header">
                    <Link to={'/'}>
                    <img  src={logo} alt="" />
                    </Link>
                <div className=" header--text">
                <input onChange={(e) => setInputSearch(e.target.value)}
                onInput={() => getSearch()}
                 type="text" placeholder='Я ищу...'  />
<a className=' header--text--icon'><IoSearch /></a>
                </div>
                <Link to={'/basket'} className='text-[20px] py-[10px] px-[10px] bg-white rounded-[50%]' ><FaCartPlus /></Link>
                {basket.length ? (
                <h2
                  className="absolute bg-red-600 text-[16px] px-[8px] rounded-[50%] text-white
  top-[15px] right-[28%]"
                >
                  {" "}
                  {basket.length}
                </h2>
              ) : null}
                <a onClick={() => setModal(true)}
                className='text-[20px] py-[10px] px-[10px] bg-white rounded-[50%]' ><PiUserCheckFill /></a>
                <div className="header--text--darkMode flex items-center justify-between">
                    <a style={{
border : dark ? '3px solid orange' :  ''
                        }}
                        onClick={() => dispatch({type:'SUNNY'})} className='header--text--darkMode--sun' ><IoSunny /></a>
                    <a style={{
border : dark ? ' ' :  '3px solid orange'
                        }}
                        onClick={() => dispatch({type:'DARK'})}className='header--text--darkMode--dark '><MdDarkMode /></a>
                </div>
                </div>
                {
                    modal ? 
                    <div className="modal">
                    <h1 onClick={() => setModal(false)}>X</h1>
                    <input onChange={(e) => setPasswordValue(e.target.value)} 
                    value={passwordValue}
                    type="password" placeholder='password...' />
                    <button
                     onClick={() => checkPassword()}
                     >Sing in</button>
                </div>
                : null
                }
                
             
            </div>
        </div>
    );
};

export default Header;