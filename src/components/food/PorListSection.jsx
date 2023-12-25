import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spacer from '../common/Spacer'
import PorFoodItem from './PorFoodItem'

const PorListSection = ({label, foodList}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Spacer height={16}/>
        <FlatList
            data={foodList}
            renderItem={({item}) => (
                <PorFoodItem
                    foodData={item}
                />
            )}
            keyExtractor={item => item.id}
            horizontal={true}
            ItemSeparatorComponent={() => <Spacer width={16}/>}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default PorListSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})