import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './walkthrough.style'
import CustomButton from '../../components/common/CustomButton'
import Spacer from '../../components/common/Spacer'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/app_logo.png')}
        style={styles.appLogo}
      />
      <Image
        source={require('../../../assets/images/walkthrough_1.png')}
        style={styles.centerImage}
      />
      <Text style={styles.slogan}>Xin chào</Text>
      <Text style={styles.txt}>Hân hạnh được gặp bạn. Chúng tôi rất vui vì bạn có mặt ở đây, vì vậy hãy bắt đầu nào!</Text>
      <Spacer height={20}/>
      <CustomButton
        title="Bắt đầu"
        onPress={() => alert('Bắt đầu')}
        color={'red'}
      />
    </View>
  )
}

export default WelcomeScreen
