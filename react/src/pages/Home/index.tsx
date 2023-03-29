import styled from "styled-components";

import { Navbar } from "../../components/Navbar";
import { Resume } from "../../components/Resume";

export function Home() {
    return (
        <div>
            <Banner>
                <Navbar />
                <Resume />
            </Banner>
        </div>
    )
}

const Banner = styled.div`
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;