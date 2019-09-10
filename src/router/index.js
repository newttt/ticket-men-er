import Vue from "vue";
import VueRouter from "vue-router";
import goodsDetail from "./detail/goodsDetail"
import buyTicket from "./detail/buyTicket"
import chooseSeat from "./detail/chooseSeat"
import comment from "./detail/comment"
import order from "./detail/order"

Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/goodsDetail"

        },
        goodsDetail,
        buyTicket,
        chooseSeat,
        comment,
        order

    ]
})
export default router;