import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 16
    },
    centerImage: {
        width: 320,
        height: 320,
    },
    slogan: {
        fontSize: 24,
        fontWeight: 'medium',
        textAlign: 'center',
        marginTop: 20
    },
    txt: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        textAlign: 'center',    
        fontWeight: 'light',
    },
    appLogo: {
        width: 160,
        resizeMode: 'contain',
    }
})

export default styles;