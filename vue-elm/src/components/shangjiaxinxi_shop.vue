<template>
<!--商品-->
<div class="shop_list_content">
  <div class="list_left">
    <p v-for='(item,index) in storeInfo' @click='selectType(item);activeClass=index' :key="index" :class="{typeactive:activeClass==index}">
      <img :src="item.icon_url | imgForm" v-if='item.icon_url' alt="">
      <span>{{item.name}}</span>
    </p>
  </div>
  <div class="list_right">
    <div class="list_right_h">
      <span>{{foodsList.name}}</span>
      <span>{{foodsList.description}}</span>
      <span>...</span>
    </div>
    <div class="foods_list">
      <div class="list_right_con" v-for='item in foodsList.foods' :key="item">
        <div class="food_icon"><img :src="item.image_path | imgForm"></div>
        <div class="food_info">
          <p>{{item.name}}</p>
          <p>{{item.description}}</p>
          <p><span>月售{{item.month_sales}}份</span>/<span>好评率{{item.satisfy_rate}}%</span></p>
          <p>￥<span>{{item.specfoods[0].price}}</span></p>
        </div>
        <div class="buy_icon">
          <span @click="reduceCart(item)" v-show='item.vshow'>-</span>
          <label v-show='item.vshow'>{{item.number}}</label>
          <span @click="addCartList(item)">+</span>
        </div>
      </div>
    </div>
  </div>
  <!-- 购物车 -->
  <transition name="fade">
    <div class="zz" v-show='showListFlag' @click.self='showList'>
      <div class="shop_list">
        <div class='shop_list_header'>
          <span>购物车</span><span @click='delAll'>清空</span>
        </div>
        <table class="shop_list_con">
          <tr v-for='item in cartList' :key="item">
            <td>{{item.name}}</td>
            <td>￥{{item.number*item.specfoods[0].price}}</td>
            <td class="bianhua">
              <span @click="reduceCart(item)">-</span>
              <span>{{item.number}}</span>
              <span @click="addCartList(item)">+</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </transition>
  <div class="cartBottom" @click='showList'>
    <span>{{ total[0]}}</span>
    <span>总计￥{{ parseFloat(total[1]).toFixed(2)}}</span>
    <span>配送费￥{{this.psf}}</span>
    <span @click.stop='qujiesuan'>去结算</span>
  </div>
</div>
</template>

<script>
import imgFormat from '../utils/utils.js'
export default {
  props: ['shop_id', 'psf'],
  data() {
    return {
      activeClass: 0,
      storeInfo: [], //商家所有商品信息
      foodsList: [], //商家分类商品信息
      total: [0, 0], //总价钱、总数量
      cartList: this.$store.state.cartList, //选中商品列表
      showListFlag: false //购物车详细列表显示状态
    }
  },
  methods: {
    // 点击购物车显示详细列表
    showList() {
      if (this.cartList.length > 0) {
        this.showListFlag = !this.showListFlag;
      }
    },

    // 点击购物车中的 “ 清空 ” 按钮
    delAll(item) {
      this.$store.dispatch('delAll');
      this.showListFlag = false; //显示“-”和数量
      this.cartList = []; //购物车列表
      this.total = [0, 0]; //总价钱、总数量归0
      // 清空所有商品中的数量属性
      this.storeInfo.map(i => {
        i.foods.map(j => {
          if (j.number != undefined) {
            delete j.vshow;
            delete j.number;
          }
        });
      });
    },

    // 点击切换商品
    selectType(item) {
      this.foodsList = this.storeInfo[this.storeInfo.indexOf(item)];
      this.dataContain();
    },

    // 添加商品
    addCartList(item) {
      this.$store.dispatch('addCartList', item);
      if (item.number && item.number > 0) {
        this.vshow = true;
      }
      // 选中商品列表
      this.cartList = this.$store.state.cartList;
      this.total = this.getTotal();
    },

    // 减少商品
    reduceCart(item) {
      this.$store.dispatch('reduceCartList', item);
      // 隐藏减少按钮和数量
      if (item.number <= 0) {
        this.vshow = false;
      }
      // 选中商品列表
      this.cartList = this.$store.state.cartList;
      // 购物车详细列表中没有商品时隐藏
      if (this.cartList.length == 0) {
        this.showListFlag = false;
      }
      this.total = this.getTotal();
    },

    // 计算总价钱和总数量
    getTotal() {
      this.total = [0, 0];
      this.$store.state.cartList.forEach(i => {
        this.total[0] += i.number;
        this.total[1] += i.number * i.specfoods[0].price;
      });
      return this.total;
    },

    // 获取商品列表
    getData() {
      var $this = this;
      this.$http.get('https://www.ele.me/restapi/shopping/v2/menu?restaurant_id=' + this.shop_id).then(res => {
        this.storeInfo = res.data;
        this.foodsList = res.data[0];
        this.dataContain();
      });
    },
    dataContain() {
      // 数据合并，购物车中的数据跟请求道的商品数据
      var foods = this.foodsList.foods,
        cartL = this.$store.state.cartList;
      for (var i in foods) {
        if (cartL.length > 0) {
          for (var j in cartL) {
            if (foods[i].item_id === cartL[j].item_id) {
              foods[i] = cartL[j];
            }
          }
        }
      }
    },

    // 去结算
    qujiesuan() {
      if (this.cartList.length > 0) {
        this.$router.push({
          name: 'Order',
          params: {
            orderL: this.cartList,
            total: this.total,
            orderTime: (new Date()).toLocaleString()
          }
        });
        this.cartList = [];
      }
    }
  },
  mounted() {
    this.getData();
    this.total = this.getTotal();
  },
  filters: {
    imgForm(i) {
      return imgFormat(i);
    }
  }
}
</script>

