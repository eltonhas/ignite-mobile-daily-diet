import styled, { css } from 'styled-components/native'
import { PropsTheme } from '@utils/propsTheme'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  gap: 20px;

  padding-left: 32px;
  padding-right: 32px;

  background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_100};
`

export const BoxText = styled.View`
  width: 100%;
  gap: 8px;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.RED_700};
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Paragraph = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`
export const ParagraphHighligth = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const ButtonContainer = styled.View`
  width: 60%;
`
