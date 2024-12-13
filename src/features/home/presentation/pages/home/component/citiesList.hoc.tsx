import { useAppNavigation } from "@src/core/navigation";
import { useCities } from "@src/core/slices"
import React from "react"
import { FlatList, View } from "react-native";
import { ListItem } from "./listItem";
import { AppImage, AppText } from "@src/core/common";
import { AppAssets, height } from "@src/core/utils";


export const CitiesListHOC: React.FC = () => {
    const Cities = useCities();
    const navigation = useAppNavigation();
    return (
        <FlatList
            data={Cities}
            keyExtractor={(_, i) => i.toString()}
            contentContainerStyle={{ flex: 1 }}
            renderItem={({ index, item }) =>
                <ListItem
                    onPress={() => {
                        navigation?.navigate('cityDetailsScreen', item);
                    }}
                    cityName={item?.cityName}
                    title={`${item.cityName}, ${item.countryCode}`}
                    key={index?.toString()}
                />

            }
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
}