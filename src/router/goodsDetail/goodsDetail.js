export default {
    path: "/goodsDetail",
    name: "goodsDetail",
    meta:{
        flag:false
    },
    component: () => import("@pages/detail/goodsDetail"),
    children:[
        {
            path: "chooseSeat",
            name: "chooseSeat",
            component: () => import("@pages/detail/chooseSeat")
        },
        {
            path: "order",
            name: "order",
            component: () => import("@pages/detail/order")
        },
        {
            path: "comment",
            name: "comment",
            component: () => import("@pages/detail/comment")
        },
        {
            path: "buyTicket",
            name: "buyTicket",
            component: () => import("@pages/detail/buyTicket")
        },
    ]
}