import { AppImage, AppText } from "@src/core/common"
import { RootStackParamList } from "@src/core/navigation"
import { useCitiesHistory } from "@src/core/slices";
import React from "react"
import { FlatList } from "react-native-gesture-handler";
import { ListItemHistory } from "../home/component/listItem";
import { View } from "react-native";
import { AppAssets, height } from "@src/core/utils";

export const CityHistoryHOC: React.FC<RootStackParamList['cityHistoryScreen']> = ({ cityName }) => {
    const history = useCitiesHistory({ cityName });
    console.log("historyhistoryhistory::::,history", history);

    return (
        <FlatList
            data={history ? history : []}
            keyExtractor={(_, i) => i.toString()}
            contentContainerStyle={{ flex: 1 }}
            renderItem={({ index, item }) => {
                return item?.name ? (
                    <ListItemHistory
                        weather={item}
                        key={index?.toString()}
                    />
                ) : (
                    <></>
                );
            }}
            ListEmptyComponent={<View style={{ height: height(200), justifyContent: "center", alignItems: "center" }}>
                <AppImage source={AppAssets.locationCityIcon} style={{
                    height: 100,
                    width: 100,
                    alignSelf: "center"
                }} />
                <AppText value="No Data" />
            </View>}
        />
    );
};