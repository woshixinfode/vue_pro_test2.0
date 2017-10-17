<template>
<div>
    <form action="">
        姓名：
        <input type="text" v-model="data.name" placeholder=""/>
        <br/>
        性别：
        <input type="radio" id="man" value="man" v-model="data.gender"/>
        <label for="man">man</label>
        <input type="radio" id="woman" value="woman" v-model="data.gender"/>
        <label for="woman">woman</label>
        <br/>
        兴趣:
        <input type="checkbox" id="book" value="book" v-model="data.interest"/>
        <label for="book">reading</label>
        <input type="checkbox" id="sport" value="sport" v-model="data.interest"/>
        <label for="sport">sport</label>
        <input type="checkbox" id="game" value="game" v-model="data.interest"/>
        <label for="game">game</label>
        <br/>
        身份：
        <select v-model="data.identity" name="" id="">
            <option value="teacher" selected>teacher</option>
            <option value="doctor">doctor</option>
            <option value="other">other</option>
        </select>
    </form>
    <input type="text" v-model="msg" lazy/>
    {{ msg }}
</div>
</template>

<script type="text/ecmascript-6">
    export default{
        data (){
       return {
           msg:'okkkkkkkkkk',
           data: {
               name: '',
               gender: '',
               interest: [],
               identity: ''
           }
       }
    }

    }
</script>

<style>

</style>