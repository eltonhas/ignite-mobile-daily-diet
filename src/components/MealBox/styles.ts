import { PropsTheme } from '@utils/propsTheme'
import styled, { DefaultTheme, css } from 'styled-components/native'

export type DietTypeStyleProps = boolean

interface Props {
  inDiet: DietTypeStyleProps
}

interface DietStatusProps {
  inDiet: DietTypeStyleProps
  theme: DefaultTheme
}

export const Container = styled.TouchableHighlight`
  width: 100%;

  margin-bottom: 10px;

  padding-left: 12px;
  padding-right: 12px;
  padding-top: 14px;
  padding-bottom: 14px;
  ${({ theme }: PropsTheme) => css`
    background-color: ${theme.COLORS.GRAY_100};
    border: 1px solid ${theme.COLORS.GRAY_400};
  `}

  border-radius: 6px;
`

export const Content = styled.View`
  flex-direction: row;
`

export const Separator = styled.View`
  margin-left: 14px;
  margin-right: 14px;
  height: auto;
  width: 1px;

  background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_400};
`

export const Time = styled.Text`
  ${({ theme }: PropsTheme) => css`
    font-size: ${theme.FONT_SIZE.BODY_XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}

  align-self: center;
`

export const FoodView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const FoodName = styled.Text`
  ${({ theme }: PropsTheme) => css`
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `}
`

export const DietStatus = styled.View<Props>`
  width: 14px;
  height: 14px;

  border-radius: 999px;

  background-color: ${({ inDiet, theme }: DietStatusProps) =>
    inDiet ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500};
`
