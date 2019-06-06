import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { View, Text } from "react-native-web"

class App extends React.Component<{ text: string }> {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#44bb44",
                    height: "100%",
                }}
            >
                <View>
                    <Text color="#ffffff">{this.props.text}</Text>
                </View>
            </View>
        )
    }
}

export const FramerApp: React.FC<{ text: string }> = props => (
    <Frame size="100%">
        <App {...props} />
    </Frame>
)

addPropertyControls(FramerApp, {
    text: {
        type: ControlType.String,
        defaultValue: "Hello World",
        title: "Text",
    },
})
