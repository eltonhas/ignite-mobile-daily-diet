import { TouchableOpacity } from 'react-native'
import styled, { DefaultTheme } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'SIMPLE' | 'IN' | 'OUT'

interface Props {
  type: ButtonIconTypeStyleProps
}

interface IconProps {
  type: ButtonIconTypeStyleProps
  theme: DefaultTheme
}

interface ContainerProps {
  top: number
  left: number
}

export const Conatiner = styled(TouchableOpacity)<ContainerProps>`
  position: absolute;
  top: ${({ top }: ContainerProps) => top}px;
  left: ${({ left }: ContainerProps) => left}px;
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<Props>(
  ({ theme, type }: IconProps) => ({
    size: 24,
    color:
      type === 'SIMPLE'
        ? theme.COLORS.GRAY_600
        : type === 'IN'
          ? theme.COLORS.GREEN_700
          : theme.COLORS.RED_700,
  }),
)``
