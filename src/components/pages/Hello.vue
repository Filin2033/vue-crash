<template>
  <div class="hello">
    <h1>Привет, {{ username }}!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'Пользователь' // Замени на динамическое получение имени.
    }
  }
}
</script>

<style scoped>
.hello {
  padding: 20px;
}
</style>