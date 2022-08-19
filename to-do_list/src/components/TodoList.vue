// 할 일 목록 표시 및 특정 할 일 삭제
<template>
    <section>
        <!-- 애니메이션을 추가할때 사용하는 코드 -->
        <transition-group name="list" tag="ul">
            <!-- Storage 안에 있는 개수만큼 반복 출력 -->
            <li v-for="(todoItem, index) in propsdata" :key="index" class="shadow">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem }}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>


<script>
export default {
    props: ['propsdata'], // 데이터 상위 컴포넌트에서 내려 받기

    methods: {
        removeTodo(todoItem, index) {
            // $emit('이벤트 이름', 인자1, 인자2, ...);
            this.$emit('removeTodo', todoItem, index);
        }
    }
}
</script>


<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }

    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }

    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }

    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }

    /* 아래 css 클래스들은 데이터가 들어오고 나가는 동작을 정의하는 CSS */
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }

    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>