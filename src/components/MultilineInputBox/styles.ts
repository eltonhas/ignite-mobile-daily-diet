import styled, { css } from 'styled-components/native'
import { PropsTheme } from '@utils/propsTheme'

export const Container = styled.View`
  width: 100%;
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
