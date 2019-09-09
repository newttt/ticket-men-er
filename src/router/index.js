import Vue from "vue";
import VueRouter from "vue-router";
import goodsDetail from "./goodsDetail/goodsDetail"

Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/goodsDetail"

        },
        goodsDetail,
    ]
})
export default router;