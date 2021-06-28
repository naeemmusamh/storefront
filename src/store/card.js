/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
let initialState = {
    card: [],
    count: 0,
    show: false,
};

const card = (state = initialState, action) =>{
    let { type, payload } = action;
    switch (type){
        case 'INCREMENT':
            let newList = [...state.card, payload];
            return {
                card: newList,
                display: uniqueArray(newList),
                count: state.count +1,
                show: true,
            };
            case 'DECREMENT':
            let newProducts = state.card.filter((product)=>{
                product.name !== payload.name;
            });
            return {
                card: newProducts,
                display: uniqueArray(newProducts),
                count: state.count - payload.count -1,
                show: true,
            };
            case 'SHOW_CARD':
                return {
                    card: state.card,
                    display: state.display,
                    count: state.count,
                    show: payload,
                };
                default:
                return state;
    }
};

export default card;

function uniqueArray(array){
    const map = new Map();
    for(const item of array){
        if(!map.has(item.id)){
            map.set(item.id, {
                id: item.id,
                name: item.name,
                url: item.url,
                category: item.category,
                price: item.price,
                inStock: item.inStock,
                count: item.count,
            });
        }else{
            map.delete(item.id);
            map.set(item.id, {
                id: item.id,
                name: item.name,
                url: item.url,
                category: item.category,
                price: item.price,
                inStock: item.inStock,
                count: item.count,
            });
        }
    }
    return Array.from(map.values());
};