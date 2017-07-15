<template>
  <div id="app">
    <transition name="slide-left">
      <router-view class="rv"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  methods: {
  
  }
}
</script>

<style>
@import './assets/css/reset.css';
.content {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 3.2rem;
    overflow-y: auto;
    background: #f5f5f5;
}
/*router动画*/
.rv{
  position: absolute;  
  left: 0;  
  top: 0;  
  width: 100%;  
  height: 100%;  
  transition: all .5s cubic-bezier(.55,0,.1,1);  
}
.slide-left-enter, .slide-right-leave-active {  
  opacity: 0;  
  -webkit-transform: translate(30px, 0);  
  transform: translate(30px, 0);  
}  
.slide-left-leave-active, .slide-right-enter {  
  opacity: 0;  
  -webkit-transform: translate(-30px, 0);  
  transform: translate(-30px, 0);  
}

/*蓝头*/
.bluehead{
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
    height: 3rem;
    color: #fff;
    text-align: center;
    line-height: 3rem;
    font-size: 1.2rem;
    position: relative;
}
.bluehead i{
    position: absolute;
    left: 0;
    top: 0;
    width: 3rem;
    height: 100%;
    background: url(./imgs/back.png) no-repeat;
    background-size: 50%;
    background-position: center;
}

/*  */
.text_ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.float-left{
    float: left;
}

.float-right {
    float: right;
}

/*shopshow  */
.shop-info-box {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    padding: 0.8rem;
    margin-bottom: 0.8rem;
}

.shop-info-box .shop-logo {
    width: 17%;
    margin-right: 0.7rem;
}

.shop-info-box .shop-logo img {
    width: 100%;
}

.shop-info-box .shop-main {
    width: 80%;
    height: 100%;
}

.shop-main-name {
    width: 100%;
    height: 1.5rem;
}

.shop-main-name .pplogo {
    display: inline-block;
    background-color: #ffd930;
    color: #52250a;
    font-weight: bold;
    font-size: 0.8rem;
    padding: 0.1rem;
    border-radius: 0.2rem;
    vertical-align: top;
    margin-top: 0.15rem;
}

.shop-main-name .shop-name {
    display: inline-block;
    width: 10rem;
    font-weight: bold;
    font-size: 1rem;
    color: #333;
}

.shop-main-name>div span {
    color: rgb(153, 153, 153);
    font-size: 0.6rem;
}

.shop-main-level {
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
}

.shop-main-level .level-star {
    display: inline-block;
    font-size: 0;
}

.shop-main-level .level-star img {
    width: 0.7rem;
}

.shop-main-level .level-count {
    font-size: 0.7rem;
    color: #ff6000;
}

.shop-main-level .level-sale {
    font-size: 0.75rem;
    color: #666;
}

.shop-main-level .zsd {
    display: inline-block;
    border: 1px solid #44a5ff;
    color: #2395ff;
    font-size: 0.5rem;
    line-height: 0.8rem;
    border-radius: 0.2rem;
    padding: 0 0.2rem;
    vertical-align: middle;
    height: 0.9rem;
    line-height: 0.9rem;
}

.shop-main-level .fnzs {
    font-size: 0.5rem;
    background-color: #2395ff;
    color: #fff;
    border-radius: 0.2rem;
    padding: 0.05rem 0.2rem;
    ;
    height: 0.9rem;
    line-height: 0.9rem;
}

.shop-main-time {
    width: 100%;
}

.shop-main-time span {
    color: #666;
    font-size: 0.7rem;
}

.shop-main-time .wite-time {
    color: #2395ff;
}

.shop-main-info {
    margin-top: 0.5rem;
    width: 100%;
    position: relative;
}

.shop-main-info p {
    width: 100%;
}

.shop-main-info p i {
    background-color: rgb(240, 115, 115);
    color: rgb(255, 255, 255);
    font-size: 0.7rem;
    display: inline-block;
    border-radius: 0.2rem;
    font-style: normal;
    padding: 0 0.1rem;
    margin-right: 0.4rem;
}

.shop-main-info p span {
    font-size: 0.7rem;
    color: #939393;
}

.shop-main-info .info-show {
    position: absolute;
    top: 0;
    right: 0;
    border: 0.1px solid transparent;
}

.shop-main-info .info-show span {
    font-size: 0.7rem;
    color: #999;
}

.shop-main-info .info-show img {
    vertical-align: top;
    margin-top: 0.4rem;
}
</style>