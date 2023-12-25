import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spacer from '../common/Spacer'
import LandFoodItem from './LandFoodItem'
import FulFoodItem from './FulFoodItem'

const FulListSection = ({label, foodList}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Spacer height={8}/>
        <FlatList
            data={foodList}
            renderItem={({item}) => (
                <FulFoodItem
                    foodData={item}
                />
            )}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() =>  <Spacer height={16} /> }
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
        />
    </View>
  )
}

export default FulListSection

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginVertical: 16,
        width: '100%',
        alignSelf: 'center'
    },
    label: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    }
})