import { View, Text } from 'react-native'
import React from 'react'
import styles from './auth.style'
import AuthInput from '../../components/common/AuthInput'
import CustomButton from '../../components/common/CustomButton'
import Spacer from '../../components/common/Spacer'

const LoginByPhoneScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTxt}>Bắt đầu với FoodHub</Text>
                <Text style={[styles.guideanceTxt, { textAlign: 'center' }]}>Nhập số điện thoại của bạn để sử dụng FoodHub và thưởng thức món ăn.</Text>
            </View>
            <AuthInput
                value={'+84'}
                onValueChange={() => { }}
                label={'Số điện thoại'}
                placeholder={'Enter your email'}
            />
            <Spacer height={16} />
            <View style={styles.bottomView}>
                <CustomButton
                    title={'Đăng nhập'}
                    onPress={() => { }}
                    position={'center'}
                />
            </View>

        </View>
    )
}

export default LoginByPhoneScreen