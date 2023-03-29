import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { AiFillHdd, AiFillLayout } from "react-icons/ai";
import styled from "styled-components";
import Card from "./card";
import { Slide } from "react-awesome-reveal";

export function Services() {
    return (
        <Container id="service">
            <Slide direction="down">
                <h4>
                meus <span className="green">serviços</span>
                </h4>
                <h1>Como posso te ajudar?</h1>
            </Slide>
            <Cards>
                <Slide direction="left">
                <Card
                    Icon={AiFillLayout}
                    title={"Landing Pages"}
                    disc={`Sites institucionais (como este que você está agora) 
                        sobre serviços empresariais/pessoais que deseja apresentar
                        ao mundo.`}
                />
                </Slide>
                <Slide direction="up">
                <Card
                    Icon={FiCodesandbox}
                    title={"Web Applications"}
                    disc={`Sistemas web complexos com implementação de regras particulares 
                        ao seu negócio/projeto, junto a processamento e armazenamento de dados.
                        Ex: Lojas Virtuais, Redes Sociais...`}
                />
                </Slide>
                <Slide direction="right">
                <Card
                    Icon={AiFillHdd}
                    title={"Services"}
                    disc={`Serviços isolados, mais voltados ao backend, que envolvem processamentos de dados.
                            Ex: Microservices, Web Services, CLI App, Chatbot, Web Scraper...`}
                />
                </Slide>
            </Cards>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  color: #fff;
  background: #191923;
  margin: 0 auto;
  padding: 3rem 6rem;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    padding-top: 1rem;
    font-size: 1.5rem;
  }
  h4 {
    font-weight: 500;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;