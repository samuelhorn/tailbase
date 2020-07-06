<template>
  <div class="flex flex-col lg:mx-one mb-one lg:mb-auto w-full">
    <label class="font-semibold mb-one text-gray-600 uppercase tracking-widest text-xs" :for="controls">
      {{ title }}
    </label>
    <div class="flex items-center">
      <slot/>
      <span v-if="suffix" class="text-sm py-quarter font-semibold text-gray-600 ml-quarter">{{ suffix }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    controls: {
      type: String,
      required: true
    },
    suffix: {
      type: String,
      default: ''
    }
  }
}
</script>