import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import screens from '@/screens'

const Stack = createNativeStackNavigator()

export default function Screens() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    headerShown: true
                }}
            >
                {screens.map(screen => (
                    <Stack.Screen
                        key={screen.name}
                        name={screen.name}
                        component={screen.component}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    )
}