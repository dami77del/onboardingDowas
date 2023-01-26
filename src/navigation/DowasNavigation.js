import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OnboardingPresentation from '../onboarding_screens/OnboardingPresentation'
import OnboardingLegal from '../onboarding_screens/OnboardingLegal'
import OnboardingNextStep from '../onboarding_screens/OnboardingNextStep'

const Stack = createNativeStackNavigator()

export default DowasNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Präsentation">
                <Stack.Screen  name="Präsentation" component={OnboardingPresentation}/>
                <Stack.Screen  name="Legal" component={OnboardingLegal} />
                <Stack.Screen  name="NächsteStufe" component={OnboardingNextStep} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}