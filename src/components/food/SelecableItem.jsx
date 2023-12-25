import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import RadioButton from '../common/RadioButton'

const SelecableItem = ({ label, selected = false, onSelected }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onSelected}
        >
            <RadioButton selected={selected} />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export default SelecableItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        marginStart: 8
    }
})