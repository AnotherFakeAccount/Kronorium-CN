<template lang="pug">
    - const num=[1,2,3,4]
    .columns.is-multiline.is-mobile
        for n in num
            .column.is-half-touch.is-half-table.is-one-quarter-desktop
                slot(name=`${'column'+n}`)
</template>

<script>
    export default {
        name: "fourColumnLayout"
    }
</script>

<style scoped>

</style>