<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>  <!-- 하위 컴포넌트에서 이벤트 전달 받기 -->
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList> <!--  데이터 하위 컴포넌트로 내려주기 -->
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  data() {
    return {
      todoItems: []
    }
  },

  created() {
      if(localStorage.length > 0) {
          for(var i = 0; i < localStorage.length; i++) {
              this.todoItems.push(localStorage.key(i));
          }
      }
  },

  methods: {
    addTodo(todoItem){
      // chrome 개발자 도구 -> App... -> Local Storage에 저장하는 함수
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },

    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      // splice : 배열의 특정 인덱스에서 부여한 숫자만큼의 인덱스를 삭제(자주 사용)
      this.todoItems.splice(index, 1);
    }
  },

  components: {

    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
    text-align: center;
    background-color: #f6f6f8;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
