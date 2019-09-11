<template>
  <div>
    <div class="header">
      <li></li>
      <li>我的</li>
    </div>

     <div class="userInfo">
        <div></div>
        <div class="user">
            <li>{{ser}}</li><!-- 后台-->
            <li>新手</li>
            <li class="user-li">
                <router-link tag="span" to="/user">个人主页</router-link>
                <span></span>
            </li>
        </div>
        <div class="follow">
            <li>
                <span>0</span>
                <span>想看</span>
            </li>
            <li>
                <span>0</span>
                <span>评论</span>
            </li>
            <li>
                <span>0</span>
                <span>关注</span>
            </li>
            <li>
                <span>0</span>
                <span>粉丝</span>
            </li>
        </div>
    </div>    

    
      <router-link tag="div" class="indent" to="/dingdan">
        <div>我的订单</div>
      <div>
        <span>查看全部订单</span>
        <span class="row"></span>
      </div>
      </router-link>
    

    <div class="huowu">
      <li class="li1">
        <span></span>
        <router-link tag="span" to="/dingdan">待付款</router-link>
      </li>
      <li class="li2">
        <span></span>
        <router-link tag="span" to="/dingdan">待发货</router-link>
      </li>
      <li class="li3">
        <span></span>
        <router-link tag="span" to="/dingdan">待收货</router-link>
      </li>
    </div>
<div class="lipin">
        <router-link tag="li" to="/youhui">
             <span>13</span>
            <span>优惠券</span>
        </router-link>
        <li>
            <span>0</span>
            <span>礼品卡</span>
        </li>
    </div>
    
    <div class="fuli">
      <div>我的福利</div>
    </div>
    <div class="flnr">
      <div class="div1">
        <span></span>
        <div class="div3">
          <li>邀请好友</li>
          <div>返10元现金</div>
        </div>
      </div>
      <div class="div2">
        <span></span>
        <div class="div3">
          <li>圈圈俱乐部</li>
          <div>达人专属奖励</div>
        </div>
      </div>
    </div>

    <div class="address">
      <div>地址管理</div>
      <div></div>
    </div>

    <div class="help">
      <div>帮助与客服</div>
      <div></div>
    </div>

    <div class="wanted">
      <div>卖家招募</div>
      <div></div>
    </div>

    <div class="logout">
      <div>退出登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Person",
  data(){
    return{
      ser:"请登录"
    }
  },
   created(){
    let {user}=this.$route.query;
    this.ser=user;
  },
};
</script>

<style  scoped>
   .header {
  width: 100%;
  height: 0.88rem;
  background: #fff;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 0.28rem;
  color: #525252;
  position: fixed;
  top: 0;
  z-index: 1; }

.header li:nth-of-type(1) {
  width: 0.22rem;
  height: 0.38rem;
  background-image: url("//static.piaoniu.com/m/static/img/back-grey.b0b2b3e.png");
  background-size: 100%;
  background-repeat: no-repeat; }

.header li:nth-of-type(2) {
  width: 4rem;
  height: 0.88rem;
  margin: 0 auto;
  text-align: center;
  line-height: 0.88rem;
  font-size: 0.37rem; }

.userInfo {
  width: 100%;
  height: 3.44rem;
  background: linear-gradient(270deg, #ff5aa5 0%, #ff2661 100%);
  position: relative; 
  margin-top: 0.88rem;
}

.userInfo div:nth-of-type(1) {
  position: absolute;
  left: 0.36rem;
  top: 0.74rem;
  width: 1.12rem;
  height: 1.12rem;
  background-image: url("//static.piaoniu.com/m/static/img/defaultAvatar.99f8eed.png");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%; }

.userInfo div:nth-of-type(2) {
  position: absolute;
  left: 1.84rem;
  top: 0.88rem; }

.user li:nth-of-type(1) {
  color: #fff;
  width: 5.66rem;
  font-size: 0.36rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-right: 2.1rem;
  margin-bottom: 0.14rem; }

.user li:nth-of-type(2) {
  width: 0.8rem;
  height: 0.4rem;
  padding: 0.04rem 0.14rem;
  border: 0.02rem solid rgba(255, 255, 255, 0.16);
  border-radius: 0.2rem;
  font-size: 0.24rem;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.16); }

