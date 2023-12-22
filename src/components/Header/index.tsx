import { Image } from 'react-native'
import { Avatar, Container } from './styles'

import logo from '@assets/logo.png'
import avatar from '@assets/Ellipse.png'

export function Header() {
  return (
    <Container>
      <Image source={logo} alt="" />
      <Avatar>
        <Image source={avatar} alt="" />
      </Avatar>
    </Container>
  )
}
