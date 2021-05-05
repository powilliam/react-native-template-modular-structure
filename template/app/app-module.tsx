import React from "react";
import { SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { ThemeConsumer } from "styled-components/native";

import { ThemeProvider } from "app/shared/contexts";
import { dark, light } from "app/shared/themes";
import { View, Text } from "app/shared/components";

const theme = {
  dark,
  light,
  fallback: light,
};

export function AppModule() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={theme}>
      <ThemeConsumer>
        {({ colors: { background } }) => (
          <View
            flex={1}
            as={SafeAreaView}
            flexDirection="column"
            p="16px"
            alignItems="center"
            justifyContent="center"
            bg="background"
          >
            <StatusBar
              backgroundColor={background}
              barStyle={
                colorScheme === "light" ? "dark-content" : "light-content"
              }
            />

            <Text fontSize="16px" letterSpacing="0.6px" color="onBackground">
              Hello World
            </Text>
          </View>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  );
}
