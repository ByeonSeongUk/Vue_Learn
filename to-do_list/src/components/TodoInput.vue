// 할 일 입력 및 추가
<template>
    <div class="inputBox shadow">
        <!-- input에 입력되는 값을 newTodoItem이란 값에 담는다. -->
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i> 
        </span>

        <!-- modal 창 -->
        <modal :show="showModal" @close="showModal = false">
            <h3 slot="header">경고!</h3>
            <span slot="footer" @click="showModal = false">
                할일을 입력하세요!
                <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
            </span>
        </modal>
        
    </div>
</template>


<script>
import Modal from './common/Modal';

export default {
    props: ['propsdata'],
    data() {
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods: {
        // 디자인 패턴 : SRP(단일 책임 원칙: 함수가 하나의 기능만 담당)
        addTodo() {
            if(this.newTodoItem !== "") {
                var value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo', value); // 상위 컴포넌트에 이벤트를 'addTodo' 라는 이름으로 value 값을 담아 올려보냄
                this.clearInput();
            }
            else {
                this.showModal = !this.showModal;
            }

        },
        clearInput() {
            this.newTodoItem = '';
        }
    },

    components: {
        Modal: Modal
    }
}
</script>

// Vue-loder 가 제공하는 scpoed 방법
// 특정 컴포넌트에만 스타일을 적용 한다.
<style scoped>
    input:focus{
        /* input box 선 */
        outline: none;
    }

    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }

    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }

    .addContainer{
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }

    .addBtn {
        color: white;
        /* 수직 정렬 */
        vertical-align: middle;
    }
</style>