<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름 "></app-header> -->
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewStr">
    </app-header>
  </div>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- 컴포넌트 명명법 종류
    <hello-world>kebab-case</hello-world>
    vscode의 파일 바로가기 이용하거나 vue.js의 기능을 사용하려면 케밥으로
    <HelloWorld>PascalCase</HelloWorld>
    <HelloWorld/> -->
  <!-- </div> -->
</template>

<script>
  import AppHeader from './components/AppHeader.vue';

  export default {
    data: function() {
      return {
        str: 'Header'
      }
    },
    components: {
      'app-header': AppHeader
    },
    methods: {
      renewStr: function() {
        this.str = 'hi';
      }
    }
  }
// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   //인스턴스 옵션 속성 or 컴포넌트 옵션 속성
//   name: 'App',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
