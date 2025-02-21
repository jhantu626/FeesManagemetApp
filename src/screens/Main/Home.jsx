import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BackgorundView, MainHeader } from '../../components'

const Home = () => {
  return (
    <BackgorundView>
      <MainHeader/>
      <Text>Home</Text>
    </BackgorundView>
  )
}

export default Home

const styles = StyleSheet.create({})