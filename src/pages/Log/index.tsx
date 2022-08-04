
import { Container, Header, UserInfo, User, UserTitle, Content,InputTitle,IconEventypo, IconMaterialCommunityIcons, IconFeather,  Span, ButtonEffect, TextButton } from "./styled";

import { useFonts, Roboto_700Bold, Roboto_400Regular }from'@expo-google-fonts/roboto'

import AppLoading from 'expo-app-loading'



export function Log(){
    const [ fontsloader ] = useFonts({
        Roboto_700Bold,
        Roboto_400Regular 
    });

    if(!fontsloader){
        return <AppLoading/>
    }//const fim fontes

    return(
        <Container>

            <Header>
                <UserInfo>
                <IconEventypo name="code" />
                </UserInfo>
            </Header>

            <Content>

                <Span>
                    <UserTitle>Acesse sua Conta</UserTitle>
                </Span>

                <User>
                    <InputTitle>
                        <IconMaterialCommunityIcons name='email-outline'/>
                     Email
                    </InputTitle>
                </User>

                <User>
                    <InputTitle>
                    <IconFeather name="user"/> Senha
                    </InputTitle>
                </User>
                <ButtonEffect>
                    <TextButton> Entrar </TextButton>
                </ButtonEffect>
            </Content>
        </Container>
    )  
}