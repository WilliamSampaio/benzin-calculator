import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Resultado from './src/Resultado';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [valorAlcool, setValorAlcool] = useState('');
  const [valorGasolina, setValorGasolina] = useState('');
  const [resultado, setResultado] = useState({});

  const calcular = () => {
    if (valorAlcool.length == 0 || valorGasolina.length == 0) {
      alert('Informe o valor do litro do Álcool/Gasolina!');
      return;
    }
    let alcool = parseFloat(valorAlcool.replace(',', '.'));
    let gasolina = parseFloat(valorGasolina.replace(',', '.'));
    if (alcool / gasolina < 0.7) {
      setResultado({
        text: 'Álcool',
        valorAlcool: alcool.toFixed(2).replace('.', ','),
        valorGasolina: gasolina.toFixed(2).replace('.', ','),
      });
      setModalVisible(true);
    } else {
      setResultado({
        text: 'Gasolina',
        valorAlcool: alcool.toFixed(2).replace('.', ','),
        valorGasolina: gasolina.toFixed(2).replace('.', ','),
      });
      setModalVisible(true);
    }
  }

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
          onChangeText={(v) => setValorAlcool(v.replace(/[^,0-9]+/g, ''))}
          value={valorAlcool}
        />
        <Text style={[styles.txtBold, styles.txtSmall, { marginVertical: 7 }]}>
          Gasolina (preço por litro):
        </Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          onChangeText={(v) => setValorGasolina(v.replace(/[^,0-9]+/g, ''))}
          value={valorGasolina}
        />
        <TouchableOpacity
          style={styles.btnSolid}
          onPress={calcular}
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
        <Resultado data={resultado} close={() => { setModalVisible(false); }} />
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
