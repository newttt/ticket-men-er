import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./home";
import City from "./city";
import search from "./search";
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
            redirect:"/home"

        },
        Home,
        buyTicket,
        chooseSeat,
        comment,
        order,
        City,
        search

    ]
})
export default router;