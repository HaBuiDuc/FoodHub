import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import foodSliderData from '../../../data/FoodSliderData'
import Carousel from 'react-native-reanimated-carousel';
import BannerItem from './BannerItem';

const FoodSlider = () => {
    const width = Dimensions.get('window').width // Get screen width
    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={foodSliderData}
                scrollAnimationDuration={1000}
                renderItem={({ item, index }) => (
                    <BannerItem image={item} />
                )}
            />
        </View>
    )
}

export default FoodSlider

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    carousel: {
        width: '100%'
    },
})