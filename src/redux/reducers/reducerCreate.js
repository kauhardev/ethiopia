const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  searchProduct: [],
  dark:  JSON.parse(localStorage.getItem("dark")) || false,
};

export const ReducerCreate = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT":
      let prod = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(prod));
      return { ...state, product: prod };
    case "SEARCH":
      let searchPr = state.product.filter((el) =>
        el.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state,  searchProduct: searchPr };
      case "PLUS_PRODUCT":
                let plus = state.product.map((el) =>
                  el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
                );
                return { ...state, product: plus };
              case "MINUS_PRODUCT":
                let minus = state.product.map((el) =>
                  el.id === action.payload.id
                    ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
                    : el
                );
                  
                return { ...state, product: minus };
                case "DARK":
                  localStorage.setItem('dark',JSON.stringify(false))
                  return { ...state, dark: false };
                  case 'SUNNY':
                    localStorage.setItem('dark',JSON.stringify(true))
                    return{...state,dark : true}
    default:
      return state;
  }
};
