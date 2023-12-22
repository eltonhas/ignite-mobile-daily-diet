import styled, { DefaultTheme, css } from 'styled-components/native'

import { PropsTheme } from '@utils/propsTheme'
import { FontAwesome } from '@expo/vector-icons'

export type ContainerStyleTypeProps = 'PRIMARY' | 'SECONDARY'

interface Props {
  type: ContainerStyleTypeProps
}

const BOX_STYLE = {
  PRIMARY: css`
    background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_600};
  `,
  SECONDARY: css`
    background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_100};
    border: 1px solid ${({ theme }: PropsTheme) => theme.COLORS.GRAY_700};
  `,
}

interface StyleProps {
  type?: ContainerStyleTypeProps
  theme: DefaultTheme
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;

  align-items: center;
  justify-content: center;

  padding-top: 16px;
  padding-bottom: 16px;

  ${({ type }: Props) => BOX_STYLE[type]};

  border-radius: 8px;
`

export const Content = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 10px;
`

export const Title = styled.Text<Props>`
  ${({ theme, type }: StyleProps) => css`
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'PRIMARY'
      ? `${theme.COLORS.WHITE}`
      : `${theme.COLORS.GRAY_600}`};
  `}
`

export const Icon = styled(FontAwesome).attrs<Props>(
  ({ theme, type }: StyleProps) => ({
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_600,
    size: theme.FONT_SIZE.BODY_S,
  }),
)``
