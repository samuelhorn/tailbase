<template>
  <span>
    <label>Fine tune leading:</label>
    <button @click="$emit('clicked', '-', size)">-</button>
    {{ height * 16 }}px ({{ height }}rem)
    <button @click="$emit('clicked', '+', size)">+</button>
  </span>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  }
}
</script>