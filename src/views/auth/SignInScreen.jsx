import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './auth.style'
import AuthInput from '../../components/common/AuthInput'
import Spacer from '../../components/common/Spacer'
import CustomButton from '../../components/common/CustomButton'

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Chào mừng đến với FoodHub</Text>
            <Text style={styles.guideanceTxt}>Nhập địa chỉ email và mật khẩu của bạn để đăng nhập.</Text>
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
                title={'Đăng nhập'}
                onPress={() => { }}
                borderColor={'blue'}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                <Text style={styles.optionTxt}>Bạn chưa có tài khoản?</Text>
                <TouchableOpacity>
                    <Text style={[styles.clickableTxt, styles.clickableTxt]}> Tạo tài khoản mới.</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ textAlign: 'center', marginBottom: 24 }}>Hoặc</Text>
            <CustomButton
                title={'Đăng nhập với facebook'}
                onPress={() => { }}
                color='rgb(57, 89, 152)'
            />
            <Spacer height={16} />
            <CustomButton
                title={'Đăng nhập với Google'}
                onPress={() => { }}
                color='rgb(66, 133, 244)'
            />
        </View>
    )
}

export default SignInScreen