<template>
    <div>
        <!-- <h4>child : {{$store.state.counter}}</h4> -->
        <h4>child : {{childCounter}}</h4> <!-- getters 사용 -->
        <button @click="addCounter">+</button>
        <button @click="subCounter">-</button>
        <button @click="tenPlusCounter">10</button>
        <button @click="asyncIncrement({ by: 50, duration: 500 })">Increment</button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapMutations, mapActions } from 'vuex';
export default {
    name:'ChildCop',

    // mapGetters
    computed: mapGetters({
        childCounter: 'getCounter'
    })
    ,
    methods:{

        ...mapMutations({
            addCounter: 'addCounter',
            subCounter: 'subCounter',
            tenPlusCounter() {
                this.$store.commit('tenPlusCounter', 10);
            },
        }),

        ...mapActions({
            asyncIncrement: 'asyncIncrement',
        })
    }
    
}
</script>
<style scoped>

</style>
