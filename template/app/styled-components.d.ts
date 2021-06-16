import "styled-components";

declare module "styled-components" {
  export interface Colors {
    primary: string;
    onPrimary: string;
    background: string;
    onBackground: string;
  }

  export interface DefaultTheme {
    dark?: boolean;
    colors: Colors;
  }
}
