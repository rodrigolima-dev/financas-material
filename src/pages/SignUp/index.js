import { useContext, useState } from "react";
import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText} from "../SignIn/styles"
import { AuthContext } from "../../contexts/auth";
import { ActivityIndicator } from "react-native-web";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const { signUp, loadingAuth } = useContext(AuthContext); 

  function handleSignUp () {
    signUp(email, password, name)
  }
  
  return (
    <Background>
          <Container>
            <AreaInput>
              <Input
              placeholder="Nome"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(text) => setName(text)}
              />
              
            </AreaInput>

            <AreaInput>
              <Input
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
              />
              
            </AreaInput>

            <AreaInput>
              <Input
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              />
              
            </AreaInput>

            <SubmitButton onPress={handleSignUp}>
              { loadingAuth ? (
                  <ActivityIndicator size={20} color='#fff'/>
                ) : (
                  <SubmitText>Criar conta</SubmitText>
                )
              }
              </SubmitButton>
          </Container>
    </Background>
    );
}