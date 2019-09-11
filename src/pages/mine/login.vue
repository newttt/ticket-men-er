<template>
  <div>
    <div class="zc" v-show="!flag">
      <div class="header">
        <span>&lt;</span>
        <span @click="clickHandler1()">{{mes2}}</span>
      </div>
      <h3>{{mes1}}</h3>
      <p class="text1">
        <input type="text" :placeholder="mes3" @input="inputHandler1($event)" ref="user" />
        <span>{{m1}}</span>
      </p>
      <p class="text2">
        <input type="text" :placeholder="mes4" @input="inputHandler2($event)" ref="yanzheng" />
        <span>{{m2}}</span>
      </p>
      <p class="text3">
        <input type="text" :placeholder="mes5" @input="inputHandler3($event)" ref="yz"/>
        <span>{{m3}}</span>
      </p>
      <div class="zhuce" @click="clickHandler3()">{{mes6}}</div>
    </div>
    <div class="dl" v-show="flag">
      <div class="header2">
        <span>&lt;</span>
        <span @click="clickHandler2()">{{mes7}}</span>
      </div>
      <h3>{{mes8}}</h3>
      <p class="text4">
        <input type="text" :placeholder="mes3" ref="t1" />
      </p>
      <p class="text5">
        <input type="text" :placeholder="mes4" ref="t2" />
      </p>
      <div class="denglu" @click="clickHandler4()">{{mes8}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      flag: false,
      mes1: "注册",
      mes2: "已有账户？请登录",
      mes3: "请输入用户名",
      mes4: "请输入密码",
      mes5: "请确认您的密码",
      mes6: "注册",
      mes7: "没有账户？请注册",
      mes8: "登录",
      m1: "以字母为开头，6-11位",
      m2: "以字母为开头，字母和数字至少分别一个",
      m3: "",
      arr: []
    };
  },
  methods: {
    clickHandler1() {
      this.flag = !this.flag;
    },
    clickHandler2() {
      this.flag = !this.flag;
    },
    inputHandler1(e) {
      //   console.log(e.target.value);
      if (/^[a-zA-Z]{1}[A-Z|a-z|0-9]{5,10}/.test(e.target.value)) {
        this.m1 = "输入正确";
      } else if (e.target.value != "") {
        this.m1 = "输入有误";
      } else {
        this.m1 = "以字母为开头，6-11位";
      }
    },
    inputHandler2(e) {
      // console.log(12)
      if (/[A-Za-z]+[0-9]+/.test(e.target.value)) {
        this.m2 = "输入正确";
      } else if (e.target.value != "") {
        this.m2 = "输入有误";
      } else {
        this.m2 = "以字母为开头，字母和数字至少分别一个";
      }
    },
    inputHandler3(e) {
      console.log(this.$refs.yanzheng.value);
      if (e.target.value == this.$refs.yanzheng.value) {
        this.m3 = "输入正确";
      } else if (e.target.value != "") {
        this.m3 = "两次密码不匹配";
      } else {
        this.m3 = "";
      }
    },
    clickHandler3() {
      if (
        this.m1 == "输入正确" &&
        this.m2 == "输入正确" &&
        this.m3 == "输入正确"
      ) {
        var bool;
        if (localStorage.arr) {
          this.arr = JSON.parse(localStorage.arr);
          for (var i = 0; i < this.arr.length; i++) {
            if (this.$refs.user.value == this.arr[i].user) {
              alert("用户名已存在");
              bool = true;
              break;
            }
          }
        }
        if (!bool) {
          this.arr.push({
            user: this.$refs.user.value,
            password: this.$refs.yanzheng.value
          });
          localStorage.arr = JSON.stringify(this.arr);
          alert("注册成功,请登录");
          this.flag = true;
        }
        this.$refs.user.value="";
        this.$refs.yanzheng.value="";
        this.$refs.yz.value="";
        
      } else {
        alert("注册失败,请重新注册");
        location.reload();
      }
    },
    clickHandler4() {
        console.log("sa")
       if(localStorage.arr){
           console.log("sas")
           var t;
            this.arr=JSON.parse(localStorage.arr);
            for(var i=0;i<this.arr.length;i++){
                console.log("a")
                console.log(this.arr[0].user)
                console.log(this.$refs.t1.value)
                if(this.$refs.t1.value==this.arr[i].user){
                    console.log("asassa")
                    if(this.$refs.t2.value==this.arr[i].password){
                        alert("登录成功");
                        t=true;
                        this.$router.push({path:'/person',query:{user:this.$refs.t1.value}});
                        break;
                    }else{
                        alert("密码错误");
                        this.$refs.t1.value="";
                        this.$refs.t2.value="";
                        break;
                    }
                }else{
                    // alert("用");
                    t=true;
                    continue;
                }
            }
            if(!t){
                alert("用户名不存在,请注册");
                location.reload();
            }
       }else{
           alert("用户名不存在,请注册");
                location.reload();
       }
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: red; */
  font-size: 0.3rem;
  padding: 0 0.3rem;
}
.header span:nth-of-type(1) {
  font-size: 0.5rem;
}
.zc h3 {
  text-align: center;
  font-size: 0.5rem;
  margin-top: 0.2rem;
}
.text1 {
  padding: 0 0.6rem;
  margin-top: 0.4rem;
}
.text1 input {
  width: 100%;
  border: 0;
  padding: 0.3rem 0;
  font-size: 0.3rem;
}
.text2 {
  padding: 0 0.6rem;
}
.text5 {
  padding: 0 0.6rem;
  margin-bottom: 0.4rem;
}
.text2 input {
  width: 100%;
  border: 0;
  padding: 0.3rem 0;
  font-size: 0.3rem;
}
.text5 input {
  width: 100%;
  border: 0;
  padding: 0.3rem 0;
  font-size: 0.3rem;
}
.text3 {
  padding: 0 0.6rem;
  margin-bottom: 0.4rem;
}
.text3 input {
  width: 100%;
  border: 0;
  padding: 0.3rem 0;
  font-size: 0.3rem;
}
.zhuce,
.denglu {
  width: 0.8rem;
  height: 0.4rem;
  margin: 0 auto;
  font-size: 0.4rem;
}
.dl h3 {
  text-align: center;
  font-size: 0.5rem;
  margin-top: 0.2rem;
}
.text4 {
  padding: 0 0.6rem;
  margin-top: 0.4rem;
}
.header2 {
  width: 100%;
  height: 0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: red; */
  font-size: 0.3rem;
  padding: 0 0.3rem;
}
.header2 span:nth-of-type(1) {
  font-size: 0.5rem;
}
.text4 input {
  width: 100%;
  border: 0;
  padding: 0.3rem 0;
  font-size: 0.3rem;
}
</style>