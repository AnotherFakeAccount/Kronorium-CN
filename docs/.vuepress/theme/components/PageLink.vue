<template lang="pug">
    router-link(:to='link', v-if='!isExternal(link)', :exact='exact')
        slot
</template>

<script>
    import {ensureExt,isExternal} from "../util";
    export default {
        name: "PageLink",
        props:['actionLink'],
        computed:{
            link () {
                return ensureExt(this.actionLink)
            },
            exact () {
                if (this.$site.locales) {
                    return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
                }
                return this.link === '/'
            }
        },
        methods:{
            isExternal,
            ensureExt
        }
    }
</script>

<style scoped>

</style>