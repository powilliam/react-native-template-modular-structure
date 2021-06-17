import React from "react";
import { SafeAreaView, StatusBar, Pressable } from "react-native";

import { ThemeProvider, ThemeConsumer } from "app/shared/contexts";
import { dark, light } from "app/shared/themes";
import { View, Text } from "app/shared/components";

export function AppModule() {
  return (
    <ThemeProvider observeChanges light={light} dark={dark}>
      <View
        flex={1}
        as={SafeAreaView}
        flexDirection="column"
        p="16px"
        alignItems="center"
        justifyContent="center"
        bg="background"
      >
        <ThemeConsumer>
          {({
            theme: {
              dark,
              colors: { background },
            },
            toggle,
          }) => (
            <React.Fragment>
              <StatusBar
                backgroundColor={background}
                barStyle={dark ? "light-content" : "dark-content"}
              />

              <Text fontSize="16px" letterSpacing="0.6px" color="onBackground">
                Hello World
              </Text>

              <View mt="14px">
                <Pressable onPress={toggle}>
                  <Text
                    fontSize="14px"
                    letterSpacing="1.25px"
                    color="primary"
                    fontWeight="bold"
                  >
                    {`toggle theme`.toUpperCase()}
                  </Text>
                </Pressable>
              </View>
            </React.Fragment>
          )}
        </ThemeConsumer>
      </View>
    </ThemeProvider>
  );
}
