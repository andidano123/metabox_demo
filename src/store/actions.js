
import {
    connectToEthereum
} from "../utils/helpers.js";
const actions = {
    async connectWallet({commit, state}){        
        state.isWalletConnected = false;            
        if (state.isEthereumEnabled) {
            let data = { ethAddress:'', displayEthAddress:'', web3:null};
            var new_status = await connectToEthereum()            
            for (const [k, v] of Object.entries(new_status)) {                
                data[k] = v;
                console.log(k);
            }
            data.web3 = window.web3;
            // contracts = await setupDapp(status.dapp.token_address, this.dapp.faucet_address) // ToDO error check
            // await this.getSaldoTokens()
            // this.balance = await this.web3.eth.getBalance(this.ethAddress).then(x => {
            //     return x
            // })
            state.isWalletConnected == true;            
            commit("connectedWalletSuccess", data);
        }else{
            commit("connectedWalletFail");
        }
    },
    changeLang({commit, state}, payload){         
        commit("changeLang", payload);
    }
}
export default actions