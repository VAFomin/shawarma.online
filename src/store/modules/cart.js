const state = {
    cart: [],
};

const getters = {
    getCart: state => {
        return state.cart;
    },
};


const mutations = {
    setCart: (state, payload) => {
        state.cart = payload;
    },
    addItem: (state, payload) => {
        state.cart.push(payload);
    },
    setItem: (state, payload) => {
        const id = payload.id;
        const count = payload.count;
        state.cart.find(item => item.id === id).count = count;
    },
    delItem: (state, payload) => {
        const index = state.cart.findIndex(n => n.id === payload);
        state.cart.splice(index, 1)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}
