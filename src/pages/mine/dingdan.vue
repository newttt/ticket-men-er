<template>
  <div>
    <div class="mydd">
      <div></div>
      <div @click="clickHandler()">
        <span>我的订单</span>
        <span class="span" ref="bg"></span>
      </div>
    </div>
    <div class="none-father" v-show=flag>
      <div class="none">
        <li>全部</li>
        <li>拼团订单</li>
        <li>抢票订单</li>
        <li>求票订单</li>
      </div>
    </div>
    <div class="mb" v-show=flag></div>

    <div class="list">
      <router-link tag="li" to="/dingdan/all">全部</router-link>
      <router-link tag="li" to="/dingdan/daifu">待付款</router-link>
      <router-link tag="li" to="/dingdan/daifahuo">待发货</router-link>
      <router-link tag="li" to="/dingdan/daishouhuo">待收货</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Dingdan",
  data(){
      return{
          flag:false,
      }
  },
  // created(){
  //   let {id}=this.$route.params;
  //   console.log(this.$route.params)
  //   console.log(id)
  // },
  methods: {
      clickHandler(){
          this.flag=!this.flag;
          // console.log(this.flag)
          this.$refs.bg.style.transform=(this.flag?'rotate(180deg)':'rotate(0)');
          // if(this.flag){
          //   this.$refs.bg.style.transform="rotate(180deg)";
          // }else{
          //   // console.log("la")
          //   this.$refs.bg.style.transform="rotate(0)";
          // }
      }
  },
};
</script>

<style scoped>
.mydd {
  width: 100%;
  height: 0.88rem;
  background: #fff;
  font-size: 0.34rem;
  color: #525252;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 0.25rem;
  border-bottom: 0.01rem solid #ccc;
}
.mydd div:nth-of-type(1) {
  width: 0.22rem;
  height: 0.38rem;
  background-image: url("//static.piaoniu.com/m/static/img/back-grey.b0b2b3e.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.mydd div:nth-of-type(2) {
  margin: 0 auto;
  display: flex;
}
.span {
  display: block;
  content: "";
  border-width: 0.08rem;
  border-style: solid;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #666;
  border-bottom-color: transparent;
  width: 0;
  height: 0;
  margin-top: 0.15rem;
  margin-left: 0.1rem;
  /* transform: all 0.8s ; */
}
.list {
  width: 100%;
  height: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
}
.list li {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.28rem;
  padding-bottom: 0.2rem;
  /* color: #262626; */
}
/* .list li:nth-of-type(1) {
  color: #ff2661;
  border-bottom: 0.06rem solid #ff2661;
} */
.none-father {
  overflow: auto;
  width: 100%;
  position: absolute;
  background: #fff;
}
.none {
  width: 100%;
  height: 1.92rem;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0 0.3rem;
  overflow: hidden;
}
.none li {
  border: 0.02rem solid #ccc;
  padding: 0.26rem 0.4rem;
  margin-right: 0.3rem;
  flex-shrink: 0;
}
.router-link-active{
  color: #ff2661;
  border-bottom: 0.06rem solid #ff2661;
}
.none li:nth-of-type(1) {
  color: #ff2661;
}
.mb {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}
</style>