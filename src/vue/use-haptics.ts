import { onMounted, onUnmounted, shallowRef } from 'vue'
import { Haptics } from '../haptics'
import type { HapticInput, HapticsOptions } from '../types'

export function useHaptics(options: HapticsOptions = {}) {
  const instance = shallowRef<Haptics | null>(null)

  onMounted(() => {
    instance.value = new Haptics(options)
  })

  onUnmounted(() => {
    instance.value?.destroy()
    instance.value = null
  })

  return {
    trigger: (input: HapticInput) => instance.value?.trigger(input),
    cancel: () => instance.value?.cancel(),
    get isSupported() {
      return instance.value?.isSupported ?? false
    },
  }
}
