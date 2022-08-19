<template>
<!-- route에 있는 모든 정보들을 사용할 수 있는 변수 -->
  {{ $route.params.id }}
  <div>
    <h4>상세페이지</h4>
    <h5>{{BlogList[0].title}}</h5>
    <p>{{BlogList[0].content}}</p>
    <p>{{BlogList[0].date}}</p>
  </div>
</template>

<script>

export default {
  props: {
    BlogList: Array
  }
}
</script>

<style>

</style>