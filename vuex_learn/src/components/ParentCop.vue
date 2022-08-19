<template>
    <div>
        <!-- <h4>parent : {{$store.state.counter}}</h4> -->
        <h4>parent : {{parentCounter}}</h4> <!--  -->
        <button @click="addCounter">+</button>
        <button @click="subCounter">-</button>
        <ChildCop></ChildCop>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import ChildCop from './ChildCop.vue';
export default {
    name: "ParentCop",
    
    components: { ChildCop },

    // mapGetters
    computed: mapGetters({
        parentCounter: 'getCounter'
    }),
    
    methods:{
        ...mapMutations({
            addCounter: 'addCounter',
            subCounter: 'subCounter'
        })
    }
}
</script>
<style scoped>

</style>
