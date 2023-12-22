import styled from 'styled-components/native'

import { PropsTheme } from '@utils/propsTheme'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }: PropsTheme) => theme.COLORS.WHITE};
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(
  ({ theme }: PropsTheme) => ({
    color: theme.COLORS.GREEN_700,
  }),
)``
