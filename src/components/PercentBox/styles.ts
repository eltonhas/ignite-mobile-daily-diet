import { PropsTheme } from '@utils/propsTheme'
import { ArrowUpRight } from 'phosphor-react-native'
import styled, { DefaultTheme, css } from 'styled-components/native'

export type ContainerTypeStyleProps = 'PRIMARY' | 'SECONDARY'

interface Props {
  type: ContainerTypeStyleProps
}

interface BgProps {
  type: ContainerTypeStyleProps
  theme: DefaultTheme
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;

  justify-content: center;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;

  margin-bottom: 40px;

  background-color: ${({ theme, type }: BgProps) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};

  border-radius: 8px;
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

export const Icon = styled(ArrowUpRight).attrs<Props>(
  ({ theme, type }: BgProps) => ({
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700,
    weight: 'bold',
  }),
)`
  position: absolute;
  top: 8px;
  right: 8px;
`
