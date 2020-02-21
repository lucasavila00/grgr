import * as React from "react";
import { Layout } from "../components/layout";
import { Block } from "../components/block";

const Index: React.FunctionComponent = () => {
  return (
    <Layout selectedKey="sobre">
      <Block
        bgColor="green"
        title="Tecnologia pra salvar o mundo"
        subtitle="Deixa a gente reciclar seu lixo e recebe prêmios das empresas parceiras!"
      />
      <Block
        bgColor="white"
        title="Como funciona?"
        subtitle="Entregue o lixo e seja reconhecido e receba prêmios"
      />
      <Block
        bgColor="green"
        title="Quais são os prêmios?"
        subtitle="bla bla bla bla"
      />
    </Layout>
  );
};

export default Index;
