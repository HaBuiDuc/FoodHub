import { View } from "react-native";

const RadioButton = ({ selected }) => {
    return (
        <View style={[{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: (selected) ? 'red' : 'gray',
            alignItems: 'center',
            justifyContent: 'center',
        }]}>
            {
                selected ?
                    <View style={{
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        backgroundColor: 'red',
                    }} />
                    : null
            }
        </View>
    );
}

export default RadioButton;