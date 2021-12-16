import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';
import api from './src/services/api'


export default function App() {
  const [cardapio, setCardapio] =React.useState([])
  const [aparecer, setAparecer] = React.useState(false)
  const [identificador, setIdentificador] = React.useState('')
  let teste = [
  {nome: '123'},
  {nome: '124'},
  {nome: '125'},
  {nome: '126'},
  {nome: '127'},
  {nome: '128'},
  {nome: '129'},
  {nome: '123123'}]
  
  async function getCardapioApi(){
    const response = await api.get('/cardapio');
    setCardapio(response.data) 
  }
  
  useEffect(()=>{
    getCardapioApi();
  }, []);
  
  
  return (
    <View style={styles.container}>
      <FlatList 
      data={cardapio} 
      keyExtractor={item=> item.id}
      renderItem={({item})=>(
        <SafeAreaView>
          <TouchableOpacity style={styles.touch} onPress={()=> setIdentificador(item.id)}>
            <Text style={styles.nomeCardapio}>{item.nome}  </Text>
            <Text style={styles.precoCardapio}>{item.preco}</Text>
          </TouchableOpacity>
          {identificador == item.id && 
          <View style={styles.containerItem}>
            <Image style={styles.imagem} source={{uri: item.imagem}} />
            <Text style={styles.descricao}>{item.descricao}</Text> 
            <Text style={styles.ingredientes}>Ingredientes: {item.ingredientes}</Text> 
            <Text style={item.gluten == 'Sim' ? styles.comGluten : styles.semGluten}>{item.gluten == 'Sim' ? 'Contem Gluten' : 'Não Contem Gluten' }</Text> 
            <Text style={styles.calorias}>Calorias: {item.calorias}</Text> 
          </View>}
        </SafeAreaView>
      )} />
      <StatusBar style="auto"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#304d63',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  touch: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#304d63',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30
  },
  nomeCardapio: {
    color: 'white',
    fontSize: 22,
    fontWeight:'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
    
  },
  precoCardapio: {
    color: 'white',
    fontSize: 22,
    fontWeight:'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  comGluten: {
    backgroundColor: '#ed8975',
    width: 150,
    textAlign: 'center',
    borderRadius: 5,
    color: 'white'
  },
  semGluten: {
    backgroundColor: '#f2d096',
    width: 150,
    textAlign: 'center',
    borderRadius: 5,
    color: 'white'
  },
  calorias:{
    backgroundColor: '#8fb9aa',
    width: 150,
    textAlign: 'center',
    borderRadius: 5,
    color: 'white',
    alignSelf: 'flex-end',
    marginTop: -19
  },
  imagem: {
    width: 250,
    height: 200,
    borderRadius: 30,
    alignSelf: 'center'
  },
  descricao: {
    color: '#304d63',
    fontSize: 15,
    fontWeight:'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
  },
  ingredientes: {
    color: '#304d63',
    fontSize: 13,
    fontWeight:'bold',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
  },
  containerItem: {
    backgroundColor: '#b2e7e8',
    padding: 30,
    borderRadius: 30,
    width: 370
  }
});
