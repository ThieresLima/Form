import React from 'react';
import {
    Container,
    Main,
    Image,
    ContainerLogin,
    Login,
    LoginText,
    LoginInput,
    Icon,
    LoginContainer,
    Text,
    TextSpan,
    CreateAcc,
    CreateAccContainer
} from './styles';

import img from '../../img/photo.jpeg';

import { MdEmail, MdLock, MdArrowForward } from 'react-icons/md';

function Form() {
    return (
        <Container>
            <Main>
                <Image src={img} />

                <ContainerLogin>
                    <LoginText>Member Login</LoginText>

                    <Login>
                        <LoginInput type="text" placeholder="Email" />
                        <Icon>
                            <MdEmail color="#666666" />
                        </Icon>
                    </Login>

                    <Login>
                        <LoginInput type="text" placeholder="Password" />
                        <Icon>
                            <MdLock color="#666666" />
                        </Icon>
                    </Login>

                    <LoginContainer>
                        <Text>Login</Text>
                    </LoginContainer>

                    <TextSpan>Forgot Username / Password? </TextSpan>

                    <CreateAccContainer>
                        <CreateAcc>Create your Account</CreateAcc>
                        <MdArrowForward />
                    </CreateAccContainer>

                </ContainerLogin>
            </Main>
        </Container>
    );
};

export default Form;