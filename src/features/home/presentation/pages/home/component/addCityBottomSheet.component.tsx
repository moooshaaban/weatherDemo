import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { AppBottomSheet, AppText, SearchInputBottomSheet } from "@src/core/common";
import { useCitiesByName } from "@src/features/home/useCases";
import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { ListItem } from "./listItem";
import { Alert } from "react-native";
import { addCity, useCities } from "@src/core/slices";
import { Weather } from "@src/core/models";
import { useDispatch } from "react-redux";


interface Props {
    isOpenBottomSheet: boolean;
    onClose: () => void;

}
export const AddCityBottomSheet: React.FC<Props> = ({ isOpenBottomSheet, onClose }) => {

    const [searchValue, setSearchValue] = useState<string>('');
    const cities = useCities();
    const dispatch = useDispatch();

    const debounceSearch = useDebouncedCallback(val => {
        setSearchValue(val);
    }, 700);

    const { data, isLoading, error } = useCitiesByName({ searchValue })
    console.log("data, isLoading, error", { data, isLoading, error });


    const _onPressAddCity = (item: Weather) => {
        dispatch(
            addCity({
                cityName: item.name,
                countryCode: item.sys.country,
            }),
        );
        onClose();
    };


    return (
        <AppBottomSheet
            isOpenBottomSheet={isOpenBottomSheet}
            onClose={onClose}>
            <SearchInputBottomSheet
                {...{ searchValue, setSearchValue: debounceSearch }}
            />
            {isLoading && searchValue ? (
                <AppText value="loading...." />
            ) : (
                <BottomSheetFlatList
                    data={data ? [data] : []}
                    keyExtractor={(_, i) => i.toString()}
                    contentContainerStyle={{ flex: 1 }}
                    renderItem={({ index, item }) => {
                        console.log(cities?.find(city => city.cityName == item?.name));

                        return item?.name ? (
                            <ListItem
                                onPress={() => _onPressAddCity(item)}
                                title={`${item.name}, ${item.sys.country}`}
                                cityName={item.name}
                                key={index?.toString()}
                            // allowDelete={
                            //     !!cities?.find(city => city.cityName == item?.name)
                            //         ?.cityName
                            // }
                            // showAdd={
                            //     !cities?.find(city => city.cityName == item?.name)?.cityName
                            // }
                            />
                        ) : (
                            <></>
                        );
                    }}
                />
            )}
        </AppBottomSheet>
    )
}