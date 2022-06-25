import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo'
// import { Header } from '../../components/Header'

import * as S from './style'

const CREATE_SUBSCRIBER_MUTATION = gql`
    mutation CreateSubscriber ($name: String!, $email: String!) {
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}

`

export function Home() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

    async function handleSubscribe(event) {
        event?.preventDefault()

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/activities')
    }

    return (
        <S.Page>
            {/* <Header /> */}
            <S.HeroContainer>
                <S.HeroContent>
                    <Logo />
                    <S.HeroTitle>
                        Construa uma <strong style={{ color: '#81D8F7' }}>aplicação completa</strong>, do zero, com <strong style={{ color: '#81D8F7' }}>React JS</strong>
                    </S.HeroTitle>
                    <S.HeroSubtitle>
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </S.HeroSubtitle>
                </S.HeroContent>
                <S.FormContainer>
                    <S.FormSpan>
                        Inscreva-se gratuitamente
                    </S.FormSpan>
                    <S.Form onSubmit={handleSubscribe}>
                        <S.Input
                            onChange={event => setName(event.target.value)}
                            type="text"
                            placeholder="Seu nome completo"
                        >
                        </S.Input>
                        <S.Input
                            onChange={event => setEmail(event.target.value)}
                            type="email"
                            placeholder="Digite seu e-mail"
                        >
                        </S.Input>
                        <S.FormBtn
                            type="submit"
                            disabled={loading}
                        >
                            Garantir minha vaga
                        </S.FormBtn>
                    </S.Form>
                </S.FormContainer>
            </S.HeroContainer>
            <S.MockupImg src="/src/assets/images/code-mockup.png" />
        </S.Page>
    )
}