import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import restaurantSingleData from '../../../data/RestaurantSingleData'
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LandListSection from '../../components/food/LandListSection';
import DetailListSection from '../../components/food/DetailList';
import foodList from '../../../data/FoodList';

const RestaurantPage = () => {
    const data = restaurantSingleData
    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.foodImg}
                source={{ uri: data.img }}
            />
            <View style={styles.restaurantContainer}>
                <Text style={styles.restaurantName}>{data.name}</Text>
                <Text style={styles.retaurantAdd}>{data.address}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingTxt}>{data.rating}</Text>
                    <Icon style={styles.ratingIc} name='star' size={20} color={'red'} />
                    <Text style={styles.ratingTxt}>200+ đánh giá</Text>
                </View>
                <View style={styles.generalContainer}>
                    <View style={styles.row}>
                        <FontAwesome name='dollar' size={20} color={'red'} />
                        <View style={{marginHorizontal: 8}}>
                            <Text style={{fontSize: 16, fontWeight: '300'}}>Miễn phí</Text>
                            <Text style={{fontSize: 14, fontWeight: '400'}}>vận chuyển</Text>
                        </View>
                        <Feather name='clock' size={20} color={'red'} />
                        <View style={{marginHorizontal: 8}}>
                            <Text style={{fontSize: 16, fontWeight: '300'}}>25</Text>
                            <Text style={{fontSize: 14, fontWeight: '400'}}>Phút</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.favoriteBtn}>
                        <Text style={styles.favoriteBtnTxt}>Yêu thích</Text>
                    </TouchableOpacity>
                </View>
                <LandListSection
                    foodList={data.menu}
                    label={'Món nổi bật'}
                />
                <DetailListSection
                    foodList={foodList}
                    label={'Tất cả món'}
                />
            </View>
        </ScrollView>
    )
}

export default RestaurantPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    foodImg: {
        width: '100%',
        height: 260,
    },
    restaurantContainer: {
        margin: 16,
        flexDirection: 'column'
    },
    restaurantName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    retaurantAdd: {
        fontSize: 16,
        fontWeight: '400',
        color: 'darkgray',
        marginVertical: 8
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ratingTxt: {
        fontSize: 12,
        fontWeight: '400',
        color: 'darkgray',
        marginVertical: 8
    },
    ratingIc: {
        marginHorizontal: 8
    },
    generalContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 16
    },
    favoriteBtn: {
        width: 100,
        height: 40,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderColor: 'red',
        borderWidth: 1
    },
    favoriteBtnTxt: {
        fontSize: 16,
        fontWeight: '400',
        color: 'red'

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },

})