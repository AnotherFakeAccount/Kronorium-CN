<template>
    <four-column-layout>
        <template #column1>
            <sylvann-guard-card title=""></sylvann-guard-card>
        </template>
        <template #column2>
            <sylvann-guard-card></sylvann-guard-card>
        </template>
        <template #column3>
            <sylvann-guard-card></sylvann-guard-card>
        </template>
        <template #column4>
            <sylvann-guard-card></sylvann-guard-card>
        </template>
    </four-column-layout>
</template>

<script>
    import FourColumnLayout from "./fourColumnLayout";
    import SylvannGuardCard from "./sylvannGuardCard";
    export default {
        name: "vodSylvannGuard",
        components: {SylvannGuardCard, FourColumnLayout}
    }
</script>

<style scoped>

</style>