<template>
    <div>
        <div class="header">
        <div class="kong">

        </div>
        <div class="user1">
            <li>用户157****2701-DQHow</li>
            <span>新手</span>
            <li>这家伙很懒 什么都没有留下</li>
        </div>
        <div class="follow">
            <div class="f1">
                <div class="f1-1">
                    <span>0</span>
                    <span>关注</span>
                </div>
                <div class="f1-2"></div>
                <div class="f1-3">
                    <span>0</span>
                    <span>粉丝</span>
                </div>
            </div>
            <li>下载APP更新资料</li>
        </div>
    </div>


    <div class="pinlun">
        <router-link tag="li" to="/user/all">全部</router-link>
        <router-link tag="li" to="/user/pinlun">评论</router-link>
        <router-link tag="li" to="/user/want">想看</router-link>
    </div>
    <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"User"
}
</script>

<style scoped>
    .header{
    width:100%;
    height:3.8rem;
    background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.7));
    position: relative;
}
.kong{
    position: absolute;
    width:1.6rem;
    height:1.6rem;
    background-image: url("//static.piaoniu.com/m/static/img/defaultAvatar.99f8eed.png");
    background-size: cover;
    background-position: center;
    border: 2px solid #fff;
    box-sizing: border-box;
    border-radius: 50%;
    top:1.28rem;
    left:0.48rem;

}
.user1{
    position: absolute;
    left:2.38rem;
    top:1.28rem;
}
.user1 li:nth-of-type(1){
    width:3.3rem;
    font-size: 0.36rem;
    font-weight: 400;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    height: 0.4rem;
    color: #fff;
}
.user1 span{
    position: absolute;
    display: block;
    /* height:0.32rem; */
    width:0.48rem;
    height:0.32rem;
    right:-0.64rem;
    top:0.08rem;
    font-size: 0.24rem;
    color:#fff;
    
}
.user1 li:nth-of-type(2){
    color: #fff;
    font-size: 0.24rem;
    margin-top:0.1rem;
}
.follow{
    width: 100%;
    height:0.7rem;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0.1rem;
    padding-left: .3rem;
}
.f1{
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    
}
.f1-1,.f1-3{
    width:1.3rem;
    height:0.7rem;
    /* line-height: 0.7rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.f1-2{
    width:0.02rem;
    height:0.42rem;
    background-color: rgba(255, 255, 255, 0.35);
}
.f1-1 span:nth-of-type(1){
    font-size: 0.36rem;
    color: #fff;
}
.f1-1 span:nth-of-type(2){
    font-size: 0.24rem;
    color:#fff;
}
.f1-3 span:nth-of-type(1){
    font-size: 0.36rem;
    color: #fff;
}
.f1-3 span:nth-of-type(2){
    font-size: 0.24rem;
    color:#fff;
}
.follow li{
    margin-right: 0.2rem;
    height: 0.52rem;
    line-height: 0.52rem;
    padding: 0 0.12rem;
    border: 2px solid #fff;
    border-radius: 0.06rem;
    color: #fff;
}
.pinlun{
    width:100%;
    height:0.92rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: 0.92rem;
}
.pinlun li{
    color:#999;
    font-size: 0.32rem;
    
}
.pinlun .router-link-active{
  color: #ff2661;
  border-bottom: 0.06rem solid #ff2661;
  padding-bottom: 0.2rem;
    height:0.92rem;
}
/* .pinlun li:nth-of-type(1){
    border-bottom: 0.06rem solid #ff2661; 
    
     color: #ff2661;
} */
</style>