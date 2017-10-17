<template>
    <div id="secondcomponent">
        <h1>I am another page</h1>
        <a> written by {{ author }} </a>
        <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
        <ul>
            <li><h1>{{art_title}}</h1></li>
            <li v-for="article in articles">
                {{article.title}}
            </li>
        </ul>

        <p>{{ message | capitalize}}</p>
        <button @click="reverseMessage">逆转消息</button>
        <p>{{ reversedMessage | capitalize}}</p>
        <p>{{ now | formatTime}}</p>
    </div>

</template>

<script type="text/ecmascript-6">
    import formatTime from '../js/DateFormat.js'
    export default {
        data() {
        return {
            author: "微信公众号 jinkey-love",
            message: 'hello Vue.js!',
            art_title:{},
            articles: [],
        }
    },
    mounted: function() {
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
            headers: {

            },
            emulateJSON: true
        }).then(function(response) {
            // 这里是处理正确的回调
            console.log(response.data)
            this.art_title =  response.data.title
            this.articles = response.data.subjects
            // this.articles = response.data["subjects"] 也可以

        }, function(response) {
            // 这里是处理错误的回调
            console.log(response)
        });
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.charAt(1).toUpperCase() + value.slice(2)
        }
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        },
        now:function(){
            return Date()
        },
    }
    }

</script>

<style>
    #secondcomponent ul li{}
</style>

