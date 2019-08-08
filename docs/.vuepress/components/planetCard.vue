<template lang="pug">
    card.has-text-white.has-background-grey(header)
        template(#header)
            span.has-text-white.has-text-centered {{name}}
        .is-size-7-touch.field
            b-switch 符号已找到
        .is-size-7-touch.field
            b-switch 精华已拾取
        section
            b-button(:disabled="disabled" @click="send") 亮起
</template>

<script>
    export default {
        name: "plantCard",
        props:{
            'title':String,
            disabled:Boolean
        },
        methods:{
            send(){
                this.$emit('name',this.name)
            }
        },
        computed:{
            name:function(){
                return this.title
            }
        }
    }
</script>

<style scoped>

</style>