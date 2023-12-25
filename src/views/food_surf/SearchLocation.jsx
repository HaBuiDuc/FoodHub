import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Spacer from '../../components/common/Spacer'

const SearchLocation = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTxt}>Tìm nhà hàng gần bạn</Text>
                <Text style={styles.guideanceTxt}>Vui lòng nhập vị trí của bạn hoặc cho phép truy cập vào vị trí của bạn để tìm nhà hàng gần bạn.</Text>
            </View>
            <TouchableOpacity style={styles.searchBtn}>
                <Text style={{ color: 'red' }}>Sử dụng vị trí hiện tại</Text>
            </TouchableOpacity>
            <Spacer height={16}/>
            <View style={styles.locationInput}>
                <Feather name='map-pin' size={24} color='gray' />
                <Spacer width={4}/>
                <TextInput
                    placeholder='Nhập địa chỉ của bạn'
                    onChangeText={() => { }}
                />
            </View>
        </View>
    )
}

export default SearchLocation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
        margin: 24
    },
    guideanceTxt: {
        fontSize: 16,
        color: 'gray',
        marginTop: 12,
        marginBottom: 16,
        textAlign: 'center'
    },
    searchBtn: {
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1,
        paddingVertical: 12,
    },
    locationInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(251,251,251)',
        borderRadius: 8,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 9,
        marginBottom: 16
    }
})