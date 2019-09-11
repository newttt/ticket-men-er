<template>
    <div>
            <div class="search-header">
            <div class="ui-searchbox">
                <div class="ui-inner">
                    <div class="ui-wrap">
                        <div class="icon-search"></div>
                       
                    </div>
                    <form action="">
                        <input class="search-input" type="text" 
                        placeholder="搜索明星、演出、场馆" 
                        v-model="HomeName">
                        <div class="clear-input"></div>
                    </form>
                    
                </div>
            </div>
            <div class="cancel">取消</div>
        </div>




        <!-- <div class="suggest-wrap">
            <div class="suggest-end">查找“”</div>
        </div> -->



        <div class="default-search">
            <div class="row-title">热门搜索</div>
        </div>




        <div class="hot-searches">
            <div class="keyword">任贤齐</div>
            <div class="keyword">潘玮柏</div>
            <div class="keyword">哗变</div>
            <div class="keyword">许巍</div>
            <div class="keyword">Color Run</div>
            <div class="keyword">世园会</div>
            <div class="keyword">月饼券</div>
            <div class="keyword">长城</div>
        </div>


        <div class="row-title">搜索记录</div>

    </div>
</template>




<script>

import {HomeSearch} from "@api";
import {mapState} from "vuex";
export default {
    name:"Search",
    data(){
        return {
            HomeName:"",
            searchList:[],

        }
    },
    computed :{
        ...mapState({
            input:state=>state.city.id
        })
    },
        watch:{
           async HomeName(newVal,oldVal){
                if(newVal === oldVal) return;
                let data = await HomeSearch(this.HomeName);
                console.log(data)
            }
        }
}
</script>




<style>
    .search{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}
.search-header{
    height: 0.88rem;
    background-color: #fff;
    position: relative;
    z-index: 10;
}
.ui-searchbox{
    -webkit-box-flex: 1;
    height: 0.68rem;
    width: 6.46rem;
    border-radius: 0.06rem;
    display: inline-block;
}
.ui-inner{
    height: 0.68rem;
    line-height: 0.68rem;
    margin: 0.1rem 0.16rem;
    position: relative;
    background-color: #f2f2f2;
    border-radius: 0.08rem;
}
.ui-wrap{
    display: block;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}
.icon-search{
    background-image: url(https://static.piaoniu.com/nuxt-static/img/search.0622317.png);
    background-size: 0.3rem 0.34rem;
    width: 0.3rem;
    height: 0.34rem;
    position: absolute;
    left: 0.28rem;
    top: 0.17rem;
}
.ui-placeholder{
    font-size: 0.24rem;
    color: #666;
    margin-left: 0.74rem;
    font-size: 0.24rem;
}
.search-input{
    outline: none;
    color: #8f8f8f;

    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding-left: 2rem;
    border: none;
    background-color: transparent;
    padding: 0 1rem;
    font-size: 0.28rem;
}
.clear-input{
    position: absolute;
    right: 6px;
    top: 8px;
    width: 18px;
    height: 18px;
    background-image: url(https://static.piaoniu.com/nuxt-static/img/close.47d02ac.png);
    background-size: 100%;
}
.cancel{
    height: 0.88rem;
    line-height: 0.88rem;
    padding: 0 0.18rem 0 0rem;
    font-size: 16px;
    color: #333;
    display: inline-block;
    font-family: "黑体";
}



.suggest-wrap{
    position: fixed;
    top: 0.9rem;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    padding-left: 0.28rem;
    background-color: #fff;
    z-index: 16;
    box-sizing: border-box;
    overflow: auto;
}
.suggest-end{
    color: #4b8feb;
    text-align: center;
    padding: 0.3rem 0;
    display: none;
}


.default-search{
    top: 0.88rem;
    bottom: 0;
    overflow: auto;
    width: 100%;
    z-index: 15;
    background-color: #fff;
    transition: all .2s linear;
    opacity: 1;
}
.row-title{
    background-color: #f2f2f2;
    height: 0.64rem;
    line-height: 0.64rem;
    padding-left: 0.3rem;
    color: #666;
    font-size: 0.28rem;
    font-family: "黑体";
}

.hot-searches{
    padding: 0.3rem 0 0 0.3rem;
    overflow: hidden;
}
.keyword{
    margin-right: 0.26rem;
    margin-bottom: 0.26rem;
    font-size: 0.28rem;
    padding: 0.18rem 0.26rem;
    border: 1px solid #e6e6e6;
    border-radius: 0.08rem;
    float: left;
    font-family: "黑体";
}
</style>