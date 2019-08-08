<template lang="pug">
    span
        a(@click="isVideoModalActive = true") {{title}}
        b-modal(:active.sync="isVideoModalActive")
            video(controls="")
                slot
</template>

<script>
    export default {
        name: "videoLink",
        props: ['title'],
        data() {
            return {
                isVideoModalActive: false,
            }
        },
    }
</script>

<style scoped>

</style>