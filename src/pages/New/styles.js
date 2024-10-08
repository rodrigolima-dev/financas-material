import styled from "styled-components/native";

export const Background = styled.View`
    flex: 1;
    background-color: #f47f1a;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#222'
})`
    height: 50px;
    width: 90%;
    background-color: rgba(255,255,255, 0.9);
    margin-top: 30px;
    font-size: 15px;
    padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
`;

export const SubmitText = styled.Text`
    font-size: 17px;
    color: #fff;
`;