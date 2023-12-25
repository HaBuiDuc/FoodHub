import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Spacer from '../../components/common/Spacer'
import CustomButton from '../../components/common/CustomButton'

const AddPayment = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTxt}>Thêm phương thức thanh toán</Text>
                <Spacer height={20} />
                <Text style={styles.guidanceTxt}>Phương thức này chỉ được đổi khi bạn thanh toán</Text>
            </View>
            <TextInput
                style={styles.cardInput}
                placeholder='Card number'
                placeholderTextColor={'black'}
            />
            <View style={styles.row}>
                <TextInput
                    style={[styles.cardInput, { flex: 1 }]}
                    placeholder='MM/YY'
                    placeholderTextColor={'black'}
                />
                <Spacer width={16} />
                <TextInput
                    style={[styles.cardInput, { flex: 1 }]}
                    placeholder='CVC'
                    placeholderTextColor={'black'}
                />
            </View>
            <View style={styles.bottomView}>
                <CustomButton
                    title={'Thêm'}
                    onPress={() => { }}
                />
                <Spacer height={16}/>
                <CustomButton
                    title={'Quét thẻ'}
                    color='gray'
                    onPress={() => { }}
                />
            </View>
        </View>
    )
}

export default AddPayment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    },
    headerTxt: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black'
    },
    headerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    guidanceTxt: {
        fontSize: 16,
        fontWeight: '300',
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 24
    },
    cardInput: {
        backgroundColor: 'rgb(251,251,251)',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 16,
        marginTop: 24,
    },
    row: {
        flexDirection: 'row',
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'column',
        width: '100%'
    },
})