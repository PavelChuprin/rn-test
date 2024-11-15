import { useThemeColor } from "@/hooks/useThemeColor"
import React from "react"
import { TextInput, TextInputProps } from "react-native"

export type ThemedTextInputProps = TextInputProps & {
    lightColor?: string
    darkColor?: string
}

const ThemedTextInput = ({
    style,
    lightColor,
    darkColor,
    ...otherProps
}: ThemedTextInputProps) => {
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "background"
    )
    return (
        <TextInput
            style={[{ backgroundColor }, style]}
            {...otherProps}
        ></TextInput>
    )
}

export default ThemedTextInput
