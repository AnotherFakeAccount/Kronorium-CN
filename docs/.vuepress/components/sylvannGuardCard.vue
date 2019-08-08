<template lang="pug">
    card(header="")
        p.title.has-text-white
            | {{title}}
            span
                slot
        b-field
            b-select(placeholder="数字")
                option(v-for="option in this.options")
                    | {{ option }}
</template>

<script>
    export default {
        name: "sylvannGuardCard",
        props:['title'],
        data() {
            return {
                options:[
                    '- 未选择 -',
                    '1404',
                    '1912',
                    '2340',
                    '4250',
                ]
            }
        },
    }
</script>

<style scoped>

</style>