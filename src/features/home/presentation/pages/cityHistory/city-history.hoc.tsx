import { RootStackParamList } from "@src/core/navigation"
import { useCitiesHistory } from "@src/core/slices";
import React from "react"
import { FlatList } from "react-native-gesture-handler";
import { ListItemHistory } from "../home/component/listItem";

import { ListEmptyComponent } from "../home/component/listEmpty.component";

export const CityHistoryHOC: React.FC<RootStackParamList['cityHistoryScreen']> = ({ cityName }) => {
    const history = useCitiesHistory({ cityName });

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
            ListEmptyComponent={<ListEmptyComponent />}
        />
    );
};