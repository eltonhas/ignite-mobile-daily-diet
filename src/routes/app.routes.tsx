import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Meal } from '@screens/Meal'
import { NegativeFeedback } from '@screens/NegativeFeedback'
import { NewMeal } from '@screens/NewMeal'
import { PositiveFeedback } from '@screens/PositiveFeedback'
import { Stats } from '@screens/Stats'
import { Edit } from '@screens/Edit'

const { Navigator, Screen } = createNativeStackNavigator()
export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="stats" component={Stats} />
      <Screen name="meal" component={Meal} />
      <Screen name="edit" component={Edit} />
      <Screen name="positive" component={PositiveFeedback} />
      <Screen name="negative" component={NegativeFeedback} />
    </Navigator>
  )
}
