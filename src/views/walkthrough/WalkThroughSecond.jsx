import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './walkthrough.style'
import CustomButton from '../../components/common/CustomButton'
import Spacer from '../../components/common/Spacer'

const WalkThroughSecond = () => {
  return (
    <View style={styles.container}>
            <Image
                source={require('../../../assets/images/app_logo.png')}
                style={styles.appLogo}
            />
            <Image
                source={require('../../../assets/images/walkthrough_2.png')}
                style={styles.centerImage}
            />
            <Text style={styles.slogan}>Ưu đãi giao hàng</Text>
            <Text style={styles.txt}>Vô vàn các ưu đãi giao hàng thông qua nhiều các hình thức thanh toán.</Text>
            <Spacer height={20} />
            <CustomButton
                title="Tiếp tục"
                onPress={() => alert('Bắt đầu')}
                color={'red'}
            />
        </View>
  )
}

export default WalkThroughSecond