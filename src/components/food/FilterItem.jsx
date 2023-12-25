import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FilterItem = ({ label, isSelected, onSelected }) => {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: isSelected ? 'red' : 'rgb(241,241,241)' }]}
            onPress={onSelected}
        >
            <Text>{label}</Text>
        </TouchableOpacity>
    )
}

export default FilterItem

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        borderRadius: 6,
        marginBottom: 8,
        marginEnd: 8
    }
})