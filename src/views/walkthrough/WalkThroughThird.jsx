import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './walkthrough.style'
import CustomButton from '../../components/common/CustomButton'
import Spacer from '../../components/common/Spacer'

const WalkThroughThird = () => {
  return (
    <View style={styles.container}>
            <Image
                source={require('../../../assets/images/app_logo.png')}
                style={styles.appLogo}
            />
            <Image
                source={require('../../../assets/images/walkthrough_3.png')}
                style={styles.centerImage}
            />
            <Text style={styles.slogan}>Chọn món ăn</Text>
            <Text style={styles.txt}>Dễ dàng tìm kiếm món ăn mọi lúc mọi nơi</Text>
            <Spacer height={20} />
            <CustomButton
                title="Tiếp tục"
                onPress={() => alert('Bắt đầu')}
                color={'red'}
            />
        </View>
  )
}

export default WalkThroughThird