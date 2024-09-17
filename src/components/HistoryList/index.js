import { View, Text } from 'react-native';
import { Container, Type, IconView, TypeText, ValueText } from './styles'

import Icon from '@expo/vector-icons/Feather'

export default function HistoryList({data}) {
 return (
   <Container>
        <Type>
            <IconView type={data.type}>
                <Icon 
                name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
                color="#fff" 
                size={20}
                />

                <TypeText>{data.type}</TypeText>
            </IconView>
        </Type>

        <ValueText>
            R$ {data.value}
        </ValueText>
   </Container>
  );
}