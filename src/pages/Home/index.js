import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Background, Container, Name, Sale, Title, List } from './styles'
import { onValue,orderByChild,query,ref, remove, update } from 'firebase/database';
import { database } from '../../services/firebaseConnection'

import HistoryList from '../../components/HistoryList';
import Header from '../../components/Header';

export default function Home() {
  const [ history, setHistory ] = useState([]);
  const [ sale, setSale ] = useState(0);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(() => {
    async function loadList() {
      await onValue(ref(database, `users/${uid}`), (snapshot) => {
        setSale(snapshot.val().sale);
      });

      // Carregar o histórico com ordem pela data
      let historyRef = query(ref(database, `history/${uid}`), orderByChild('date'));
      
      await onValue(historyRef, (snapshot) => {
        let historyArray = []
        
        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            type: childItem.val().type,
            value: childItem.val().value,
            date: childItem.val().date
          };

          historyArray.unshift(list); // Adiciona no início para ordem decrescente

        });
        setHistory(historyArray);
      });
    }



    loadList();

  },[])

  async function handleDelete(data) {
    const userConfirmed = 
    window.confirm(`Você deseja excluir ${data.type} - Valor: ${data.value}?`);

    if(userConfirmed) {
      const recordRef = ref(database, `history/${uid}/${data.key}`);
      const usersRef = ref(database, `users/${uid}`);

      await remove(recordRef)
      .then(async () => {
        let currentSale = sale;

        data.type === 'despesa' ? currentSale += parseFloat(data.value) : 
        currentSale -= parseFloat(data.value)
  
        await update(usersRef, {
          sale: currentSale
        })
      })
      .catch((error) => {
        window.alert(error)
      })

      return;
    }

    return;
  }



  return (
    <Background>
          <Header/>
          
          <Container>
            <Name> { user && user.name} </Name>
            <Sale> R$ { sale.toFixed(2) }</Sale>
          </Container>

          <Title> Ultimas movimentações </Title>

          <List
          showsVerticalScrollIndicator={false}
          data={history}
          keyExtractor={ item => item.key }
          renderItem={({item}) => (<HistoryList data={item} deleteItem={handleDelete}/>) }
          />
    </Background>
    );
}