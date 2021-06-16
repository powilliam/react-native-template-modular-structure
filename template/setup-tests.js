jest.mock("react-native-android-navigation-bar", () => {
  return { changeColor: () => {} };
});

jest.useFakeTimers();
