// import original module declarations
import "styled-components";
// and extend them!

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    bodyBackgroundColor: string;
    textColor: string;
    lightTextColor: string;
    heavyTextColor: string;
    mode: string;
    darkColor: string;
    primaryLight: string;
    secondaryLight: string;
    lightAccentColor: string;
  }
}
