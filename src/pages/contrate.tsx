import * as React from "react";
import { Layout } from "../components/layout";
import { Block } from "../components/block";
import { GetInTouchCard } from "../components/get_in_touch";
import { Stack } from "office-ui-fabric-react/lib/Stack";

const Contrate = () => {
  return (
    <Layout selectedKey="contrate">
      <Block
        bgColor="green"
        title="Tenha um ponto de recolha no seu estabalecimento"
        subtitle="Deixa a gente reciclar seu lixo e recebe prêmios das empresas parceiras!"
      />
      <Block
        bgColor="white"
        title="Como funciona?"
        subtitle="bla bla bla bla bla bla"
      />
      <Stack
        tokens={{ padding: "m", childrenGap: "m" }}
        horizontalAlign="center"
        style={{
          width: "100%",
          paddingTop: 32,
          paddingBottom: 32,
        }}
      >
        <GetInTouchCard />
      </Stack>
    </Layout>
  );
};

export default Contrate;
