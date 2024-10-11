import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function Resultado(props) {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('../assets/gas.png')}
                />
                <Text style={[styles.txtBold, styles.txtLarge, {
                    color: '#00ff00',
                    marginBottom: 20
                }]}>
                    Compensa usar Álcool
                </Text>
                <Text style={[styles.txtBold, styles.txtMedium, { marginVertical: 7 }]}>
                    Com os preços:
                </Text>
                <Text style={[styles.txtSmall, { color: 'white', marginVertical: 7 }]}>
                    Álcool: R$ 4.60
                </Text>
                <Text style={[styles.txtSmall, { color: 'white', marginVertical: 7 }]}>
                    Gasolina: R$ 7.60
                </Text>
                <TouchableOpacity
                    style={styles.btnOutline}
                    onPress={props.close}
                >
                    <Text style={[styles.txtBold, styles.txtSmall, { color: '#ef4130' }]}>
                        Calcular Novamente
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
    },
    header: {
        marginVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        padding: 15
    },
    logo: {
        margin: 20
    },
    txtBold: {
        color: 'white',
        fontWeight: 'bold'
    },
    txtSmall: {
        fontSize: 14
    },
    txtMedium: {
        fontSize: 19
    },
    txtLarge: {
        fontSize: 24
    },
    input: {
        height: 45,
        backgroundColor: 'white',
        borderRadius: 7,
        marginBottom: 10,
        paddingLeft: 20,
        fontWeight: '500'
    },
    btnOutline: {
        height: 35,
        marginVertical: 10,
        paddingHorizontal: 40,
        borderWidth: 1,
        borderColor: '#ef4130',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
