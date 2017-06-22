<template>
    <div id="app" @click="update">
        gvfkljlkdfjblk
        <image :src="logoUrl" class="logo"></image>
        <text class="title">Hello {{target}}</text>
        <text class="weex">Hello Weex !</text>
        <text class="vue">Hello Vue !</text>

    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                logoUrl: 'src/assets/image/logohome.png',
                target: 'World'
            }
        },
        methods: {
            update: function (e) {
                this.target = 'Weex'
                console.log('target:', this.target)
            }
        }
    }
</script>
<style >
    #app {
    }
</style>

