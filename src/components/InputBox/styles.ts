import styled, { css } from 'styled-components/native'
import { PropsTheme } from '@utils/propsTheme'

export type ContainerInputBoxStyle = 'COLUMN' | 'ROW'

interface Props {
  type: ContainerInputBoxStyle
}

const BOX_STYLE = {
  COLUMN: css`
    width: 100%;
  `,
  ROW: css`
    flex: 1;
  `,
}

export const Container = styled.View<Props>`
  ${({ type }: Props) => BOX_STYLE[type]}
  gap: 4px;
`

export const Label = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Input = styled.TextInput`
  width: 100%;
  padding: 14px;

  border-radius: 6px;
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    border: 1px solid ${theme.COLORS.GRAY_300};
  `}
`
