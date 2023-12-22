import styled, { css } from 'styled-components/native'

import { PropsTheme } from '@utils/propsTheme'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;

  background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_100};
`
export const Paragraph = styled.Text`
  margin-bottom: 15px;
  ${({ theme }: PropsTheme) => css`
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const DayText = styled.Text`
  ${({ theme }: PropsTheme) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}

  margin-top: 20px;
  margin-bottom: 10px;
`
