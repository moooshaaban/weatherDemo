import { AppImage, AppText } from "@core/common";
import { AppAssets, height } from "@core/utils";
import React from "react";
import { View } from "react-native";


export const ListEmptyComponent: React.FC = () => {
    return <View style={{ height: height(200), justifyContent: "center", alignItems: "center" }}>
        <AppImage source={AppAssets.locationCityIcon} style={{
            height: 100,
            width: 100,
            alignSelf: "center"
        }} />
        <AppText value="No Data" />
    </View>
}