import { createContext } from 'react';

/*
the context is a blueprint/description 
of the data that ill be stored on it, 
no implementation is allowed here.
*/

const GlobalContext = createContext({
	cart: [],
	user: {},

	addProductToCart: () => {},
	clearCart: () => {},
	removeProductFromCart: () => {}
});

export default GlobalContext;