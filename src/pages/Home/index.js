import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Background, Container, Name, Sale, Title, List } from './styles'

import HistoryList from '../../components/HistoryList';
import Header from '../../components/Header';


export default function Home() {
  const { user } = useContext(AuthContext)
  const [ history, setHistory ] = useState([
    {key: '1', type: 'receita', value: 1200},
    {key: '2', type: 'despesa', value: 200},
    {key: '3', type: 'receita', value: 500},
    {key: '4', type: 'despesa', value: 1000},
  ])

  return (
    <Background>
          <Header/>
          
          <Container>
            <Name> { user && user.name} </Name>
            <Sale> R$ 123,00 </Sale>
          </Container>

          <Title> Ultimas movimentações </Title>

          <List
          showsVerticalScrollIndicator={false}
          data={history}
          keyExtractor={ item => item.key }
          renderItem={({item}) => (<HistoryList data={item}/>) }
          />
    </Background>
    );
}