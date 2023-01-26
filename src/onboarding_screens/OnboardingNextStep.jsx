import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const OnboardingNextStep = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>OnboardingNextStep</Text>
      <Button title='am Anfang' onPress={()=> navigation.popToTop()}/>
    </View>
  )
}

export default OnboardingNextStep

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
})