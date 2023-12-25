import { Text, View } from 'react-native'
import React from 'react'
import styles from './auth.style'
import AuthInput from '../../components/common/AuthInput'
import Spacer from '../../components/common/Spacer'
import CustomButton from '../../components/common/CustomButton'

const ResetEmailScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Xác thực email</Text>
            <Text style={styles.guideanceTxt}>Vui lòng kiểm tra hộp thư đến hoặc spam trong Email: nguyenvana@gmail.com</Text>
            <AuthInput
                value={'nguyenvana@gmal.com'}
                onValueChange={() => { }}
                label={'Email'}
                placeholder={'Enter your email'}
            />
            <Text style={[styles.clickableTxt, {marginVertical: 8, alignSelf: 'flex-end'}]}>Có vấn đề?</Text>
            <Spacer height={16} />
            <CustomButton
                title={'Gửi lại'}
                onPress={() => { }}
            />
        </View>
    )
}

export default ResetEmailScreen