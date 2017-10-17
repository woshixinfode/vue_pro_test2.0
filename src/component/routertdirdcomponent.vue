<template>
    <div id="routertdirdcomponent">
        <!--<h1>I am another page</h1>-->
        <a> written by {{ author }} </a>
        <p>这是刘志强制作的页面</p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                author: "liuzhiqiang",
                articles: [],
            }
        }
    }

</script>

<style>
</style>