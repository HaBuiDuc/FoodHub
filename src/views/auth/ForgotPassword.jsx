import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './auth.style'
import AuthInput from '../../components/common/AuthInput'
import Spacer from '../../components/common/Spacer'
import CustomButton from '../../components/common/CustomButton'

const ForgotPassword = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Quên mật khẩu</Text>
            <Text style={styles.guideanceTxt}>Nhập địa chỉ Email của bạn để đươc cấp lại mật khẩu.</Text>
            <AuthInput
                value={'nguyenvana@gmal.com'}
                onValueChange={() => { }}
                label={'Email'}
                placeholder={'Enter your email'}
            />
            <Spacer height={32}/>
            <CustomButton
                title={'Đặt lại mật khẩu'}
                onPress={() => { }}
            />
        </View>
    )
}

export default ForgotPassword