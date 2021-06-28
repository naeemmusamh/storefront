export const active = (name)=>{
    return {
        type: 'ACTIVE',
        payload: name,
    }
};

export const increment = (product)=>{
    return {
        type: 'INCREMENT',
        payload: product,
    }
};

export const show = (bool)=>{
    return {
        type: 'SHOW_CARD',
        payload: bool,
    }
};

export const decrement = (product)=>{
    return {
        type: 'DECRMENT',
        payload: product,
    }
};