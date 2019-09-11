import Vue from "vue";
import VueRouter from "vue-router";
import goodsDetail from "./detail/goodsDetail"
import buyTicket from "./detail/buyTicket"
import chooseSeat from "./detail/chooseSeat"
import comment from "./detail/comment"
import order from "./detail/order"
import login from "./mine/login"
import person from "./mine/person"
import user from "./mine/user"
import dingdan from "./mine/dingdan"
import youhui from "./mine/youhui"

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
        order,
        login,
        person,
        user,
        dingdan,
        youhui

    ]
})
export default router;