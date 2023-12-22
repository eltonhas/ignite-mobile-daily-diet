import styled, { DefaultTheme, css } from 'styled-components/native'
import { PropsTheme } from '@utils/propsTheme'

interface CircleProps {
  type: 'IN' | 'OUT'
}
interface CircleBgProps {
  type: 'IN' | 'OUT'
  theme: DefaultTheme
}

export const Container = styled.View`
  flex: 1;
  width: 100%;

  background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_100};
`

export const Content = styled.View`
  position: relative;
  top: -20px;

  flex: 1;
  width: 100%;

  gap: 23px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_100};
`

export const ContentSection = styled.View`
  gap: 8px;
`

export const Title = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
export const SecondaryTitle = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Paragraph = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Tag = styled.View`
  width: 40%;
  flex-direction: row;

  align-items: center;

  gap: 8px;

  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;

  background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_200};

  border-radius: 999px;
`

export const TextTag = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Circle = styled.View<CircleProps>`
  width: 8px;
  height: 8px;

  border-radius: 999px;

  background-color: ${({ theme, type }: CircleBgProps) =>
    type === 'IN' ? `${theme.COLORS.GREEN_700}` : `${theme.COLORS.RED_700}`};
`

export const ButtonContainer = styled.View`
  gap: 8px;
  margin: 24px;
`
