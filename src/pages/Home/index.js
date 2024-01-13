import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';

const list = [
  {
    id: 1,
    boleto: 'Boleto da Conta Luz',
    value: '300,90',
    date: '17/09/2023',
    type: 0 // despesas
  },
  {
    id: 2,
    boleto: 'Pix cliente X',
    value: '1080,00',
    date: '08/05/2023',
    type: 1 // receitas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Lucas Baggio'/>
      <Balance saldo='9000,00' gastos='-500,00' />

      <Text style={styles.title}>Últimas Movimentações</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14
  }
});
