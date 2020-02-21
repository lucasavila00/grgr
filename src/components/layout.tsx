import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/Stack";
import "./normalize.css";
import "./layout.css";
import {
  createTheme,
  loadTheme,
  getTheme,
} from "office-ui-fabric-react/lib/Styling";
import { Helmet } from "react-helmet";
import { Text } from "office-ui-fabric-react/lib/Text";
import { Link } from "gatsby";
import {
  Pivot,
  PivotItem,
  PivotLinkSize,
  IPivotItemProps,
} from "office-ui-fabric-react/lib/Pivot";

const globalTheme = createTheme({
  palette: {
    themePrimary: "#0b8a00",
    themeLighterAlt: "#f1faf0",
    themeLighter: "#caecc6",
    themeLight: "#9fdc9a",
    themeTertiary: "#53b94a",
    themeSecondary: "#1d9812",
    themeDarkAlt: "#0a7c00",
    themeDark: "#096900",
    themeDarker: "#064d00",
    neutralLighterAlt: "#faf9f8",
    neutralLighter: "#f3f2f1",
    neutralLight: "#edebe9",
    neutralQuaternaryAlt: "#e1dfdd",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c6c4",
    neutralTertiary: "#a19f9d",
    neutralSecondary: "#605e5c",
    neutralPrimaryAlt: "#3b3a39",
    neutralPrimary: "#323130",
    neutralDark: "#201f1e",
    black: "#000000",
    white: "#ffffff",
  },
});

const pivotTheme = createTheme({
  palette: {
    themePrimary: "#ffffff",
    themeLighterAlt: "#767676",
    themeLighter: "#a6a6a6",
    themeLight: "#c8c8c8",
    themeTertiary: "#d0d0d0",
    themeSecondary: "#dadada",
    themeDarkAlt: "#eaeaea",
    themeDark: "#f4f4f4",
    themeDarker: "#f8f8f8",
    neutralLighterAlt: "#517c4d",
    neutralLighter: "#507a4c",
    neutralLight: "#4c7549",
    neutralQuaternaryAlt: "#476d44",
    neutralQuaternary: "#446841",
    neutralTertiaryAlt: "#41643e",
    neutralTertiary: "#c8c8c8",
    neutralSecondary: "#d0d0d0",
    neutralPrimaryAlt: "#dadada",
    neutralPrimary: "#ffffff",
    neutralDark: "#f4f4f4",
    black: "#f8f8f8",
    white: "#53804f",
  },
});
loadTheme(globalTheme);

const onRenderItemLink = (to: string) => (
  props?: IPivotItemProps,
) => {
  if (props == null) {
    throw Error("n tem props");
  }
  const { headerText } = props;
  return (
    <Link
      to={to}
      style={{
        textDecoration: "none",
        color: getTheme().palette.white,
        outline: "none",
      }}
    >
      {headerText}
    </Link>
  );
};

type pageKeys =
  | "sobre"
  | "invista"
  | "contrate"
  | "parceria";
const getUrl = (k: pageKeys): string => {
  switch (k) {
    case "sobre": {
      return "/";
    }

    default: {
      return "/" + k;
    }
  }
};
const getHeaderText = (k: pageKeys): string => {
  switch (k) {
    case "sobre": {
      return "Sobre";
    }

    case "invista": {
      return "Invista";
    }
    case "contrate": {
      return "Contrate";
    }
    case "parceria": {
      return "Parceria";
    }
  }
};
const ConfiguredPivotItem = (pageKey: pageKeys) => {
  const headerText = getHeaderText(pageKey);
  const url = getUrl(pageKey);
  return (
    <PivotItem
      headerText={headerText}
      itemKey={pageKey}
      onRenderItemLink={onRenderItemLink(url)}
    ></PivotItem>
  );
};

export const Layout: React.FunctionComponent<{
  selectedKey: pageKeys | null;
}> = ({ children, selectedKey }) => {
  const title = "LOGO";
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <title>{title}</title>
      </Helmet>

      <Stack
        horizontalAlign="center"
        style={{
          width: "100%",
          overflow: "auto",
        }}
        tokens={{ padding: "m" }}
      >
        <Stack
          style={{
            maxWidth: 768,
            width: "100%",
          }}
          verticalAlign="center"
          horizontal={true}
          tokens={{ childrenGap: "m" }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            <Text
              variant="large"
              style={{
                color: getTheme().palette.white,
                fontWeight: "bold",
              }}
            >
              {title}
            </Text>
          </Link>
          <div>
            <div
              style={{
                height: 24,
                width: 2,
                backgroundColor: getTheme().palette.white,
              }}
            />
          </div>

          <Pivot
            aria-label="Basic Pivot Example"
            selectedKey={selectedKey}
            theme={pivotTheme}
            linkSize={PivotLinkSize.normal}
          >
            {ConfiguredPivotItem("sobre")}
            {ConfiguredPivotItem("contrate")}
            {ConfiguredPivotItem("parceria")}
            {ConfiguredPivotItem("invista")}
          </Pivot>
        </Stack>
      </Stack>
      <Stack horizontalAlign="center">{children}</Stack>
      <Stack
        tokens={{ padding: "m", childrenGap: "s2" }}
        horizontalAlign="center"
        style={{
          width: "100%",
          paddingTop: 32,
          paddingBottom: 32,
        }}
      >
        <Text
          variant="tiny"
          style={{ color: getTheme().palette.white }}
        >
          Endereço nome sei lá o q
        </Text>
        <Text
          variant="tiny"
          style={{ color: getTheme().palette.white }}
        >
          Endereço nome sei lá o q
        </Text>
      </Stack>
    </>
  );
};
