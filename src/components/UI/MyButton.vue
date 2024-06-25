<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: rgb(0, 0, 0);
  border: 1px solid teal;
  border-radius: 14px;
  cursor: pointer;
}
.btn:hover {
  background-color: #eee;
}
</style>
