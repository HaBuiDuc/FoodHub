import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SelecableItem from './SelecableItem';
import Spacer from '../common/Spacer';

const AddToppingSection = ({ data, label }) => {
    console.log(data);
    const [isSelected, setSelected] = useState(new Array(data.length).fill(false))
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Spacer height={8}/>
            {
                data.map((item, index) => {
                    return (
                        <><SelecableItem
                            label={item}
                            selected={isSelected[index]}
                            onSelected={() => {
                                const newSelected = [...isSelected];
                                newSelected[index] = !newSelected[index];
                                setSelected(newSelected);
                                console.log(isSelected);
                            }} /><View style={styles.horizontalLine} />
                        </>
                    )
                })
            }
        </View>
    )
}

export default AddToppingSection

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 8
    },
    horizontalLine: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.4,
        marginVertical: 8
    }
})