import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Background = styled.View`
    flex: 1;
`

export const Logo = styled.Image`
     width: 300px;
     height: 300px;
     margin-top: -150px;
`

export const AreaInput = styled.View`
    flex-direction: row;
    justify-content: center;
    width: 100%;
`

export const Input = styled.TextInput`
    background-color: rgba(0,0,0,0.1);
    width: 90%;
    height: 50px;
    font-size: 17px;
    color: rgba(0,0,0,0.5);
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 10px;
`

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #f47f1a;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`

export const SubmitText = styled.Text`
    font-size: 20px;
    color: white;
`


export const Link = styled.TouchableOpacity`
    margin-top: 8px;
    margin-bottom: 9px;
`

export const LinkText = styled.Text`
    font-size: 16px;
`
