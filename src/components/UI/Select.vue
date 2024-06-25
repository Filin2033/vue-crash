<template>
  <select class="mySelect"
    :value="modelValue" 
    @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
.mySelect {
  padding: 10px 15px;
  background: none;
  color: rgb(0, 0, 0);
  border: 1px solid teal;
  border-radius: 14px;
  cursor: pointer;
}
.mySelect:hover {
  background-color: #eee;
}
</style>
