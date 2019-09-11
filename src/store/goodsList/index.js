import {goodsDetailApi} from "@api";
// import {getPrice} from "@api/detail";

const state = {
    goodsInfo:{},
    numListIndex:1,
    numList:[]
}


const actions = {
   async getGoodsInfo({commit},val) {
    let data = await goodsDetailApi();
       commit("getInfoMutations",data.data);
   },
   /* async getSeatPrice({commit},_id) {
    let data = await getPrice(_id);
       commit("getSeatPriceMutations", data.ticketGroups);
   } */
}

const mutations = {
    getInfoMutations(state,params) {
        state.goodsInfo = params[0];
    },
    getNumIndex(state,params) {
        state.numListIndex = params;
    },
    /* getSeatPriceMutations(state,data) {
        console.log(1);
        let i = 1;
        let arr = [];
        while (data[i]) {
            arr.push(data[i][0].ticketGroup)
            i++
        }
        state.numList = null;
        state.numList = arr;
    } */
}



export default {
    state,
    actions,
    mutations,
    namespaced: true
}