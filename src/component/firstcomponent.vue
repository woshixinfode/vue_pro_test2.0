<template>
    <div id="firstcomponent">
        <h1>title</h1>
        <a> written by {{ author }}</a>
        <a> written by {{ ok11 }}</a>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        data(){
        return {
            author:"这里是横须贺市",
            ok11:"山口百惠"
        }
    }
    }
</script>

<style>

</style>