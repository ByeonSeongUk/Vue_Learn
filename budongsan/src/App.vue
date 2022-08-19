<template>

  <!-- 모달 창 -->
  <transition name = "fade">
    <Modal @closeModal = "modal = false;" :oneroom="oneroom" :modal="modal" :clickNumber="clickNumber"></Modal>
  </transition>

  <!-- 상단 메뉴 -->
  <div class="menu">
    <!-- 일반적으로 사용하는 반복문 -->
    <a v-for="(a, i) in navMenu" :key="i">{{a}}</a>
  </div>

  <!-- 컴포넌트 배너 -->
  <Discount v-if="showDiscount == true" :sale="sale"/>

  <!-- 가격순 상품 정렬 -->
  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>

  <!-- 상품 리스트 -->
  <Card @openModal= "modal = true; clickNumber = $event" :oneroom="oneroom[i]" v-for="(roomList, i) in oneroom" :key="i"/>
  <!-- 이벤트 버블링 : 클릭이벤트가 위로 퍼진다. 아래 컴포넌트를 누르면 상위 컴포넌트를 다 누른 현상이 일어난다. 즉 하위 컴포넌트에서 모든걸 클릭해도 함수가 실행된다. -->

</template>

<script>

import oneroom from './assets/oneroom.js';
import Discount from './components/Discount.vue'
import Modal from './components/Modal.vue'
import Card from './components/Card.vue'


export default {
  name: 'App',
  // 데이터바인딩을 위한 데이터 보관함 | 데이터는 Object 자료로 저장 {자료이름 : 자료내용}
  data(){
    // 리액트에서는 이 데이터 저장공간을 state라고 부른다. 즉 UI의 상태를 저장하는 공간
    return {
      testObecjt : {name : 'kim', age: 123}, // Object 보내기 테스트
      oneroom : [...oneroom], // [...data] 원본이 아닌 사본을 만들어서 저장하는 문법
      price : [60, 70, 80], // 가격
      logo : '원룸샵',
      style : 'color: blue',
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      navMenu : ['Home', 'Shop', 'About'],
      report : [0, 0, 0],   // 신고수
      modal : false, // 모달창 false : 닫힘, true : 열림
      clickNumber : 0, // 게시물을 누른 번호
      oneroomOriginal : oneroom, // 원룸 데이터 원본
      showDiscount : true, // 배너의 현재 상태
      sale: 30, // 세일 퍼센테이지
    }
  },

  methods : {
    // 신고
    increase() {
      this.report += 1;
    },
    
    // 상품 정렬 버튼
    priceSort() {
      this.oneroom.sort(function(a, b){
        return a.price - b.price
      });
    },

    // 정렬 되돌리기
    sortBack() {
      // array 자료는 대입연산자를 쓸시 값을 변경하는 것이 아닌 두 개의 값을 공유해달라는 뜻! 주의!
      // 그래서 그냥 넣으면 안되고 사본을 만들어서 계속 넣어줘야 함.
      this.oneroom = [...this.oneroomOriginal]; 

    }

  },

  // 라이프 사이클 훅
  mounted(){ // mount 되고 난 후
    
    // 타이머 함수
    // 일정 시간이 지난 후 함수 실행
    // setTimeout(() => { // 바깥에 있는 this. 를 잘 가져다 쓸 수 있다. this 쓸일 있으면 화살표 함수를 써야한다!
    //   this.showDiscount = false;
    // }, 2000);

    // 일정 시간 간격을 두고 함수 실행
    setInterval(() => {
        this.sale--;

        if(this.sale == 0) {
          alert('할인 종료!');
          return
        }
    }, 1000);

  },

  components: {
    Discount : Discount,
    Modal: Modal,
    Card: Card,
  }
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position:fixed;
  padding: 20px;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

/* Modal 애니메이션 */
.start {
  opacity: 0;
  transition: all 1s; /* 클래스에 있는 모든 속성이 변할때 1초에 걸쳐 부드럽게 변경해달라 */
}
.end {
  opacity: 1;
}

/***  transition 태그 사용 방법 ***/

/** 등장 애니메이션 */
/* 시작 */
.fade-enter-from{
  transform: translateY(-1000px); /* Y축으로 -1000px 이동(-1000px 부터 시작) */
}

/* 동작 방법 */
.fade-enter-active{
  transition: all 1s;
}

/* 끝 */
.fade-enter-to{
  transform: translateY(0px); /* 시작 애니메이션 종료시 0px로 원상복구 */
} 

/** 퇴장 애니메이션 **/
/* 시작 */
.fade-leave-from{
  opacity: 1;
}

/* 동작 방법 */
.fade-leave-active{
  transition: all 1s;
}

/* 끝 */
.fade-leave-to{
  opacity: 0;
}

</style>
