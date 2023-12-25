import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './walkthrough.style'
import CustomButton from '../../components/common/CustomButton'
import Spacer from '../../components/common/Spacer'

const WalkthroughFirst = () => {
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
            <Text style={styles.slogan}>Món ăn yêu thích</Text>
            <Text style={styles.txt}>Có rất nhiều món ăn ngon từ các nhà hàng địa phương tốt nhất với dịch vụ giao hàng theo yêu cầu, dễ dàng.</Text>
            <Spacer height={20} />
            <CustomButton
                title="Tiếp tục"
                onPress={() => alert('')}
                color={'red'}
            />
        </View>
    )
}

export default WalkthroughFirst
