import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import { ThemeProvider, ThemeConsumer } from "app/shared/contexts";
import { dark, light } from "app/shared/themes";
import { View, Text } from "app/shared/components";

export function AppModule() {
  return (
    <ThemeProvider light={light} dark={dark}>
      <ThemeConsumer>
        {({
          schema,
          theme: {
            colors: { background },
          },
        }) => (
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
              barStyle={schema === "light" ? "dark-content" : "light-content"}
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
