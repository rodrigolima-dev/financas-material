import { useContext, useState } from "react";
import {Background, Container, Logo, AreaInput, Input, SubmitButton, Link, LinkText, SubmitText} from "./styles"
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../../contexts/auth'
import { Alert } from "react-native";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  function hangleLogin() {
    console.log(user.name)
  }

  return (
    <Background>
          <Container>
            <Logo source={require("../../assets/Logo.png")}/>

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
              />
              
            </AreaInput>

            <SubmitButton onPress={() => hangleLogin()}>
              <SubmitText>Acessar</SubmitText>
            </SubmitButton>

            <Link onPress={() => navigation.navigate('SignUp')}>
              <LinkText>Criar uma conta</LinkText>
            </Link>
          </Container>
    </Background>
    );
}