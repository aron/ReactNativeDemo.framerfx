import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { View, Text } from "react-native"

class App extends React.Component<{ text: string; background: string }> {
    static defaultProps = { text: "Hello World", background: "#44bb44" }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: this.props.background,
                    height: "100%",
                }}
            >
                <View>
                    <Text style={{ color: "#ffffff" }}>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}

export const FramerApp: React.FC<{
    text: string
    background: string
}> = props => (
    <Frame size="100%">
        <App {...props} />
    </Frame>
)

addPropertyControls(FramerApp, {
    text: {
        type: ControlType.String,
        defaultValue: App.defaultProps.text,
        title: "Text",
    },
    background: {
        type: ControlType.Color,
        defaultValue: App.defaultProps.background,
        title: "Background",
    },
})
