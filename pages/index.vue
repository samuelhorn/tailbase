<template>
  <div class="container">
    <header class="flex items-center justify-center mt-three">
      <svg class="w-three h-three lg:w-five lg:h-five mr-one" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="136" width="140" height="4" fill="#E4E4E4"/>
        <rect width="140" height="4" fill="#E4E4E4"/>
        <rect y="68" width="140" height="4" fill="#E4E4E4"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V30H40V95C40 119.853 60.1472 140 85 140C109.853 140 130 119.853 130 95C130 70.1472 109.853 50 85 50C79.7405 50 74.6917 50.9023 70 52.5606V0H0ZM85 110C76.7157 110 70 103.284 70 95C70 86.7157 76.7157 80 85 80C93.2843 80 100 86.7157 100 95C100 103.284 93.2843 110 85 110Z" fill="#0ED7B5"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M70 52.5606V95C70 86.7157 76.7157 80 85 80C93.2843 80 100 86.7157 100 95V52.5606C95.3083 50.9023 90.2595 50 85 50C79.7405 50 74.6917 50.9023 70 52.5606Z" fill="url(#paint0_linear)"/>
        <defs>
          <linearGradient id="paint0_linear" x1="70" y1="65.5" x2="100" y2="65.5" gradientUnits="userSpaceOnUse">
            <stop stop-opacity="0.2"/>
            <stop offset="1" stop-color="#C4C4C4" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      <h1 class="text-4xl lg:text-5xl leading-none font-medium">Tailbase</h1>
    </header>
    <p class="mx-auto text-4xl lg:text-5xl max-w-4xl leading-tight text-center mt-six mb-six font-bold">Tailwind config generator for a typygraphic scale with vertical rythm</p>
    <div class="flex flex-col lg:flex-row p-two rounded-md mb-two bg-gray-900 text-white justify-center items-start">
      <div class="flex flex-col mr-two">
        <label class="font-semibold mb-one text-gray-600 uppercase tracking-widest text-xs" for="baseSize">Base font-size</label>
        <div class="flex items-center">
          <input type="range" min="10" max="24" step="1" v-model.number="baseSize" @change="updateFontSize">
          <input class="rounded-sm bg-gray-800 ml-one text-sm py-quarter px-half font-semibold w-three" type="number" min="10" max="24" step="1" v-model.number="baseSize" id="baseSize" @change="updateFontSize">
          <span class="text-sm py-quarter font-semibold text-gray-600 ml-quarter">px</span>
        </div>
      </div>
      <div class="flex flex-col mr-two">
        <label class="font-semibold mb-one text-gray-600 uppercase tracking-widest text-xs" for="fontScale">Font scaling</label>
        <div class="flex items-center">
          <input type="range" min="1.1" max="1.8" step="0.001" v-model.number="fontScale" @change="updateFontSize">
          <input class="rounded-sm bg-gray-800 ml-one text-sm py-quarter px-half font-semibold w-five" type="number" min="1.1" max="1.8" step="0.05" v-model.number="fontScale" id="fontScale" @change="updateFontSize">
        </div>
      </div>
      <div class="flex flex-col">
        <label class="font-semibold mb-one text-gray-600 uppercase tracking-widest text-xs" for="baseGrid">Grid size</label>
        <div class="flex items-center">
          <input type="range" min="4" max="32" step="1" v-model.number="baseGrid" @change="updateFontSize() + updateSpacing()">
          <input class="rounded-sm bg-gray-800 ml-one text-sm py-quarter px-half font-semibold w-three" type="number" min="4" max="24" step="1" v-model.number="baseGrid" id="baseGrid" @change="updateFontSize() + updateSpacing()">
          <span class="text-sm py-quarter font-semibold text-gray-600 ml-quarter">px</span>
        </div>
      </div>
    </div>
    <div class="flex justify-center mb-two">
      <button class="font-semibold bg-blue-500 text-white px-two py-one rounded-full">Get the config</button>
    </div>
    <div class="border rounded-md px-two" :style="'padding-top: '+(baseGrid*2) / 16+'rem; padding-bottom: '+(baseGrid*2) / 16+'rem; background: linear-gradient(180deg, white 0rem, white '+((baseGrid / 16) - .0625)+'rem, #e2e8f0 '+((baseGrid / 16) - .0625)+'rem, #e2e8f0 '+baseGrid / 16+'rem, white '+baseGrid / 16+'rem); background-size: '+baseGrid / 16+'rem '+baseGrid / 16+'rem; background-repeat: repeat;'">
      <TextElement v-for="size in Object.keys(config.fontSize)" :key="size" :title="'text-'+size" :grid="baseGrid" :data="config.fontSize[size]" @clicked="lineHeightSwitch" :size="size" />
    </div>
    <pre class="bg-gray-900 text-white p-two mt-four rounded-md"><code>fontSize: {{outputFontConfig}},<br>spacing: {{outputSpacingConfig}}</code></pre>
    <footer class="text-center py-four text-gray-500">
      Made by <a class="text-gray-600 underline" href="https://samuelhorn.com" aria-label="Go to samuelhorn.com">samuelhorn.com</a>
    </footer>
  </div>
