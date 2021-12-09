import Vue from "vue"
import Vuex from "vuex"

import home from "./modules/home.js"
import getters from "./getters.js"
import actions from "./actions.js"
import mutations from "./mutations.js"
import global from "../global.js"

Vue.use(Vuex)

const initLang = (() => {
    let lang = window.localStorage.getItem(global.LANG_KEY);
    
    return lang || 'EN'
})();
const state = {
    LANG: initLang,
    isEthereumEnabled: (window.ethereum != undefined),
    isWalletConnected: false,
    ethAddress: "None",
    displayEthAddress: "No conectado",
    web3: null,
}

export default  new  Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules:{
        home
    }
})