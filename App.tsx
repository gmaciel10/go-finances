import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Dashboard } from "./src/screens/Dashboard";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { CategorySelect } from "./src/screens/CategorySelect";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.hideAsync();
    }
    prepare();
  }, []);

  /* const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);*/

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <CategorySelect
        category={""}
        setCategory={function (category: Category): void {
          throw new Error("Function not implemented.");
        }}
        closeSelectCategory={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </ThemeProvider>
  );
}
