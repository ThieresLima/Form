import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background: linear-gradient( to right, rgba(39, 100, 154), rgb(137, 26, 26));
    max-width: 100vw;
    height: 750px;
    justify-content: center;
`;

export const Main = styled.div`
    display: flex;
    background-color: #FFFFFF;
    align-items: center;
    width: 960px;
    height: 650px;
    margin-top: 20px;
    border-radius: 5px;
`;

export const Image = styled.img`
    width: 500px;
    height: 650px;
    border-radius: 5px;
`;

export const ContainerLogin = styled.div`
    width: 470px;
    height: 420px;
    text-align: center;
`;

export const Login = styled.div`
    display: flex;
    width: 300px;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    padding: 5px;
`;

export const LoginText = styled.h1`
    font-family: sans-serif;
    padding-bottom: 50px;
    text-align: center;
    color: #333333;
    font-size: 28px;
`;

export const LoginInput = styled.input`
    width: 300px;
    color: #938f8f;
    font-weight: bold;
    font-size: 14px;
    border-radius: 30px;
    padding: 18px;
    text-indent: 48px;
    border: 0 none;
    outline: 0;
    background-color: #E6E6E6;
`;

export const Icon = styled.span`
    position: absolute;
    padding: 18px;
    margin-left: 16px;
`;

export const LoginContainer = styled.div`
    margin-top: 30px;
    width: 300px;
    padding: 18px;
    margin-left: 87px;
    background: linear-gradient( to right, rgba(39, 100, 154), rgb(137, 26, 26));
    border-radius: 30px;
`;

export const Text = styled.p`
    font-family: sans-serif;
    text-transform: uppercase;
    color: #FFF;
    font-size: 16;
    font-weight: bold;
`;

export const TextSpan = styled.p`
    font-family: sans-serif;
    color: #666666;
    font-size: 14px;
    font-weight: bold;
    padding: 14px;
`;

export const CreateAccContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
    margin-top: 80px;
`;

export const CreateAcc = styled.p`
    font-family: sans-serif;
    color: #666666;
    font-size: 14px;
    font-weight: bold;
    padding-right: 3px;
`;