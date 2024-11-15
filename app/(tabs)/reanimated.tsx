import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { StyleSheet } from "react-native"
import Animated, { useSharedValue, withSpring } from "react-native-reanimated"
import { Button, ButtonText, Text, View } from "tamagui"

export default function TabFourScreen() {
    const width = useSharedValue(100)

    const handleAddPress = () => {
        width.value = withSpring(width.value + 50)
    }

    const handleRemovePress = () => {
        width.value = withSpring(width.value - 50)
    }

    return (
        <>
            <ThemedView
                style={{
                    flex: 1,
                    alignItems: "center",
                }}
            >
                <ThemedText type="title" style={styles.titleContainer}>
                    Анимации
                </ThemedText>
                <ThemedText style={{ marginBottom: 8 }}>
                    Функция:{" "}
                    <ThemedText type="defaultSemiBold">withSpring</ThemedText>{" "}
                    (эффект пружины)
                </ThemedText>
                <Animated.View
                    style={{
                        width,
                        height: 50,
                        backgroundColor: "#2287df",
                        borderRadius: 5,
                    }}
                />
                <View style={styles.buttonsContainer}>
                    <Button
                        width={50}
                        marginTop={20}
                        backgroundColor="$green8Dark"
                        onPress={handleAddPress}
                    >
                        <ButtonText color="$white1">+</ButtonText>
                    </Button>
                    <Button
                        width={50}
                        marginTop={20}
                        backgroundColor="$red8Dark"
                        onPress={handleRemovePress}
                    >
                        <ButtonText color="$white1">-</ButtonText>
                    </Button>
                </View>
            </ThemedView>
        </>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        gap: 8,
        marginBottom: 8,
        marginTop: 40,
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
})
