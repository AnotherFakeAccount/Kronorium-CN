<template lang="pug">
    .card
        header.card-header(v-if="header")
            p.card-header-title
                slot(name="header")
        .card-image(v-if="image")
            figure.image
                slot(name="image")
        .card-content
            .content
                slot
        footer.card-footer(v-if="footer")
            slot(name="footer")
</template>

<script>
    export default {
        name: "card",
        props:{
            'header':Boolean,
            'footer':Boolean,
            'image':Boolean
        },
    }
</script>

<style scoped>
    .card-image{
        padding: 16px;
    }
</style>