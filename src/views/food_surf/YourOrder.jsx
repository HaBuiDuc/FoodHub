import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import foodList from '../../../data/FoodList'
import OrderItem from '../../components/order/OrderItem'
import Spacer from '../../components/common/Spacer'
import CheckoutItem from '../../components/order/CheckoutItem'
import Feather from 'react-native-vector-icons/Feather'
import CustomButton from '../../components/common/CustomButton'

const YourOrder = () => {
    const data = foodList
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <OrderItem
                        foodData={item}
                    />
                )}
                ItemSeparatorComponent={() => (<Spacer height={16} />)}
            />
            <View style={styles.bottomView}>
                <CheckoutItem
                    label={'Tổng giá món ăn'}
                    value={'25.000đ'}
                />
                <CheckoutItem
                    label={'Phí giao hàng'}
                    value={'10.000đ'}
                />
                <CheckoutItem
                    label={'Tổng cộng'}
                    value={'35.000đ'}
                    color='red'
                />
                <Spacer height={16}/>
                <TouchableOpacity>
                    <CheckoutItem
                        label={'Thêm món ăn'}
                        value={<Feather name='chevron-right' size={20} color='black' />}
                        color='red'
                    />
                    <View style={styles.horizontalLine} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <CheckoutItem
                        label={'Mã khuyến mãi'}
                        value={<Feather name='chevron-right' size={20} color='black' />}
                    />
                    <View style={styles.horizontalLine} />
                </TouchableOpacity>
                <Spacer height={32}/>
                <CustomButton
                    title={'Tiếp tục (75.000đ)'}
                    onPress={() => { }}
                />
            </View>
        </View>
    )
}

export default YourOrder

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'column',
    },
    horizontalLine: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.3,
        width: '100%',
        marginVertical: 8
    }
})