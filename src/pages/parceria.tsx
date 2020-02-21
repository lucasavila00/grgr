import * as React from "react";
import { Layout } from "../components/layout";
import { Block } from "../components/block";

const Parceria = () => {
  return (
    <Layout selectedKey="parceria">
      <Block
        bgColor="green"
        title="Incentive seus clientes a salvar o mundo"
        subtitle="A gente cuida de tudo!"
      />
      <Block
        bgColor="white"
        title="Que prêmios posso oferecer?"
        subtitle="bla bla bla bla"
      />
    </Layout>
  );
};

export default Parceria;
