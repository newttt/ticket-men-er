import http from "@utils/http.js";


export const getTicket = ()=>http({
    methods:"get",
    url: "/api/v3/activities/105636",
    data:{
       areaTicketType : 1
    }
})

export const getSeat = () =>http({
    methods:"get",
    url: "/api/v3/ticketCategories",
    data:{
        eventId : 568248 ,
        supportSpeedPackBuy : true ,
        b2c : true
    }
})










