import { View, Text ,StyleSheet, Button} from 'react-native'
import React from 'react'

const OnboardingLegal = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>OnboardingLegal</Text>
      <Button title='Next Step' onPress={()=> navigation.navigate("NächsteStufe")}/>
    </View>
  )
}

export default OnboardingLegal

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
})