<template>
  <div id="app">
    <router-view></router-view>
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
</style>
