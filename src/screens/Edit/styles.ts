import { PropsTheme } from '@utils/propsTheme'
import styled, { css } from 'styled-components/native'

export const Container = styled.ScrollView`
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

  align-items: center;

  background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_100};
`

export const ContentSection = styled.View`
  flex-direction: row;
  gap: 12px;
  width: 100%;
`

export const Label = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const SelectSection = styled.View`
  gap: 4px;
  width: 100%;
`

export const ButtonContainer = styled.View`
  margin: 24px;
`