</template>

<script>
import TextElement from '~/components/TextElement'

export default {
  components: {
    TextElement
  },
  data() {
    return {
      fontScale: 1.25,
      baseGrid: 16,
      baseSize: 16,
      config: {
        fontSize: {
          '4xl': [0, 0],
          '3xl': [0, 0],
          '2xl': [0, 0],
          'xl': [0, 0],
          'lg': [0, 0],
          'md': [0, 0],
          'base': [0, 0],
          'sm': [0, 0],
          'xs': [0, 0]
        },
        spacing: {
          'quarter': 0,
          'half': 0,
          'one': 0,
          'two': 0,
          'three': 0,
          'four': 0,
          'five': 0,
          'six': 0,
          'eight': 0,
          'twelve': 0,
          'sixteen': 0
        }
      }
    }
  },
  computed: {
    outputFontConfig() {
      let fontSize = {}
      const keys = Object.keys(this.config.fontSize)

      keys.forEach(element => {
        Object.assign(fontSize, {[element]: [this.config.fontSize[element][0]+'rem', this.config.fontSize[element][1]+'rem' ]})
      })

      return fontSize
    },
    outputSpacingConfig() {
      let spacing = {}
      const keys = Object.keys(this.config.spacing)

      keys.forEach(element => {
        Object.assign(spacing, {[element]: this.config.spacing[element]+'rem'})
      })

      return spacing
    }
  },
  methods: {
    lineHeightSwitch(value, size) {
      if (value === '+') {
        this.config.fontSize[size].splice(1, 1, this.config.fontSize[size][1] + this.baseGrid / 16)
      } else if (value === '-') {
        this.config.fontSize[size].splice(1, 1, this.config.fontSize[size][1] - this.baseGrid / 16)
      } 
    },
    updateSpacing() {
      const baseGridRem = this.baseGrid / 16

      this.config.spacing['quarter'] = baseGridRem / 4
      this.config.spacing['half'] = baseGridRem / 2
      this.config.spacing['one'] = baseGridRem
      this.config.spacing['two'] = baseGridRem * 2
      this.config.spacing['three'] = baseGridRem * 3
      this.config.spacing['four'] = baseGridRem * 4
      this.config.spacing['five'] = baseGridRem * 5
      this.config.spacing['six'] = baseGridRem * 6
      this.config.spacing['eight'] = baseGridRem * 8
      this.config.spacing['twelve'] = baseGridRem * 12
      this.config.spacing['sixteen'] = baseGridRem * 16
    },
    roundNumber(num) {
      return Math.round((num + Number.EPSILON) * 1000) / 1000
    },
    updateFontSize() {
      let tempVal = null
      let baseSize = this.baseSize / 16

      tempVal = this.roundNumber(baseSize / this.fontScale / this.fontScale)
      this.config.fontSize['xs'].splice(0, 1, tempVal)
      this.config.fontSize['xs'].splice(1, 1, this.setLineHeight(tempVal))

      tempVal = this.roundNumber(baseSize / this.fontScale)
      this.config.fontSize['sm'].splice(0, 1, tempVal)
      this.config.fontSize['sm'].splice(1, 1, this.setLineHeight(tempVal))

      tempVal = this.roundNumber(baseSize)
      this.config.fontSize['base'].splice(0, 1, tempVal)
      this.config.fontSize['base'].splice(1, 1, this.setLineHeight(tempVal))

      tempVal = this.roundNumber(baseSize * this.fontScale)
      this.config.fontSize['md'].splice(0, 1, tempVal)
      this.config.fontSize['md'].splice(1, 1, this.setLineHeight(tempVal))

      tempVal = this.roundNumber(baseSize * this.fontScale * this.fontScale)
      this.config.fontSize['lg'].splice(0, 1, tempVal)
      this.config.fontSize['lg'].splice(1, 1, this.setLineHeight(tempVal))

      tempVal = this.roundNumber(baseSize * this.fontScale * this.fontScale * this.fontScale)
      this.config.fontSize['xl'].splice(0, 1, tempVal)
      this.config.fontSize['xl'].splice(1, 1, this.setLineHeight(tempVal))

      tempVal = this.roundNumber(baseSize * this.fontScale * this.fontScale * this.fontScale * this.fontScale)
      this.config.fontSize['2xl'].splice(0, 1, tempVal)
      this.config.fontSize['2xl'].splice(1, 1, this.setLineHeight(tempVal))

      tempVal = this.roundNumber(baseSize * this.fontScale * this.fontScale * this.fontScale *this.fontScale *this.fontScale)
      this.config.fontSize['3xl'].splice(0, 1, tempVal)
      this.config.fontSize['3xl'].splice(1, 1, this.setLineHeight(tempVal))

      tempVal = this.roundNumber(baseSize * this.fontScale * this.fontScale * this.fontScale * this.fontScale * this.fontScale * this.fontScale)
      this.config.fontSize['4xl'].splice(0, 1, tempVal)
      this.config.fontSize['4xl'].splice(1, 1, this.setLineHeight(tempVal))
    },
    setLineHeight(fontSize) {
      const row = this.baseGrid / 16
      const actualHeight = fontSize
      const splitHeight = actualHeight / row
      const splitHeightRnd = Math.round(splitHeight)
      let newHeight = splitHeightRnd * row

      if ((newHeight - fontSize) > 0.3) {
        return newHeight
      } else {
        return newHeight + row
      }
    }
  },
  mounted() {
    this.updateFontSize()
    this.updateSpacing()
  }
}
</script>

