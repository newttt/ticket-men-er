import http from "@utils/http.js";


export const goodsDetailApi = () => http({
    method: "get",
    url: "/api/v3/activities",

    //  获取详情
    data: {
        pageIndex: 2,
        categoryId: 8,
        time: "",
        sort: "",
        seatMap: false,
        highestPrice: "",
        lowestPrice: ""
    }
})


//获取导航下的列表
export const navListApi = (navListId) => http({
    method: "get",
    url: "/api/v3/activities",

    data: {
        pageIndex: 2,
        categoryId: navListId,
        time: "",
        sort: "",
        seatMap: false,
        highestPrice: "",
        lowestPrice: "",
    }
})


//全部列表
export const allListApi = () => http({
    method: "get",
    url: "/api/v1/activities/hot",

    data: {
        pageIndex: 1,
        pageSize: 10
    }
})

//album
export const albumApi = () => http({
    method: "get",
    url: "/api/v1/activitySubject/topic/19",
    data: {

    }
})

//lotteryFree
export const lotteryFreeApi = (pageIndex = 1, pageSize = 10) => http({
    methods: "get",
    url: "api/v1/freeShow/list",
    data: {
        pageIndex,
        pageSize
    }
})