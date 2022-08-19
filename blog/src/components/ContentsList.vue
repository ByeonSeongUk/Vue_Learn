<template>
  <div>
    <h5>{{ BlogList[0].title }}</h5>
    <p>{{BlogList[0].content}}</p>
    <p>{{BlogList[0].date}}</p>
  </div>
  <div>
    <h5>{{ BlogList[1].title }}</h5>
    <p>{{BlogList[1].content}}</p>
    <p>{{BlogList[1].date}}</p>
  </div>
  <div>
    <h5>{{ BlogList[2].title }}</h5>
    <p>{{BlogList[2].content}}</p>
    <p>{{BlogList[2].date}}</p>
  </div>

</template>

<script>
export default {
  name : 'ContentsList',
  props : {
    BlogList: Array,
  }

}
</script>

<style>

</style>