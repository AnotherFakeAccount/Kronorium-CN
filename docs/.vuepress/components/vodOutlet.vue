<template lang="pug">
    four-column-layout
        template(#column1)
            outlet-card.has-background-success(title="酸")
        template(#column2)
            outlet-card.has-background-info(title="水")
        template(#column3)
            outlet-card.has-background-warning(title="电")
        template(#column4)
            outlet-card.has-background-danger(title="火")
</template>

<script>
    import FourColumnLayout from "./fourColumnLayout";
    import OutletCard from "./outletCard";
    export default {
        name: "vodOutlet",
        components: {OutletCard, FourColumnLayout}
    }
</script>

<style scoped>

</style>