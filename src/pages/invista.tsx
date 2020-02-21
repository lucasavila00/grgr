import * as React from "react";
import { Layout } from "../components/layout";
import { Block } from "../components/block";

const Invista = () => {
  return (
    <Layout selectedKey="invista">
      <Block
        bgColor="green"
        title="A gente tem o plano. Quer ajudar?"
        subtitle="bla bla bla bla"
      />
      <Block
        bgColor="white"
        title="Passo 1"
        subtitle="Recolha do lixo"
      />
      <Block
        bgColor="green"
        title="Passo 2"
        subtitle="Separação do lixo"
      />
      <Block
        bgColor="white"
        title="Passo 3"
        subtitle="End-to-end"
      />
    </Layout>
  );
};

export default Invista;
