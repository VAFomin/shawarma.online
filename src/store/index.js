import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import createMutationsSharer from "vuex-shared-mutations";
import SecureLS from "secure-ls";
import cart from "./modules/cart"

let ls = new SecureLS({isCompression: false});

Vue.use(Vuex);

const dataState = createPersistedState({
    paths: ["cart"],
    storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
    }
});

const sharedMutation = createMutationsSharer({
    predicate: ["cart/addItem"]
});

export default new Vuex.Store({
    modules: {
        cart,
    },
    plugins: [dataState, sharedMutation]
})
