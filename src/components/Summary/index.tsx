
    import { Container } from "./styles";
    import iconImage from "../../assets/download/assets/income.svg";
    import outconImage from "../../assets/download/assets/outcome.svg";
    import totalImage from "../../assets/download/assets/total.svg";

    export function Summary(){

        return(
            <Container>
                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={iconImage} alt="Entradas" />
                    </header>
                    <strong>R$ 1000,00</strong>
                </div>
                <div>
                    <header>
                        <p>Saídas</p>
                        <img src={outconImage} alt="Saídas" />
                    </header>
                    <strong>R$ 500,00</strong>
                </div>
                <div className="highlight-background">
                    <header>
                        <p>Total</p>
                        <img src={totalImage} alt="Total" />
                    </header>
                    <strong>R$ 500,00</strong>
                </div>
            </Container>
        );
    }