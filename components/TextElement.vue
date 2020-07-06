<template>
  <div :style="'margin-bottom:'+grid*2 / 16+'rem;'">
    <div class="flex justify-between" :style="'line-height:'+grid / 16+'rem; margin-bottom:'+grid / 16+'rem;'">
      <label><span class="font-semibold">{{ title }}:</span> {{ data[0] }}rem (~{{ Math.round(data[0] * 16) }}px)</label>
      <span class="relative" style="padding-right: 60px;">
        <label class="font-semibold">Fine tune leading:</label>
        {{ data[1] }}rem ({{ data[1] * 16 }}px)
        <button class="bg-brand-light focus:outline-none focus:bg-brand-dark text-white font-bold text-xl overflow-hidden absolute right-0 rounded-sm" style="top: 50%; margin-top: -12px; width: 24px; height: 24px; margin-right: 26px" @click="$emit('clicked', '-', size)">-</button>
        <button class="bg-brand-light focus:outline-none focus:bg-brand-dark text-white font-bold text-xl overflow-hidden absolute right-0 rounded-sm" style="top: 50%; margin-top: -12px; width: 24px; height: 24px;" @click="$emit('clicked', '+', size)">+</button>
      </span>
    </div>
    <div :style="'background: rgba(0,0,0, .05); font-size:'+data[0]+'rem;line-height:'+data[1]+ 'rem;'">This is just some dummy text to show you how font-size and line-height looks together with the specified settings above</div>
  </div>
</template>

<script>
export default {
  props: {
    grid: {
      type: Number,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>