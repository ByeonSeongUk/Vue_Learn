<template>
  <!-- 이벤트 배너 -->
  <div class="discount">
    <h4>지금 구매하면 {{sale}}% 할인!</h4>
  </div>
</template>

<script>
// 다른곳에서 사용할 컴포넌트 이름
export default {
    name: 'Discount',
    props: {
      sale: Number,
    }
}

</script>

<style>

</style>