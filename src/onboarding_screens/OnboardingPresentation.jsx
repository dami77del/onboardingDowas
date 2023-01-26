import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OnboardingPresentation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>OnboardingPresentation</Text>
     <Button title='Go to Legal' onPress={()=> navigation.navigate("Legal")}/>
    </View>
  )
}

export default OnboardingPresentation

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
})