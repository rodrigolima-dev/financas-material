import { View } from 'react-native';
import { Container, ButtonMenu } from './styles'
import { useNavigation } from '@react-navigation/native';

import Icon from '@expo/vector-icons/Feather'

export default function Header() {
    const navigation = useNavigation();

    return (
    <Container>
            <ButtonMenu onPress={() => navigation.toggleDrawer()}>
                <Icon name='menu' color={'#fff'} size={30}/>
            </ButtonMenu>
    </Container>
  );
}