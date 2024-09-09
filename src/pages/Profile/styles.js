import styled from "styled-components/native";

export const Container = styled.View `
    flex: 1;
    align-items: center;
`;

export const Name = styled.Text `
    text-align: center;
    font-size: 28px;
    margin-top: 25px;
    margin-bottom: 25px;
    font-weight: bold;
`;

export const NewLink = styled.TouchableOpacity `
    justify-content: center;
    align-items: center;
    background-color: #f47f1a;
    width: 90%;
    height: 45px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const NewText = styled.Text `
    font-size: 18px;
    color: #fff;
`;

export const Logout = styled.TouchableOpacity `
    justify-content: center;
    align-items: center;
    background-color: #b9b9b9;
    width: 90%;
    height: 45px;
    border-radius: 10px;
`;

export const LogoutText = styled.Text `
    font-size: 18px;
    color: #fff;
`; 