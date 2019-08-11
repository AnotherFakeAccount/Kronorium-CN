<template>
    <SWUpdatePopup #default="{ enabled, reload, message, buttonText }">
        <div class="modal">
            <div class="modal-content">
                <div>{{message}}</div>
                <b-button @click="reload">{{buttonText}}</b-button>
            </div>
        </div>
    </SWUpdatePopup>
</template>

<script>
    import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

    export default {
        name: "MySWUpdatePopup"
    }
</script>

<style scoped>

</style>