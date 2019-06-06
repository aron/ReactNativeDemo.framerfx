Framer React Native Demo
========================

Shows using a basic frame with [React Native
Web](https://github.com/necolas/react-native-web/).

Not suitable for production use until the following issues are fixed:

1) Framer bundles the "react-dom" module without the
"react-dom/unstable-native-dependencies" module. This can partially be worked
around by installing "react-dom" into the project locally, but Framer will
revert to using the built-in one regularly and the canvas or preview will need
to be reloaded.

Setup
-----

Getting the project setup is relatively simple:

1) Create a new Framer project
2) From the menubar choose File > Show Project Folder (or <kbd>⌘⌥P</kbd>)
3) From the menubar choose Finder > Services > New Terminal at Folder
4) Run the following `yarn add react react-dom @types/react-native react-native@npm:react-native-web`\*

\* This will alias react-native-web -> react-native without needing a WebPack config.

Then create a new code file in Framer called **App.tsx** and paste the following:

```tsx
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

```

When previewed this will give you a very basic React Native component
containing a green frame and the text "Hello World" with custom controls that
allow configuration of the text and background color.

<img width="599" alt="image" src="https://user-images.githubusercontent.com/47144/59023702-3c2b3c00-8848-11e9-9cf0-8fa9a2435455.png">


