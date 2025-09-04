import { config } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui'

// Create the configuration using stable v3 config
const tamaguiConfig = createTamagui(config)

export default tamaguiConfig

export type AppConfig = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}
