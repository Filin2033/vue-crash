<template>
  <div class="app">
    <div class="zaglav">
      <router-link to="/" class="router-link-style">ГЛАВНАЯ</router-link>
      <router-link to="/todo" class="router-link-style">TODO LIST</router-link>
      <router-link to="/calendar" class="router-link-style">КАЛЕНДАРЬ</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.router-link-style {
    text-decoration: none;
    padding: 10px 15px;
    background: none;
    color: rgb(0, 0, 0);
    border: 1px solid teal;
    border-radius: 14px;
    cursor: pointer;
  }

.router-link-style:hover {
  background-color: #eee;
}
.zaglav {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
}

</style>