<template>
  <div>
    <div class="header">
      <div>返回</div>
      <div>优惠券</div>
    </div>

    <div class="youhui">
      <div class="yh1">
        <div class="yuan">
          <span>￥</span>
          <span>38</span>
        </div>
        <div class="jian">
          <h4>演唱会立减38元</h4>
          <li class="li">APP专享,满2000元可用</li>
          <span>2019.9.5~12.4</span>
          <li class="li1">立即使用</li>
        </div>
      </div>
      <div class="yh1">
        <div class="yuan">
          <span>￥</span>
          <span>38</span>
        </div>
        <div class="jian">
          <h4>演唱会立减38元</h4>
          <li class="li">APP专享,满2000元可用</li>
          <span>2019.9.5~12.4</span>
          <li class="li1">立即使用</li>
        </div>
      </div>
      <div class="yh1">
        <div class="yuan">
          <span>￥</span>
          <span>38</span>
        </div>
        <div class="jian">
          <h4>演唱会立减38元</h4>
          <li class="li">APP专享,满2000元可用</li>
          <span>2019.9.5~12.4</span>
          <li class="li1">立即使用</li>
        </div>
      </div>
      <div class="yh1">
        <div class="yuan">
          <span>￥</span>
          <span>38</span>
        </div>
        <div class="jian">
          <h4>演唱会立减38元</h4>
          <li class="li">APP专享,满2000元可用</li>
          <span>2019.9.5~12.4</span>
          <li class="li1">立即使用</li>
        </div>
      </div>
      <div class="yh1">
        <div class="yuan">
          <span>￥</span>
          <span>38</span>
        </div>
        <div class="jian">
          <h4>演唱会立减38元</h4>
          <li class="li">APP专享,满2000元可用</li>
          <span>2019.9.5~12.4</span>
          <li class="li1">立即使用</li>
        </div>
      </div>
      <div class="yh1">
        <div class="yuan">
          <span>￥</span>
          <span>38</span>
        </div>
        <div class="jian">
          <h4>演唱会立减38元</h4>
          <li class="li">APP专享,满2000元可用</li>
          <span>2019.9.5~12.4</span>
          <li class="li1">立即使用</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Youhui"
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 0.2rem;
  border-bottom: 0.02rem solid #ccc;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 2;
  
}
.header div:nth-of-type(1) {
  font-size: 0.32rem;
  color: #262626;
  position: absolute;
  left: 0.2rem;
}
.header div:nth-of-type(2) {
  font-size: 0.32rem;
  font-weight: 600;
  color: #525252;
  margin: 0 auto;
}
.youhui{
    margin-top:0.88rem;
}
.yh1 {
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0.3rem 0.28rem;
  background-image: url(//static.piaoniu.com/m/static/img/coupon-decorator.e63f996.png);
  background-size: 0.2rem 0.08rem;
  background-position: 0.08rem 0;
  background-repeat: repeat-x;
  border-radius: 0.08rem;
  position: relative;
  background-color: #fff;
}
.yuan {
  width: 1.86rem;
  height: 1.756rem;
  font-size: 0.72rem;
  color: #ff2661;
  line-height: 0.72rem;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 0.4rem;
  border-right: 0.02rem dashed #ccc;
  text-align: center;
}
.yuan span:nth-of-type(1) {
  font-size: 0.36rem;
  margin-top: 0.2rem;
  margin-left: 0.3rem;
}
.jian {
  margin-left: 0.2rem;
}
.jian h4 {
  color: #262626;
  font-weight: 700;
  font-size: 0.32rem;
  margin-top: 0.2rem;
}
.jian .li {
  color: #666;
  font-size: 0.24rem;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 0.1rem;
}
.jian span {
  display: block;
  font-size: 0.24rem;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #666;
  margin-top: 0.4rem;
}
.jian .li1 {
  position: absolute;
  right: 0.4rem;
  top: 0.8rem;
  font-size: 0.24rem;
  color: #ff2661;
  border: 0.02rem solid #ff2661;
  padding: 0.08rem 0.12rem;
  border-radius: 0.22rem;
}
</style>