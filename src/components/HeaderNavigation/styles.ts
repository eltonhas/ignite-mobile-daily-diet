import styled, { css } from 'styled-components/native'
import { PropsTheme } from '@utils/propsTheme'

export type ContainerHeaderNavigationBoxTypeStyle = 'SIMPLE' | 'IN' | 'OUT'

interface Props {
  type: ContainerHeaderNavigationBoxTypeStyle
}

const BOX_STYLE = {
  SIMPLE: css`
    background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_200};
  `,
  IN: css`
    background-color: ${({ theme }: PropsTheme) => theme.COLORS.GREEN_300};
  `,
  OUT: css`
    background-color: ${({ theme }: PropsTheme) => theme.COLORS.RED_300};
  `,
}

export const Container = styled.View<Props>`
  padding-top: 70px;
  padding-bottom: 50px;

  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: center;

  ${({ type }: Props) => BOX_STYLE[type]};
`

export const Title = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