<style lang="postcss">
body {
  @apply font-sans;
}

input[type=range] {
  @apply h-one bg-transparent w-full appearance-none;
}
input[type=range]:focus {
  @apply outline-none;
}
input[type=range]::-webkit-slider-runnable-track {
  @apply w-full h-half cursor-pointer bg-gray-800 rounded-full;
}
input[type=range]::-webkit-slider-thumb {
  @apply h-one w-one rounded-full bg-blue-500 cursor-pointer -mt-quarter appearance-none;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  @apply bg-gray-700;
}
input[type=range]::-moz-range-track {
  @apply w-full h-half cursor-pointer bg-gray-800 rounded-full;
}
input[type=range]::-moz-range-thumb {
  @apply h-one w-one rounded-full bg-blue-500 cursor-pointer -mt-quarter;
}
input[type=range]::-ms-track {
  @apply w-full h-half cursor-pointer bg-transparent rounded-full;
}
input[type=range]::-ms-fill-lower {
   @apply rounded-full bg-gray-800;
}
input[type=range]::-ms-fill-upper {
  @apply rounded-full bg-gray-800;
}
input[type=range]::-ms-thumb {
  @apply h-one w-one rounded-full bg-blue-500 cursor-pointer;
}
input[type=range]:focus::-ms-fill-lower {
  @apply bg-gray-700;
}
input[type=range]:focus::-ms-fill-upper {
  @apply bg-gray-700;
}
</style>
