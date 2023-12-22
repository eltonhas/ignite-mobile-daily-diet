import { PropsTheme } from '@utils/propsTheme'
import styled, { css } from 'styled-components/native'

export type ContainerInformationBoxTypeStyle = 'SIMPLE' | 'IN' | 'OUT'

interface Props {
  type: ContainerInformationBoxTypeStyle
}

const BOX_STYLE = {
  SIMPLE: css`
    background-color: ${({ theme }: PropsTheme) => theme.COLORS.GRAY_200};
    width: 100%;
  `,
  IN: css`
    background-color: ${({ theme }: PropsTheme) => theme.COLORS.GREEN_300};
    flex: 1;
    height: auto;
  `,
  OUT: css`
    background-color: ${({ theme }: PropsTheme) => theme.COLORS.RED_300};
    flex: 1;
    height: auto;
  `,
}

export const Container = styled.View<Props>`
  gap: 8px;

  align-items: center;
  justify-content: center;

  padding: 16px;

  ${({ type }: Props) => BOX_STYLE[type]};

  border-radius: 8px;
`

export const Title = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Paragraph = styled.Text`
  ${({ theme }: PropsTheme) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  text-align: center;
`
