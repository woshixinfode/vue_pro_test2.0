<template>
    <div id="didi-navigator">
        <ul>
            <li v-for="tab in tabs">
                {{ tab.txt }}
            </li>
        </ul>
        <p v-if="greeting">this is a text</p>
        <p v-else="greeting">this is a text2</p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
        return {
            tabs: [{txt:'jj'},{txt:'jj2'},{txt:'jj3'},{txt:'jj4'},{txt:'jj5'},{txt:'jj6'}],
            greeting : true,
            gre:true,
        }
    }
    }
</script>

<style>

</style>