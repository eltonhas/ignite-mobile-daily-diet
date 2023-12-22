/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components/native'
import 'styled-components'

import theme from '../themes'

declare module 'styled-components/native' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}

declare module 'styled-components' {
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}
