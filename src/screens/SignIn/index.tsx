import React, { useContext } from "react";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/apple.svg";
import LogoSvg from "../../assets/apple.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { useAuth } from "../../hooks/auth";
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";
import { SignInSocialButton } from "../../components/SignInSocialButton";
const {user} = useAuth();
export function SignIn() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg height={RFValue(120)} width={RFValue(68)} />
          <Title>
            Controle suas {"\n"} finanças de forma {"\n"} muito simples
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com {"\n"} uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton title="Entar com Google" svg={GoogleSvg} />
          <SignInSocialButton title="Entar com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
