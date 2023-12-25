import { StyleSheet, TextInput, View, Text } from "react-native"


const AuthInput = ({placeholder, value, onValueChange, label}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor="gray"
            value={value}
            onChangeText={onValueChange}
        />
        <View
            style={styles.horizontalLine}
        />
    </View>
  )
}

export default AuthInput

const styles = StyleSheet.create({
    container: {

    },
    horizontalLine: {
        height: 0.6,
        backgroundColor: 'gray'
    },
    label: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 4
    },
    textInput: {
        marginVertical: 8,
        fontSize: 16,
        fontWeight: '400'
    }
})