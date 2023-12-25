import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FoodSlider from '../../components/food/FoodSlider'
import LandListSection from '../../components/food/LandListSection'
import foodList from '../../../data/FoodList'
import FulListSection from '../../components/food/FulListSection'

const HomePage = () => {
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <FoodSlider />
            <LandListSection
                label={'Món ăn nổi bật'}
                foodList={foodList}
            />
            <LandListSection
                label={'Các nhà hàng tốt nhất'}
                foodList={foodList}
            />
            <FulListSection
                label={'Tất cả nhà hàng'}
                foodList={foodList}
            />
        </ScrollView>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
    },
})