<template>
  <div id="#app">

    <!-- 부트스트랩 네비 -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">William</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Codding</a>
            <a class="nav-link" href="#">Programming</a>
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">ETC</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- 부트스트랩 네비 종료 -->
    <router-link to="/">메인페이지</router-link><br/>
    <router-link to="/ContentsList">리스트페이지</router-link><br/>
    <router-link to="/Detail">상세페이지</router-link>

    <div class="mt-4">
      <router-view :BlogList="BlogList"></router-view>
    </div>
    
  </div>
</template>

<script>
import HomePage from "@/components/HomePage";
import BlogList from "./assets/blog" // 목 데이터

export default {

  name: 'App',
  data() {
    return {
      HomePage,
      BlogList
    }
  },
  components: {
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
}
</style>
