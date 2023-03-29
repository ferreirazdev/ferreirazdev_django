import styled from "styled-components";

import { Navbar } from "../../components/Navbar";
import { Resume } from "../../components/Resume";

export function Home() {
    return (
        <>
            <Banner>
                <Navbar />
                <Resume />
            </Banner>
        </>
    )
}

const Banner = styled.div`
  height: 100vh;
  margin-bottom: -100px;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;