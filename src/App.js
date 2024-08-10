import { Route,  Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home'
import CreateProduct from './components/CreateProduct';
import Basket from './components/Basket';
import ProdCategory from './components/ProdCategory';
import ChangeCategory from './components/ChangeCategory';
import Search from './components/Search';
import { useSelector } from 'react-redux';

function App() {
  const {dark} = useSelector((s) =>s.create)

  return (
    <div className="App" style={{
      background : dark ? 'white' : 'black',
      color: dark ? 'black' : 'white',
      height: '100vh'
    }}>
     <Header/>
     <ProdCategory/>
     <Routes>
<Route path='/' element={<Home/>} />
<Route path='/create' element={<CreateProduct/>} />
<Route path='/basket' element={<Basket/>} />
<Route path='/category/:categTitle' element={<ChangeCategory/>}/>
<Route path='/search' element={<Search/>}/>
     </Routes>
    </div>
  );
}

export default App;
