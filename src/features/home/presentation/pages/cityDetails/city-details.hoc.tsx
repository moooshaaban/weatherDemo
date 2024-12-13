import { AppSpinner, AppText } from "@src/core/common"
import { City, Weather } from "@src/core/models"
import { useColors } from "@src/core/slices"
import { useCitiesByName } from "@src/features/home/useCases"
import React, { useMemo } from "react"
import { View } from "react-native"
import { style } from "./style"
import { CityDetailsComponent } from "./component"


export const CityDetailsHOC: React.FC<City> = (city) => {
    const { data: weather, isLoading, error } = useCitiesByName({ searchValue: city.cityName })
    const colors = useColors();
    const styles = useMemo(() => style(colors), [colors]);

    console.log("data, isLoading, error::::", { weather, isLoading, error });

    return <CityDetailsComponent {...{ city, isLoading, weather }} />

}