<style scoped>
/**购物车 */

.typeactive {
  border-left: 2px solid #3190e8;
}

.zw {
  width: 100%;
  height: 3.2rem;
}


/*购物车详细列表  */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}

.zz {
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 3.2rem;
  background: rgba(0, 0, 0, .5);
}

.shop_list {
  position: fixed;
  bottom: 3.2rem;
  max-height: 50%;
  overflow-y: auto;
  width: 100%;
}

.shop_list_header {
  height: 2rem;
  line-height: 2rem;
  background-color: #e0e0e0;
}

.shop_list_header span:first-child {
  margin-left: 1rem;
  border-left: .4rem solid #3190e8;
  padding-left: .5rem;
}

.shop_list_header span:last-child {
  float: right;
  margin-right: 1rem;
}

.shop_list_con {
  width: 100%;
  background-color: #ffe;
}

.shop_list_con tr {
  height: 3rem;
}

.shop_list_con tr td:nth-child(1) {
  width: 60%;
  padding-left: 1rem;
}

.shop_list_con tr td:nth-child(2) {
  width: 20%;
}

.shop_list_con tr td:nth-child(3) {
  width: 20%;
  text-align: center;
}

.bianhua span:nth-child(1),
.bianhua span:nth-child(3) {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  color: #fff;
  background-color: #3190e8;
  border-radius: 50%;
}


/*购物车底部条  */

.cartBottom {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 3.3rem;
  z-index: 101;
  background-color: #4c4c4c;
  line-height: 3.3rem;
  color: #fff;
}

.cartBottom span {
  margin: 0 1rem;
}

.cartBottom span:nth-child(1) {
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
}

.cartBottom span:last-child {
  position: absolute;
  display: inline-block;
  background-color: #19963a;
  width: 6rem;
  height: 4rem;
  right: -1rem;
  text-align: center;
}


/*商家商品信息*/

.shop_list_content {
  position: fixed;
  top: 12.5rem;
  bottom: 0;
  left: 0;
  right: 0;
}

.shop_list_content .list_left {
  left: 0;
  float: left;
  width: 25%;
  overflow-y: overlay;
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid #ccc;
  padding-bottom: 3.3rem;
}

.shop_list_content .list_left p {
  box-sizing: border-box;
  font-size: .8rem;
  border-bottom: 1px solid #e2e2e2;
  padding: .8rem;
}

.shop_list_content .list_left p img {
  width: 1rem;
}

.list_right {
  float: left;
  width: 75%;
  height: 100%;
  overflow-y: overlay;
  left: 25%;
  box-sizing: border-box;
  padding-bottom: 3.3rem;
}

.list_right_h {
  height: 2rem;
  line-height: 2rem;
  background-color: #e0e0e0;
  color: #666;
  font-size: .8rem;
}

.list_right_h span:nth-child(1) {
  font-weight: bold;
  font-size: 1rem;
  margin: 0 .5rem;
}

.list_right_h span:nth-child(3) {
  float: right;
  font-size: 1rem;
  margin-right: 1rem;
}

.list_right_con {
  box-sizing: border-box;
  padding: 10px 5px 10px 0;
  position: relative;
  border-bottom: 1px solid #ccc;
}

.list_right_con .food_icon {
  width: 30%;
  float: left;
}

.list_right_con .food_icon img {
  width: 80%;
  display: block;
  margin: 0 auto;
}

.list_right_con .food_info {
  width: 70%;
  float: left;
  line-height: 1.5rem;
}

.list_right_con .food_info p:nth-child(1) {
  font-weight: bold;
}

.list_right_con .food_info p:nth-child(2) {
  font-size: .8rem;
  color: #666;
  line-height: 1rem;
}

.list_right_con .food_info p:nth-child(3) {
  font-size: .9rem;
  color: #333;
}

.list_right_con .food_info p:nth-child(4) {
  font-size: .8rem;
  color: #f60;
}

.list_right_con .food_info p:nth-child(4) span {
  font-size: 1rem;
  font-weight: bold;
}

.buy_icon {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}

.buy_icon span {
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  border-radius: 50%;
  font-weight: bold;
}

.buy_icon span:nth-child(1) {
  color: #3190e8;
  border: 1px solid #3190e8;
}

.buy_icon span:nth-child(3) {
  background-color: #3190e8;
  color: #fff;
}

.shop_info:after,
.list_right_con:after,
.zhpj:after,
.pJ:after {
  content: "";
  display: block;
  clear: both;
}
</style>