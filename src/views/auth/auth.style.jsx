import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
    },
    greeting: {
        fontSize: 33,
        fontWeight: '200'
    },
    guideanceTxt: {
        fontSize: 16,
        color: 'gray',
        marginTop: 12,
        marginBottom: 16
    },
    optionTxt: {
        fontSize: 14,
        color: 'black',
        alignSelf: 'center',
        fontWeight: '500',
        marginVertical: 24
    },
    clickableTxt: {
        color: 'red'
    },
    headerTxt: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black'
    },
    headerContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 24
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    }
})

export default styles;