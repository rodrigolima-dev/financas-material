import styled from "styled-components/native";


export const Background = styled.View `
    flex: 1;
    background-color: #f47f1a;
    font-family: sans-serif;
`;

export const Container = styled.View `
    margin-left: 15px;
    margin-bottom: 25px;
`;

export const Name = styled.Text `
    font-size: 19px;
    color: #fff;
    font-style: italic;
`;

export const Sale = styled.Text `
    margin-top: 5px;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
`;

export const Title = styled.Text `
    margin-left: 15px;
    color: #fff;
    margin-bottom: 10px;
`; 

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
}) `
    padding-top: 15px;
    background-color: #fff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-left: 8px;
    margin-right: 8px;
`;