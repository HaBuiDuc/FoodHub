import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './auth.style'
import AuthInput from '../../components/common/AuthInput'
import Spacer from '../../components/common/Spacer'
import CustomButton from '../../components/common/CustomButton'

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Tạo tài khoản</Text>
            <Text style={styles.guideanceTxt}>Nhập tên, email và mật khẩu của bạn để đăng kí.</Text>
            <AuthInput
                value={'Nguyen Van A'}
                onValueChange={() => { }}
                label={'Họ và tên'}
                placeholder={'Enter your email'}
            />
            <Spacer height={16} />
            <AuthInput
                value={'nguyenvana@gmal.com'}
                onValueChange={() => { }}
                label={'Email'}
                placeholder={'Enter your email'}
            />
            <Spacer height={16} />
            <AuthInput
                value={'*****'}
                onValueChange={() => { }}
                label={'Mật khẩu'}
                placeholder={'Enter your email'}
            />
            <Text style={styles.optionTxt}>Quên mật khẩu?</Text>
            <CustomButton
                title={'Đăng kí'}
                onPress={() => { }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginVertical: 16 }}>
                <TouchableOpacity>
                    <Text style={[styles.clickableTxt, styles.clickableTxt]}> Đã có tài khoản?</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ textAlign: 'center', marginBottom: 24 }}>Hoặc</Text>
            <CustomButton
                title={'KẾT NỐI VỚI FACEBOOK'}
                onPress={() => { }}
                color='rgb(57, 89, 152)'
            />
            <Spacer height={16} />
            <CustomButton
                title={'KẾT NỐI VỚI GOOGLE'}
                onPress={() => { }}
                color='rgb(66, 133, 244)'
            />
        </View>
    )
}

export default SignUpScreen