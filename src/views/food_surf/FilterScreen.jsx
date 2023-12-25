import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import foodCategories from '../../../data/FoodCategories'
import FilterItem from '../../components/food/FilterItem'
import dietData from '../../../data/DietData'
import Spacer from '../../components/common/Spacer'
import CustomButton from '../../components/common/CustomButton'

const FilterScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Loại</Text>
            <View style={styles.filterSection}>
                {
                    foodCategories.map((item, index) => {
                        return (
                            <FilterItem
                                label={item}
                            />
                        )
                    })
                }

            </View>
            <Spacer height={16}/>
            <Text style={styles.label}>Chế độ ăn kiêng</Text>
            <View style={styles.filterSection}>
                {
                    dietData.map((item, index) => {
                        return (
                            <FilterItem
                                label={item}
                            />
                        )
                    })
                }
            </View>
            <View style={styles.bottomView}>
                <CustomButton
                    title={'Áp dụng'}
                    onPress={() => { }}
                />
            </View>
        </View>
    )
}

export default FilterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    },
    filterSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
        marginVertical: 16
    },
    bottomView: {
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    }
})