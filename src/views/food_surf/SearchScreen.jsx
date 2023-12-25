import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Spacer from '../../components/common/Spacer'
import TwoColumnListSection from '../../components/food/TwoColumnListSection'

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tìm kiếm</Text>
            <Spacer height={16} />
            <View style={styles.searchContainer}>
                <Feather style={styles.searchIcon} name='search' size={20} />
                <TextInput
                    placeholder='Tìm kiếm'
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.h2}>Lựa chọn hàng đầu</Text>
            </TouchableOpacity>
            <TwoColumnListSection/>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    },
    header: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black'
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgb(251,251,251)',
        borderRadius: 8,
        padding: 8
    },
    searchIcon: {
        marginHorizontal: 4
    },
    h2: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginVertical: 8
    }
})