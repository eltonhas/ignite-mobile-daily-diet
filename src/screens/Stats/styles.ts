import { PropsTheme } from '@utils/propsTheme'
import styled, { DefaultTheme, css } from 'styled-components/native'

export type ContainerTypeStyleProps = 'PRIMARY' | 'SECONDARY'

interface Props {
  type: ContainerTypeStyleProps
}

interface BgProps {
  type: ContainerTypeStyleProps
  theme: DefaultTheme
}

export const Container = styled.View`
  flex: 1;
  width: 100%;

  background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_100};
`

export const StatsHeader = styled.View<Props>`
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
  justify-content: center;
  align-items: center;

  gap: 10px;

  background-color: ${({ theme, type }: BgProps) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
`

export const BackArrowBox = styled.View`
  position: absolute;
  top: 40px;
  left: 0px;
`

export const Title = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.TITLE_G}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Paragraph = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Content = styled.View`
  position: relative;
  top: -20px;

  flex: 1;
  width: 100%;
  height: auto;

  gap: 23px;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  padding-top: 23px;
  padding-left: 24px;
  padding-right: 24px;

  align-items: center;

  background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_100};
`
export const SecondaryTitle = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const BoxSpace = styled.View`
  width: 100%;
  gap: 12px;
`

export const StatsBoxSpace = styled.View`
  flex-direction: row;
  gap: 12px;
  width: 100%;
`
