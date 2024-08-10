const initialState = {
    basket: JSON.parse(localStorage.getItem('basket')) || []
}


export const ReduserBasket = (state = initialState, action) =>{
    switch(action.type){
            case "PLUS_BASKET":
                let plus = state.basket.map((el) =>
                  el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
                );
                localStorage.setItem("basket", JSON.stringify(plus));
                return { ...state, basket: plus };
              case "MINUS_BASKET":
                let minus = state.basket.map((el) =>
                  el.id === action.payload.id
                    ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
                    : el
                );
                localStorage.setItem("basket", JSON.stringify(minus));
                return { ...state, basket: minus };
                case 'ADD_TO_BASKET':
                  let findBasket = state.basket.find((el) => el.id === action.payload.id);
                  if (findBasket) {
                    alert("Такой продукт уже есть!");
                  } else {
                    let bas = [...state.basket, action.payload];
                    localStorage.setItem("basket", JSON.stringify(bas));
                    return { ...state, basket: bas };
                  }
              case "DELETE_BASKET":
                let delBas = state.basket.filter((el) => el.id !== action.payload.id);
                localStorage.setItem("basket", JSON.stringify(delBas));
                return { ...state, basket: delBas };
              case "REMOVE_ALL":
                localStorage.removeItem("basket");
                return { ...state, basket: [] };
              
            default:
                return state;
    }
}