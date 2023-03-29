import styled from "styled-components";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import ProfileIMG from "../../assets/profile.jpg"

export function Resume() {
    return (
        <Container id="home">
            <Slide direction="left">
              <Texts>
                  <div className="title">
                    <h1 className="green">Flávio Ferreira</h1> 
                    <h4>(ferreirazdev)</h4>
                  </div>
                  <h3>Desenvolvedor Full Stack</h3>
                  <div className="description">
                    <p>
                        Atuando no mercado há mais de 2 anos, desenvolvendo projetos de alta escalabilidade, 
                        que impactam de milhões de usuários por ano. 
                    </p>
                    <p>
                        Utilizando sempre as melhores tecnologias e arquiteturas
                        do mercado para atingir os melhores resultados.
                    </p>
                    <p className="stack">
                        Stack: Golang, Django, React, AWS, Google Cloud, Docker, Kubernetes
                    </p>
                  </div>
                  
                  <button>Fale Comigo!</button>
                  <Social>
                      <div className="social-icons">
                          <span>
                            <a href="https://github.com/ferreirazdev">
                                <FaGithub />
                            </a>
                          </span>
                          <span>
                            <a href="https://www.linkedin.com/in/flavioferreiraz/">
                                <FaLinkedinIn />
                            </a>
                          </span>
                      </div>
                  </Social>
              </Texts>
            </Slide>
            <Slide direction="right">
              <Profile>
                  <img
                      src={ProfileIMG}
                      alt="profile"
                  />
              </Profile>
            </Slide>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 6rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: space-between;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  .title{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  h1 {
    font-size: 2rem;
    font-family: 'Secular One', sans-serif;
    letter-spacing: 2px;
    font-weight: 500;
  }
  h4 {
    font-weight: 500;
  }
  h3 {
    font-weight: 700;
    font-size: 1.2rem;
    padding-top: 1.2rem;
    padding-bottom: 0.5rem;
    text-transform: capitalize;
  }
  .description {
    margin-top: 0.5rem;
    max-width: 500px;
  }
  .stack {
    margin-top: 1.5rem;
    font-style: italic;
    text-decoration: underline;
  }
  p {
    line-height: 1.5em;
    margin-top: 1rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }
  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }
    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    border-radius: 50%;
    @media (max-width: 790px) {
      width: 20rem;
    }
    @media (max-width: 660px) {
      width: 18rem;
    }
    @media (max-width: 640px) {
      width: 100%;
    }
  }
  :hover img {
    transform: translateY(-10px);
  }
`;