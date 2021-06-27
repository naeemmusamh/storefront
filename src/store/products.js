let initialState = {
    products: [
        {
            id: '1',
            name: 'LAPTOP',
            url: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            category: 'electronics',
            price: 899.0,
            inStock: 5,
        },{
            id: '2',
            name: 'Phone',
            url: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            category: 'electronics',
            price: 599.0,
            inStock: 8,
        },{
            id: '3',
            name: 'Watch',
            url: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            category: 'electronics',
            price: 399.0,
            inStock: 5,
        },{
            id: '4',
            name: 'Screen',
            url: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            category: 'electronics',
            price: 799.0,
            inStock: 3,
        },{
            id: '5',
            name: 'Tomato',
            url: 'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            category: 'food',
            price: 19.0,
            inStock: 20,
        },{
            id: '6',
            name: 'Broccoli',
            url: 'https://images.pexels.com/photos/4720411/pexels-photo-4720411.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            category: 'food',
            price: 69.0,
            inStock: 10,
        },{
            id: '7',
            name: 'Avocado',
            url:'https://images.pexels.com/photos/3850613/pexels-photo-3850613.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            category: 'food',
            price: 79.0,
            inStock: 5,
        },   
    ],
    count: 0,
};

const products = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'ACTIVE':
        let products = initialState.products.filter((product) =>
          product.category === payload ? product.category : null
        );
        return { products, count: state.count };
      case 'INCREMENT':
        const count = state.count + 1;
        return { products: state.products, count };
      default:
        return state;
    }
  };
  
  export default products;
  
  export const active = (categoryName) => {
    return {
      type: 'ACTIVE',
      payload: categoryName,
    };
  };
  
  export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };