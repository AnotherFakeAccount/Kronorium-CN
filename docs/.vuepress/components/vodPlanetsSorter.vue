<template lang="pug">
    div
        section
            b-button(type="is-success" @click="clear") 重置
        div {{sort}}
        nine-column-layout
            template(#column2)
                plant-card(@name="handle" title="水星")
            template(#column3)
                plant-card(@name="handle" title="金星")
            template(#column4)
                plant-card(@name="handle" title="月球")
            template(#column5)
                plant-card(@name="handle" title="火星")
            template(#column6="")
                plant-card(@name="handle" title="木星")
            template(#column7)
                plant-card(@name="handle" title="土星")
            template(#column8)
                plant-card(@name="handle" title="海王星")
            template(#column1)
                plant-card(@name="handle" title="天王星")
            template(#column9)
                plant-card(@name="handle" title="太阳" disabled)
</template>

<script>
    import NineColumnLayout from "./nineColumnLayout";
    import PlantCard from "./planetCard";
    export default {
        name: "vodPlanetsSorter",
        components: {PlantCard, NineColumnLayout},
        data() {
            return {
                sort:['太阳'],
            }
        },
        methods:{
            handle:function (event) {
                if (!this.sort.includes(event))
                    this.sort.unshift(event);
            },
            clear:function () {
                this.sort=['太阳']
            }
        }
    }
</script>

<style scoped>

</style>