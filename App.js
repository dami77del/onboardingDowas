import { useFonts } from 'expo-font'
import DowasNavigation from './src/navigation/DowasNavigation';

export default function App() {
  const [fontsLoaded] = useFonts(
    {
      DancingScript: require("./src/fonts/JosefinSans-VariableFont_wght.ttf")
    }
  )

  if (!fontsLoaded) {
    return null
  }
  return <DowasNavigation />

}

