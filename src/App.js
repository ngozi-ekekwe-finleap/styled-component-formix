import React from 'react';
import './index.css';
import Form from './Form';

import styled from 'styled-components';

const Title = styled.h1`
  color: #000000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-transform: uppercase;
  font-family: Open Sans;
`;

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  padding-bottom: 3rem;
`;

const Header = styled.header`
 min-height: 50px;
 background-color: #1b2638;
 width: 100%;
 color: white;
`

const Main = styled.main`
  width: 50%;
  max-width: 550px;
  margin: 5rem auto;
`

const Card = styled.div`
  height: 400px;
  padding: 30px;
  background-color: #FBFBFB;
`;


const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: #1b2638; 
  color: white; 
`

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <ContentWrapper>
          <Header>
          </Header>
          <Main>
            <Card>
              <Title>
                Please sign in
              </Title>
              <Form />
            </Card>
          </Main>
        </ContentWrapper>
        <Footer>
        </Footer>
      </PageWrapper>

    </div>
  );
}

export default App;
