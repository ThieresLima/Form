import React from 'react';
import { Container, Main, Image } from './styles';
import img from '../../img/photo.jpeg';

function Form() {
    return (
        <Container>
            <Main>
                <Image src={img} />
            </Main>
        </Container>
    );
};

export default Form;