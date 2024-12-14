import { useAppNavigation } from "@src/core/navigation";
import { useCities } from "@src/core/slices"
import React from "react"
import { FlatList } from "react-native";
import { ListItem } from "./listItem";
import { ListEmptyComponent } from "./listEmpty.component";


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
                    allowDelete={true}
                />
            }
            ListEmptyComponent={<ListEmptyComponent />}
        />
    );
}