<template lang="pug">
    four-column-layout
        template(#column1)
            sylvann-guard-card(title="")
        template(#column2)
            sylvann-guard-card
        template(#column3)
            sylvann-guard-card
        template(#column4)
            sylvann-guard-card
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