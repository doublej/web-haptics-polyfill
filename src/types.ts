export interface Vibration {
  duration: number
  intensity?: number
  delay?: number
}

export type PresetName =
  | 'success'
  | 'error'
  | 'warning'
  | 'selection'
  | 'light'
  | 'medium'
  | 'heavy'
  | 'soft'
  | 'rigid'
  | 'nudge'
  | 'buzz'

export type HapticInput = PresetName | number | Vibration[]

export interface HapticsOptions {
  debug?: boolean
  engine?: 'auto' | 'ios' | 'android' | 'audio' | 'noop'
}
