const getters = {
    isWalletConnected(state){
        return state.isWalletConnected;
    },
    ethAddress(state){
        return state.ethAddress;
    },
    displayEthAddress(state){
        return state.displayEthAddress;
    },
    web3(state){
        return state.web3;
    },
    isEthereumEnabled(state){
        return state.isEthereumEnabled;
    },    
    LANG(state){
        return state.LANG;
    }
}
export default getters

