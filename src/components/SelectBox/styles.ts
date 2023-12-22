import styled, { DefaultTheme, css } from 'styled-components/native'

import { PropsTheme } from '@utils/propsTheme'

export type ContainerInformationBoxTypeStyle = 'SIMPLE' | 'IN' | 'OUT'

interface ContainerStyleProps {
  isActive: ContainerInformationBoxTypeStyle
}

interface CircleProps {
  type: 'yes' | 'no'
}
interface CircleBgProps {
  type: 'yes' | 'no'
  theme: DefaultTheme
}

const BOX_STYLE = {
  SIMPLE: css`
    background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_200};
    border: 1px solid transparent;
  `,
  IN: css`
    background-color: ${({ theme }: PropsTheme) => theme.COLORS.GREEN_300};
    border: 1px solid ${({ theme }: PropsTheme) => theme.COLORS.GREEN_700};
  `,
  OUT: css`
    background-color: ${({ theme }: PropsTheme) => theme.COLORS.RED_300};
    border: 1px solid ${({ theme }: PropsTheme) => theme.COLORS.RED_700};
  `,
}

export const Container = styled.TouchableOpacity<ContainerStyleProps>`
  flex: 1;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 16px;

  border-radius: 6px;

  ${({ isActive }: ContainerStyleProps) => BOX_STYLE[isActive]};
`

export const Content = styled.View`
  flex: 1;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  gap: 8px;
`

export const Circle = styled.View<CircleProps>`
  width: 8px;
  height: 8px;

  border-radius: 999px;

  background-color: ${({ theme, type }: CircleBgProps) =>
    type === 'yes' ? `${theme.COLORS.GREEN_700}` : `${theme.COLORS.RED_700}`};
`

export const Label = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
