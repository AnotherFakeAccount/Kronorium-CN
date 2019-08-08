<template lang="pug">
    four-column-layout
        template(#column1)
            clock-card.has-background-danger(title="火元素")
                img(src="./image/fire.svg")
        template(#column2)
            clock-card.has-background-info(title="水元素")
                img(src="./image/water.svg")
        template(#column3)
            clock-card.has-background-link(title="气元素")
                img(src="./image/air.svg")
        template(#column4)
            clock-card.has-background-success(title="土元素")
                img(src="./image/earth.svg")
</template>

<script>
    import FourColumnLayout from "./fourColumnLayout";
    export default {
        name: "vodClock",
        components: {FourColumnLayout},
    }
</script>

<style scoped>

</style>