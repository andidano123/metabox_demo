const state = {
    homeList:[{'aaa':'ddd'}],
    num:0
}

const getters = {
    homeList(state){
        return state.homeList
    },
    num(state){
        return state.num
    },  
}

const actions = {
    homeLists({commit, state}, param){
        console.log("homeList action", param);
        const data = [{'aaa':param}];
        commit("homeLists",data)        
    },
    change({commit,state}){
        commit("change",10)
    }
}

const mutations = {
    homeLists(state,data){
        state.homeList = data;
    },
    change(state,data){
        state.num += data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}