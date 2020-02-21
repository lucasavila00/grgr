import * as React from "react";
import { Stack } from "office-ui-fabric-react/lib/components/Stack";
import { Text } from "office-ui-fabric-react/lib/components/Text";
import { getTheme } from "office-ui-fabric-react/lib/Styling";

const getBackgroundColor = (t: bgColorType): string => {
  switch (t) {
    case "green": {
      return "transparent";
    }
    case "white": {
      return "#fafafa";
    }
  }
};
const getTxtStyle = (
  t: bgColorType,
): React.CSSProperties => {
  switch (t) {
    case "green": {
      return {
        color: getTheme().palette.white,
      };
    }
    case "white": {
      return {};
    }
  }
};
type bgColorType = "green" | "white";
export const Block: React.FunctionComponent<{
  bgColor: bgColorType;
  title: string;
  subtitle: string;
}> = ({ bgColor, title, subtitle }) => {
  const backgroundColor = getBackgroundColor(bgColor);
  const txtStyle = getTxtStyle(bgColor);
  return (
    <Stack
      tokens={{ padding: "m", childrenGap: "m" }}
      horizontalAlign="center"
      style={{
        width: "100%",
        backgroundColor,
        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      <Text variant="xxLarge" style={txtStyle}>
        {title}
      </Text>
      <Text variant="large" style={txtStyle}>
        {subtitle}
      </Text>
      <Text
        style={{
          marginTop: 128,
          marginBottom: 128,
          color: "red",
        }}
      >
        foto...
      </Text>
    </Stack>
  );
};
