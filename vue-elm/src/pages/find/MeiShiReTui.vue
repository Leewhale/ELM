<template>
<div class="msrtxq">
  <div class="msrtxq_header">
    <span>专属推荐</span>
    <span>激情夜宵</span>
    <span>专属推荐</span>
    <span>专属推荐</span>
    <span>激情夜宵</span>
  </div>
  <div class="mstjxq">
    <div class="mstjxq_box">
      <div class="msrtxq_con">
        <div class="mstjxq_header">
          <img src="" alt="">
          <span>国美多（北京崇文门店）</span>
          <span><span>$20起送</span>/<span>配送费￥6</span></span>
        </div>
        <div class="mstjxq_con">
          <div>
            <img src="../../imgs/others/m.jpg" alt="">
            <p class="mstjxq_con_name">脆蜜樱桃<span>300-400g/盒</span></p>
            <span class="mstjxq_price">￥<span>14.5</span></span>
            <p class="qu_KK">去看看</p>
          </div>
          <div>
            <img src="../../imgs/others/m.jpg" alt="">
            <p class="mstjxq_con_name">脆蜜樱桃<span>300-400g/盒</span></p>
            <span class="mstjxq_price">￥<span>14.5</span></span>
            <p class="qu_KK">去看看</p>
          </div>
          <div>
            <img src="../../imgs/others/m.jpg" alt="">
            <p class="mstjxq_con_name">脆蜜樱桃<span>300-400g/盒</span></p>
            <span class="mstjxq_price">￥<span>14.5</span></span>
            <p class="qu_KK">去看看</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mstjxq_box">
      <div class="msrtxq_con">
        <div class="mstjxq_header">
          <img src="" alt="">
          <span>国美多（北京崇文门店）</span>
          <span><span>$20起送</span>/<span>配送费￥6</span></span>
        </div>
        <div class="mstjxq_con">
          <div>
            <img src="../../imgs/others/m.jpg" alt="">
            <p class="mstjxq_con_name">脆蜜樱桃<span>300-400g/盒</span></p>
            <span class="mstjxq_price">￥<span>14.5</span></span>
            <p class="qu_KK">去看看</p>
          </div>
          <div>
            <img src="../../imgs/others/m.jpg" alt="">
            <p class="mstjxq_con_name">脆蜜樱桃<span>300-400g/盒</span></p>
            <span class="mstjxq_price">￥<span>14.5</span></span>
            <p class="qu_KK">去看看</p>
          </div>
          <div>
            <img src="../../imgs/others/m.jpg" alt="">
            <p class="mstjxq_con_name">脆蜜樱桃<span>300-400g/盒</span></p>
            <span class="mstjxq_price">￥<span>14.5</span></span>
            <p class="qu_KK">去看看</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'name',
  data: function() {
    return {
    }
  },
  methods: {
    getD:function(){
      this.$http.get('https://www.ele.me/restapi/ugc/v1/restaurant/406884/ratings?limit=10&offset=0&record_type=1').then(function(res){
          console.log(res);
      });
    }
  },
  created() {
    this.getD();
  }
}
</script>

<style scoped>
.msrtxq {
  z-index: 1000;
  background-color: #e0e0e0;
}

.msrtxq_header {
  position: fixed;
  top: 0;
  height: 3rem;
  line-height: 3rem;
  background: rgba(255, 255, 255, .8);
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}

.msrtxq_header span {
  border: 1px solid #e0e0e0;
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  margin-left: .5rem;
}

.msrtxq_header span:nth-child(1) {
  border: .5px solid #f60;
  color: #f60
}

.mstjxq {
  margin-top: 3rem;
}

.mstjxq_box {
  box-sizing: border-box;
  padding: 1rem 5px 0;
}

.msrtxq_con {
  background-color: #fff;
  border-radius: 5px;
}

.mstjxq_header {
  height: 3rem;
  line-height: 3rem;
}

.mstjxq_header img {
  margin: 0 .5rem;
  vertical-align: text-bottom;
  width: 1.5rem;
}

.mstjxq_header span:nth-child(2) {
  font-weight: bold;
}

.mstjxq_header span:last-child {
  float: right;
  margin-right: 1rem;
  color: #666;
  font-size: .9rem;
}

.mstjxq_con>div {
  box-sizing: border-box;
  float: left;
  width: 33.3%;
  padding: .5rem;
  line-height: 1.5rem;
  padding: .5rem;
}

.mstjxq_con>div img {
  width: 100%;
  display: block;
  margin: 0 auto;
}

.mstjxq_con>div .mstjxq_con_name {
  color: #666;
}

.mstjxq_con>div .mstjxq_price {
  color: #f60;
  font-size: .5rem;
}

.mstjxq_price span {
  font-weight: bold;
  font-size: 1rem;
}

.qu_KK {
  border: 1px solid #f60;
  color: #f60;
  text-align: center;
  width: 80%;
  margin: .5rem auto;
  border-radius: 3px;
}

.mstjxq_con:after {
  content: "";
  display: block;
  clear: both;
}
</style>