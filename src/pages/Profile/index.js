import React from 'react';
import { Container, Name, NewLink, NewText, Logout, LogoutText } from './styles';

export default function New() {
 return (
   <Container>
        <Name>Fulano</Name>
        <NewLink>
            <NewText>Registrar gastos</NewText>
        </NewLink>

        <Logout>
            <LogoutText>Sair</LogoutText>
        </Logout>
   </Container>
  );
}