<template>
  <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
        <img :src="oneroom[clickNumber].image" style="width: 100%"/>
        <h4>{{oneroom[clickNumber].title}}</h4>
        <p>{{oneroom[clickNumber].content}}</p>

        <!-- input 으로 데이터 받기 방법 1 -->
        <!-- <input @input="month = $event.target.value"> -->

        <!-- input 으로 데이터 받기 방법 2 -->
        <input v-model.number="month">

        <!-- 사용자에게 값을 받는 다른 방법 3
        <textarea v-model="month"></textarea>
        <select v-model="month">
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        -->

        <!-- 입력한 숫자를 제한해주기 -->
        <input type="range" min="1" max="12"/>
        

        <p>{{ month }}개월 선택함 : {{oneroom[clickNumber].price * month}} 원</p>

        <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Modal',
    // 부모 컴포넌트에서 데이터 받아오기
    data() {
        return {
            month: 1,
        }
    },
    // input을 감시하는 함수
    watch: {
        // month 라는 데이터가 변할 때마다 함수가 실행된다.
        month(e) {

            if(e >= 13) {
                alert('최대 개월 수는 12개월 입니다!');
                this.month = 1;
                
            }
            else if(isNaN(e)){
                alert('숫자만 입력해주세요!');
                this.month = 1;
            }
        }
    },
      
    beforeUpdate() {

        if(this.month == 2) {
            alert('2개월 이하는 계약 불가');
            this.month = 1;
        }
    },

    props: {
        oneroom: Object,
        modal: Boolean,
        clickNumber: Number
    }
}
</script>

<style>

</style>

