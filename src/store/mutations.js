import global from '../global.js'    
const mutations = {
    connectedWalletSuccess(state, data){
        state.isWalletConnected = true;
        state.ethAddress = data.ethAddress;
        state.displayEthAddress = data.displayEthAddress;
        state.web3 = data.web3;
    },
    connectedWalletFail(state, data){
        state.isWalletConnected = false;
    },
    changeLang(state, payload){        
        if(payload.locale=="chs")
        {
            payload.locale="en";
            state.LANG = "EN";
        }
        else{
            payload.locale="chs";            
            state.LANG = "CN";
        }
        window.localStorage.setItem(global.LANG_KEY, state.LANG)
    }
}
export default mutations
