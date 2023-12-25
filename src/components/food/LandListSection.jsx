import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spacer from '../common/Spacer'
import LandFoodItem from './LandFoodItem'

const LandListSection = ({label, foodList}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Spacer height={8}/>
        <FlatList
            data={foodList}
            renderItem={({item}) => (
                <LandFoodItem
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

export default LandListSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginVertical: 16
    },
    label: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})