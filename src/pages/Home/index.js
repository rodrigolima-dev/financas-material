import { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { Background, Container, Name, Sale, Title, List } from './styles'

import Header from '../../components/Header';


export default function Home() {
  const { user } = useContext(AuthContext)
  const [ history, setHistory ] = useState([
    {key: '1', type: 'receita', valor: 1200},
    {key: '2', type: 'despesa', valor: 200},
    {key: '3', type: 'receita', valor: 500},
    {key: '4', type: 'despesa', valor: 1000},
  ])

  return (
    <Background>
          <Header/>
          
          <Container>
            <Name> Fulano </Name>
            <Sale> R$ 123,00 </Sale>
          </Container>

          <Title> Ultimas movimentações </Title>

          <List
          />
    </Background>
    );
}