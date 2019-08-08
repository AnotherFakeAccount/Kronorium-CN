<template lang="pug">
    - const num=[1,2,3,4,5,6,7,8,9]
    div
        .columns.is-multiline.is-mobile
            for n in num
                .column.is-half-touch.is-half-tablet.is-one-third-desktop
                    slot(name=`${'column'+n}`)
</template>

<script>
    export default {
        name: "nineColumnLayout"
    }
</script>

<style scoped>

</style>