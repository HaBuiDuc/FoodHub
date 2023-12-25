import { StyleSheet, Image } from 'react-native'
import React from 'react'

const BannerItem = ({ image }) => {
    return (
        <Image
            style={styles.container}
            source={image.img}
        />
    )
}

export default BannerItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        borderRadius: 8
    }
})
