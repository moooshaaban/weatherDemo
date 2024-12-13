import React, { useMemo } from "react"
import { Alert, View } from "react-native"
import { CitiesListHOC } from "./component"
import { AppButton } from "@core/common/button/button.common"
import { style } from "../home/styles";
import { useColors } from "@src/core/slices"

export const HomeHOC: React.FC = () => {
    const colors = useColors();
    const styles = useMemo(() => style(colors), [colors]);

    return <View style={styles.flex}>
        <View style={styles.container}>
            <CitiesListHOC />
        </View>
        <AppButton
            title={'add_city'}
            onPress={() => { Alert.alert("add") }}
            style={styles.button}
        />
    </View>
}