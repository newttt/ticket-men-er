<template>
  <div>
    <div class="div1">
      <span>星光浪漫互动音乐剧场</span>
      <span>待付款</span>
    </div>
    <div class="div2">
      <div></div>
      <div class="div3">
        <li>场次</li>
        <li>地址</li>
        <li>票档</li>
        <li>数量</li>
      </div>
    </div>
    <div class="div4">
        取消订单
    </div>
  </div>
</template>
<script>
export default {
  name: "All"
};
</script>

<style scoped>
.div1 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}
.div1 span:nth-of-type(1) {
  margin-left: 0.3rem;
  font-size: 0.32rem;
  font-weight: bold;
}
.div1 span:nth-of-type(2) {
  margin-right: 0.3rem;
  color: #ff2661;
  margin-bottom: 0.3rem;
}
.div2{
    width:100%;
    height:1.6rem;
    display: flex;
    justify-content: left;
    padding: 0 0.3rem;
}
.div2 div:nth-of-type(1) {
    background-image: url("https://img.piaoniu.com/poster/b6ca5a6e1c85880642e5212e42ee7974a3741717.jpg?imageView2/2/w/76/h/100");
  background-size: cover;
  background-position: center;
  width: 1.16rem;
  height: 1.52rem;
  
}
.div3{
    margin-left:0.3rem;
}
.div3 li{
    margin-bottom: 0.1rem;
}
.div4{
    width:100%;
    height: 0.88rem;
    text-align: center;
}
</style>