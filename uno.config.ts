import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  shortcuts: [
    {
      'btn-colorful': 'bg-gradient-to-r from-[#D093E0] to-[#34FADF]',
    },
  ],
  presets: [presetUno(), presetRemToPx()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      primary: '#FF7D00',
    },
  },
  safelist: [],
})