.user li:nth-of-type(3) {
  width: 1.58rem;
  height: 0.64rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.13);
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px; }

.user-li span:nth-of-type(1) {
  font-size: 0.24rem;
  color: #fff;
  margin-right: 0.16rem; }

.user-li span:nth-of-type(2) {
  width: .1rem;
  height: 0.2rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAWCAYAAADwza0nAAAAAXNSR0IArs4c6QAAAHZJREFUOBFjYACC////HwFiELgCxGIgMaIAULEoVBOQGsqaRYnyL0gRFj+PasYXesAAkwDiT0AMAifwqYXLARUyAfE8kA4g+ALEdnBJXAygolFNoMChX0BAbSMtnqCaVIHOBAHiIhekCQSAGhiBOB2I9SEihEkAd9hx9p/FrHcAAAAASUVORK5CYII=);
  background-size: .1rem .2rem;
  background-repeat: no-repeat; }

.follow {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: .2rem;
  width: 100%;
  text-align: center;
  color: #fff; }

.follow li span:nth-of-type(1) {
  display: flex;
  flex-direction: column;
  font-size: 0.3rem; }

.follow li span:nth-of-type(2) {
  display: flex;
  flex-direction: column;
  font-size: 0.24rem; }

.indent {
  width: 100%;
  height: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6; }

.indent div:nth-of-type(1) {
  margin-left: 0.38rem;
  font-size: 0.32rem;
  color: #262626; }

.indent div:nth-of-type(2) {
  font-size: 0.28rem;
  color: #999;
  display: flex; }

.row {
  display: block;
  width: 0.12rem;
  height: 0.24rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAAXNSR0IArs4c6QAAAelJREFUOBGlkz8sA3EUx3tXmtygq0iF4bqxIhZJB4OzEZVIJPpPxGJBLN0M/iwWg1ybdqgYMBCDECmRECaLrYvFzKSC1uc1V9Fry5WXvHv3+733+X1/v/e7c7n+aolE4grvbJRXi8ViP9ANcG8jsKooyilwK36eTCZHncKqrusGsAmgAe8CLziBlXIRW13kfQWYdRSTBWcDgcB7OW+PX6AkTNMcIWRwTY7g9XrHgsHgs+TsVgFK0mrSoZyb4T0LDEej0Qc7qNonKLplrk8gvAuv2fEqRQpLlslkvPl8fg/lQSZeVFWdjEQi+1baVReUgmw225TL5TZ5nWbLReISO1qT3I+gFIjJFaG8+r3jjkCB7R2vao4U1TJN06Rpj1auwxGYTqd1GnUJpON3Ho9n4Netcq/dnO0EoI0GXbvdbiMUCj39qJhKpXoALizoDKVBgRjX7ypKA+SPUGshHvh8vnHDMF4FEqu5Vdo/VCgU5LI1fNvv90/ZP/gqEKUxVLYBmjnTFl/LLLHAuMIqzshdhcju4M34Ol/JTC1IVvgCUZqjKImamxiPxWLyf9a1EohSHGDDqppDabkuYSUUlNaB5lH5wKOcKf0bJPkmgYhv/DYT4XB4zwlUAnm8oDQCdOwUKtXxw7Y3BPy3+BNA/bpVQOxGjAAAAABJRU5ErkJggg==);
  background-size: 0.12rem 0.24rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  margin-top: 0.03rem; }

.huowu {
  display: flex;
  height: 1.36rem;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.2rem solid #e6e6e6; }

.huowu li {
  width: 33.3%;
  height: 1.36rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.24rem;
  color: #666; }

.li1 span:nth-of-type(1) {
  display: block;
  background-image: url(//static.piaoniu.com/m/static/img/order-topay.4cf62ce.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  margin-bottom: 0.16rem;
  width: 0.44rem;
  height: 0.44rem; }

.li2 span:nth-of-type(1) {
  display: block;
  background-image: url(//static.piaoniu.com/m/static/img/order-tosend.20248ed.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  margin-bottom: 0.16rem;
  width: 0.44rem;
  height: 0.44rem; }

.li3 span:nth-of-type(1) {
  display: block;
  background-image: url(//static.piaoniu.com/m/static/img/order-toreceive.d23cc4e.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  margin-bottom: 0.16rem;
  width: 0.44rem;
  height: 0.44rem; }

.lipin {
  width: 100%;
  height: 1.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.2rem solid #e6e6e6; }

.lipin li {
  width: 50%;
  height: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; }

.lipin li span:nth-of-type(1) {
  font-size: 0.32rem;
  margin-bottom: 0.16rem;
  color: #ff2661; }

.lipin li span:nth-of-type(2) {
  font-size: 0.24rem;
  font-weight: 400;
  color: #666; }

.fuli {
  width: 100%;
  height: 0.78rem;
  padding-left: 0.38rem;
  border-bottom: 0.02rem solid #999; }

.fuli div {
  width: 1.28rem;
  height: 0.78rem;
  font-size: 0.32rem;
  line-height: 0.78rem; }

.flnr {
  width: 100%;
  height: 1.58rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.2rem solid #e6e6e6; }

.flnr .div1 {
  width: 50%;
  height: 1.58rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; }

.flnr .div2 {
  width: 50%;
  height: 1.58rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; }

.div1 span {
  width: 0.96rem;
  height: 0.96rem;
  background-image: url(//static.piaoniu.com/m/static/img/icon-redpackage.e078ab8.png);
  background-size: 0.96rem 0.96rem; }

.div2 span {
  width: 0.96rem;
  height: 0.96rem;
  background-image: url(//static.piaoniu.com/m/static/img/icon-club.959250b.png);
  background-size: 0.96rem 0.96rem; }

.div3 {
  margin-left: 0.2rem; }

.div3 li {
  font-size: 0.28rem;
  margin-bottom: 0.18rem;
  color: #262626; }

.div3 div {
  font-size: 0.22rem;
  color: #999; }

.address {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.38rem;
  height: 0.88rem;
  padding-right: 0.2rem; }

.address div:nth-of-type(1) {
  height: 0.88rem;
  font-size: .28rem;
  color: #262626;
  line-height: 0.88rem; }

.address div:nth-of-type(2) {
  width: 0.12rem;
  height: 0.24rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAAXNSR0IArs4c6QAAAelJREFUOBGlkz8sA3EUx3tXmtygq0iF4bqxIhZJB4OzEZVIJPpPxGJBLN0M/iwWg1ybdqgYMBCDECmRECaLrYvFzKSC1uc1V9Fry5WXvHv3+733+X1/v/e7c7n+aolE4grvbJRXi8ViP9ANcG8jsKooyilwK36eTCZHncKqrusGsAmgAe8CLziBlXIRW13kfQWYdRSTBWcDgcB7OW+PX6AkTNMcIWRwTY7g9XrHgsHgs+TsVgFK0mrSoZyb4T0LDEej0Qc7qNonKLplrk8gvAuv2fEqRQpLlslkvPl8fg/lQSZeVFWdjEQi+1baVReUgmw225TL5TZ5nWbLReISO1qT3I+gFIjJFaG8+r3jjkCB7R2vao4U1TJN06Rpj1auwxGYTqd1GnUJpON3Ho9n4Netcq/dnO0EoI0GXbvdbiMUCj39qJhKpXoALizoDKVBgRjX7ypKA+SPUGshHvh8vnHDMF4FEqu5Vdo/VCgU5LI1fNvv90/ZP/gqEKUxVLYBmjnTFl/LLLHAuMIqzshdhcju4M34Ol/JTC1IVvgCUZqjKImamxiPxWLyf9a1EohSHGDDqppDabkuYSUUlNaB5lH5wKOcKf0bJPkmgYhv/DYT4XB4zwlUAnm8oDQCdOwUKtXxw7Y3BPy3+BNA/bpVQOxGjAAAAABJRU5ErkJggg==);
  background-size: 0.12rem 0.24rem;
  background-repeat: no-repeat; }

.help {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.38rem;
  height: 0.88rem;
  padding-right: 0.2rem; }

.help div:nth-of-type(1) {
  height: 0.88rem;
  font-size: .28rem;
  color: #262626;
  line-height: 0.88rem; }

.help div:nth-of-type(2) {
  width: 0.12rem;
  height: 0.24rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAAXNSR0IArs4c6QAAAelJREFUOBGlkz8sA3EUx3tXmtygq0iF4bqxIhZJB4OzEZVIJPpPxGJBLN0M/iwWg1ybdqgYMBCDECmRECaLrYvFzKSC1uc1V9Fry5WXvHv3+733+X1/v/e7c7n+aolE4grvbJRXi8ViP9ANcG8jsKooyilwK36eTCZHncKqrusGsAmgAe8CLziBlXIRW13kfQWYdRSTBWcDgcB7OW+PX6AkTNMcIWRwTY7g9XrHgsHgs+TsVgFK0mrSoZyb4T0LDEej0Qc7qNonKLplrk8gvAuv2fEqRQpLlslkvPl8fg/lQSZeVFWdjEQi+1baVReUgmw225TL5TZ5nWbLReISO1qT3I+gFIjJFaG8+r3jjkCB7R2vao4U1TJN06Rpj1auwxGYTqd1GnUJpON3Ho9n4Netcq/dnO0EoI0GXbvdbiMUCj39qJhKpXoALizoDKVBgRjX7ypKA+SPUGshHvh8vnHDMF4FEqu5Vdo/VCgU5LI1fNvv90/ZP/gqEKUxVLYBmjnTFl/LLLHAuMIqzshdhcju4M34Ol/JTC1IVvgCUZqjKImamxiPxWLyf9a1EohSHGDDqppDabkuYSUUlNaB5lH5wKOcKf0bJPkmgYhv/DYT4XB4zwlUAnm8oDQCdOwUKtXxw7Y3BPy3+BNA/bpVQOxGjAAAAABJRU5ErkJggg==);
  background-size: 0.12rem 0.24rem;
  background-repeat: no-repeat; }

.wanted {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.38rem;
  height: 0.88rem;
  padding-right: 0.2rem;
  border-bottom: 0.2rem solid #e6e6e6; }

.wanted div:nth-of-type(1) {
  height: 0.88rem;
  font-size: .28rem;
  color: #262626;
  line-height: 0.88rem; }

.wanted div:nth-of-type(2) {
  width: 0.12rem;
  height: 0.24rem;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAAXNSR0IArs4c6QAAAelJREFUOBGlkz8sA3EUx3tXmtygq0iF4bqxIhZJB4OzEZVIJPpPxGJBLN0M/iwWg1ybdqgYMBCDECmRECaLrYvFzKSC1uc1V9Fry5WXvHv3+733+X1/v/e7c7n+aolE4grvbJRXi8ViP9ANcG8jsKooyilwK36eTCZHncKqrusGsAmgAe8CLziBlXIRW13kfQWYdRSTBWcDgcB7OW+PX6AkTNMcIWRwTY7g9XrHgsHgs+TsVgFK0mrSoZyb4T0LDEej0Qc7qNonKLplrk8gvAuv2fEqRQpLlslkvPl8fg/lQSZeVFWdjEQi+1baVReUgmw225TL5TZ5nWbLReISO1qT3I+gFIjJFaG8+r3jjkCB7R2vao4U1TJN06Rpj1auwxGYTqd1GnUJpON3Ho9n4Netcq/dnO0EoI0GXbvdbiMUCj39qJhKpXoALizoDKVBgRjX7ypKA+SPUGshHvh8vnHDMF4FEqu5Vdo/VCgU5LI1fNvv90/ZP/gqEKUxVLYBmjnTFl/LLLHAuMIqzshdhcju4M34Ol/JTC1IVvgCUZqjKImamxiPxWLyf9a1EohSHGDDqppDabkuYSUUlNaB5lH5wKOcKf0bJPkmgYhv/DYT4XB4zwlUAnm8oDQCdOwUKtXxw7Y3BPy3+BNA/bpVQOxGjAAAAABJRU5ErkJggg==);
  background-size: 0.12rem 0.24rem;
  background-repeat: no-repeat; }

.logout {
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.88rem;
  color: #ff2661; }
</style>