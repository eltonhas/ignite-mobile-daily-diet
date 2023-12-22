import { ReactNode } from 'react'

import {
  Container,
  ContainerStyleTypeProps,
  Content,
  Icon,
  Title,
} from './styles'
import { FontAwesome } from '@expo/vector-icons'

interface ButtonProps {
  children: ReactNode
  icon?: keyof typeof FontAwesome.glyphMap
  showIcon?: boolean
  type?: ContainerStyleTypeProps
  pressButton: () => void
}

export function Button({
  children,
  icon = 'plus',
  showIcon = true,
  type = 'PRIMARY',
  pressButton,
}: ButtonProps) {
  return (
    <Container type={type} onPress={pressButton}>
      <Content>
        {showIcon && <Icon name={icon} type={type} />}

        <Title type={type}>{children}</Title>
      </Content>
    </Container>
  )
}
