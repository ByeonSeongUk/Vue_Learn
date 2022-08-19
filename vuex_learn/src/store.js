import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({

    // state: 컴포넌트 간에 공유할 data 속성
    state: {
        counter: 0
    },
    getters: {
        getCounter: function (state) {
            return state.counter;
        },
        parentCounter() {
            return this.$store.getters.getCounter;
        },
        childCounter() {
            return this.$store.getters.getCounter;
        },
        
    },
    mutations: {
        addCounter: function (state) {
            return state.counter++;
        },
        subCounter: function (state) {
            return state.counter--;
        },
        tenPlusCounter: function (state, payload) {
            console.log("sc : ", state.counter);
            console.log("pv : ", payload);
            state.counter += payload;
        },

    },
    actions: {
        // HTTP GET ex
        // getServerData: function (context) {
        //     return axios.get("sample.josn").then(function(){
        //         // ...
        //     });
        // },
        
        // payload 는 일반적으로 사용하는 인자 명
        asyncIncrement: (context, payload) => {
            return setTimeout(function () {
                // mutations 에 있는 것을 호출한다.
                context.commit('addCounter', payload.by);
            }, payload.duration);
        }
    }
    

});