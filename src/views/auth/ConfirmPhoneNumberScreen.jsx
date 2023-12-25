import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './auth.style'
import AuthInput from '../../components/common/AuthInput'
import CustomButton from '../../components/common/CustomButton'
import Spacer from '../../components/common/Spacer'

const ConfirmPhoneNumberScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTxt}>Xác minh số điện thoại</Text>
                <Text style={[styles.guideanceTxt, { textAlign: 'center' }]}>Nhập mã 4 số được gửi cho bạn theo số +84999999999</Text>
            </View>
            <AuthInput
                value={'+84'}
                onValueChange={() => { }}
                label={'Số điện thoại'}
                placeholder={'Enter your email'}
            />
            <Spacer height={32} />
            <CustomButton
                title={'Tiếp tục'}
                onPress={() => { }}
                position={'center'}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                <Text style={styles.optionTxt}>Không nhận được mã?</Text>
                <TouchableOpacity>
                    <Text style={[styles.clickableTxt, styles.clickableTxt]}> Gửi lại lần nữa.</Text>
                </TouchableOpacity>

            </View>
            <Text style={[styles.guideanceTxt, { textAlign: 'center', marginHorizontal: 8 }]}>Bằng cách đăng nhập, bạn đồng ý với Điều khoản Điều kiện & Chính sách quyền riêng tư của chúng tôi.</Text>
        </View>
    )
}

export default ConfirmPhoneNumberScreen