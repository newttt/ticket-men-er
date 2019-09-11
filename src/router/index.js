import Vue from "vue";
import VueRouter from "vue-router";
import goodsDetail from "./detail/goodsDetail"
import buyTicket from "./detail/buyTicket"
import chooseSeat from "./detail/chooseSeat"
import comment from "./detail/comment"
import order from "./detail/order"
import album from "./list/album"
import alList from "./list/alList"
import navList from "./list/navList"
import lotteryFree from "./list/lotteryFree"
Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/navList"
        },
        goodsDetail,
        buyTicket,
        chooseSeat,
        comment,
        order,
        album,
        alList,
        navList,
        lotteryFree

    ]
})
export default router;