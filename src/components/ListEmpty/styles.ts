import { PropsTheme } from '@utils/propsTheme'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
`

export const Paragraph = styled.Text`
  ${({ theme }: PropsTheme) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`
