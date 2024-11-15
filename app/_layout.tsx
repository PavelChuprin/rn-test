import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import "react-native-reanimated"

import { useColorScheme } from "@/hooks/useColorScheme"
import { TamaguiProvider, createTamagui } from "@tamagui/core"
import { config } from "@tamagui/config/v3"
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const tamaguiConfig = createTamagui(config)

// TypeScript types across all Tamagui APIs
type Conf = typeof tamaguiConfig
declare module "@tamagui/core" {
    interface TamaguiCustomConfig extends Conf {}
}

export default function RootLayout() {
    const colorScheme = useColorScheme()
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
        <TamaguiProvider config={tamaguiConfig}>
            <ThemeProvider
                value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="+not-found" />
                </Stack>
                <StatusBar style="auto" />
            </ThemeProvider>
        </TamaguiProvider>
    )
}
