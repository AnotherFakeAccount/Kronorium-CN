<template lang="pug">
    span
        a(@click="isImageModalActive=true") {{title}}
        b-modal(:active.sync="isImageModalActive")
            slot
</template>

<script>
    export default {
        name: "imageLink",
        props: ['title'],
        data() {
            return {
                isImageModalActive: false,
            }
        },
    }
</script>

<style scoped>

</style>