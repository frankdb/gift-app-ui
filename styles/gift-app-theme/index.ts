import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const giftAppTheme = extendTheme(
  withDefaultColorScheme({ colorScheme: "purple" })
);

export default giftAppTheme;
