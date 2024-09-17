import { Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background, Input, SubmitButton, SubmitText} from './styles'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { onValue, push, ref, update } from 'firebase/database';
import { database } from '../../services/firebaseConnection';

import Header from '../../components/Header';
import Picker from '../../components/Picker/index.android';
import { useNavigation } from '@react-navigation/native';

export default function New() {
  const [value, setValue] = useState('');
  const [type, setType] = useState('receita');
  const navigation = useNavigation();

  const { user } = useContext(AuthContext)

  async function handleSubtmit() {
    Keyboard.dismiss();
    if(isNaN(parseFloat(value)) || type === null) {
      window.alert('preencha todos os campos');
      return;
    }
    
    //Pegando uid do context.
    let uid = user.uid

    await push(ref(database,`history/${uid}`), {
      type: type,
      value: parseFloat(value),
    })

    //Atualizando saldo
    let userRef = ref(database, `users/${uid}`)
    onValue(userRef, (snapshot) => {
      let sale = parseFloat(snapshot.val().sale)
      type === 'receita' ? sale += parseFloat(value) : sale -= parseFloat(value)

      update(userRef, {
        sale: sale
      })
      .then(() => {
        setValue('')
        Keyboard.dismiss();
        navigation.navigate('Home')
      })
    }, {
      onlyOnce: true
    })
  
  }

  return (
    <Background>
        <Header/>

        <SafeAreaView style={{alignItems: 'center'}}>
          <Input
          placeholder="Valor desejado"
          keyboardType='numeric'
          returnKeyType='next'
          onSubmitEditing={() => Keyboard.dismiss()}
          value={value}
          onChangeText={(text) => setValue(text)}
          />

          <Picker onChange={setType} type={type}/>

          <SubmitButton onPress={handleSubtmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>

        </SafeAreaView>

    </Background>
  );
}