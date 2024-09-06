import { useState } from "react";
import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText} from "../SignIn/styles"

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  

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
              />
              
            </AreaInput>

            <SubmitButton>
              <SubmitText>Criar conta</SubmitText>
            </SubmitButton>
          </Container>
    </Background>
    );
}