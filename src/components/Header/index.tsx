
    import logoImg from "../../assets/download/assets/logo.svg";
    import { Container, Content } from "./styles";
    
    export function Header(){

        return(
            <Container>
                <Content>
                    <img src={logoImg} alt="Dt Money Logo" />
                    <button>
                        Nova Transação
                    </button>
                </Content>
            </Container>
        );
    }