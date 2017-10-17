<template>
    <div class="tzc">
        <div v-drag class="tz">{{ gre }}</div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue';
    import drag from '../js/drag.js'
    Vue.directive('drag',drag)
    export default {
       data () {
        return {
            gre:"可以拖拽",
        }
    }
    }
</script>

<style>
    .tzc{
        height: 50px;
        width: 500px;
        position: relative;
    }
.tz{
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
}
</style>