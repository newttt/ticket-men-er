import {goodsDetailApi} from "@api"

const state = {
    goodsInfo:{}
}


const actions = {
   async getGoodsInfo({commit},val) {
       let data = await goodsDetailApi();
       commit("getInfoMutations",data.data);
   }
}

const mutations = {
    getInfoMutations(state,params) {
        state.goodsInfo = params[0];
    },

}



export default {
    state,
    actions,
    mutations,
    namespaced: true
}