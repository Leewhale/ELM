<template>
    <footer>
        <!--active-class="foot-act"-->
        <router-link tag="div" to="/home" active-class="home-active">
            <span class="home-normal"></span>
            <p>外卖</p>
        </router-link>
        <router-link tag="div" to="/find" active-class="find-active">
            <span class="find-normal"></span>
            <p>发现</p>
        </router-link>
        <router-link tag="div" to="/order" active-class="order-active">
            <span class="order-normal"></span>
            <p>订单</p>
        </router-link>
        <router-link tag="div" to="/mine" active-class="mine-active">
            <span class="mine-normal"></span>
            <p>我的</p>
        </router-link>
    </footer>
</template>

<script>
export default {
    name: 'footerNav',
    data: function() {	
        return {}
    },
    methods: {}
}
</script>

<style>
footer {
  box-sizing: border-box;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 3.2rem;
  box-shadow: 0 -2px 0 rgba(0, 0, 0, .1);
  display: flex;
  padding-top: 0.2rem;
  color: #666;
}

footer>div {
  width: 25%;
  height: 100%;
  text-align: center;
}

footer>div span {
  display: block;
  width: 100%;
  height: 1.8rem;
  background-repeat: no-repeat;
  background-size: 23%;
  background-position: center;
}

.home-normal {
  background-image: url(../imgs/home.png);
}

.find-normal {
  background-image: url(../imgs/find.png);
}

.order-normal {
  background-image: url(../imgs/order.png);
}

.mine-normal {
  background-image: url(../imgs/mine.png);
}

footer>div p {
  margin: 0;
  font-size: 0.8rem;
  /*color: #666;*/
}

/*底部导航激活状态样式*/
footer .home-active {
  color: #0089dc;
}
footer .home-active span{
  background-image: url(../imgs/home1.png);
}
footer .find-active {
  color: #0089dc;
}
footer .find-active span{
  background-image: url(../imgs/find1.png);
}
footer .order-active {
  color: #0089dc;
}
footer .order-active span{
  background-image: url(../imgs/order1.png);
}
footer .mine-active {
  color: #0089dc;
}
footer .mine-active span{
  background-image: url(../imgs/mine1.png);
}
</style>