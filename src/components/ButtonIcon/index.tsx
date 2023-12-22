import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { ButtonIconTypeStyleProps, Conatiner, Icon } from './styles'
import { useNavigation } from '@react-navigation/native'

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  type?: ButtonIconTypeStyleProps
  top?: number
  left?: number
}

export function ButtonIcon({
  icon,
  type = 'SIMPLE',
  top = 0,
  left = 0,
  ...rest
}: ButtonIconProps) {
  const navigation = useNavigation()
  function handleNavigateToHome() {
    navigation.navigate('home')
  }
  return (
    <Conatiner top={top} left={left} {...rest} onPress={handleNavigateToHome}>
      <Icon name={icon} type={type} />
    </Conatiner>
  )
}
