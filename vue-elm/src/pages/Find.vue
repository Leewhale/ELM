<template>
<div>
    <router-view></router-view>
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
        setData:function(){
        }
    },mounted () {
        this.$parent.$emit('cartAdd','aaaaa');
    }
}
</script>

<style scoped>

</style>