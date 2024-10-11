import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Resultado from './src/Resultado';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
        />
        <Text style={[styles.txtBold, styles.txtLarge]}>Qual melhor opção?</Text>
      </View>
      <View style={styles.form}>
        <Text style={[styles.txtBold, styles.txtSmall, { marginVertical: 7 }]}>
          Álcool (preço por litro):
        </Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
        />
        <Text style={[styles.txtBold, styles.txtSmall, { marginVertical: 7 }]}>
          Gasolina (preço por litro):
        </Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
        />
        <TouchableOpacity
          style={styles.btnSolid}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={[styles.txtBold, styles.txtLarge]}>
            Calcular
          </Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <Resultado close={() => { setModalVisible(false); }} />
      </Modal>
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
  btnSolid: {
    height: 50,
    marginVertical: 10,
    backgroundColor: '#ef4130',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
