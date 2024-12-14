import { addCityWeatherHistory } from "@src/core/slices"
import { useCitiesByName } from "@src/features/home/useCases"
import React, { useEffect } from "react"
import { CityDetailsComponent } from "./component"
import { RootStackParamList } from "@src/core/navigation"
import { useDispatch } from "react-redux"


export const CityDetailsHOC: React.FC<RootStackParamList['cityDetailsScreen']> = ({ weather: weatherProp, ...city }) => {

    // send enabled to handle if i want to show only  history weather 
    const { data: weather, isLoading, error } = useCitiesByName({ searchValue: city.cityName, enabled: !weatherProp?.id })
    const dispatch = useDispatch();


    useEffect(() => {
        //handle add new weather if i navigate without weather props
        if (weather && !isLoading && !weatherProp?.id) {
            dispatch(addCityWeatherHistory({ cityName: city.cityName, history: [weather] }));
        }
    }, [weather, isLoading, weatherProp]);

    if (weatherProp?.id)
        return <CityDetailsComponent {...{ city, isLoading: false, weather: weatherProp }} />

    return <CityDetailsComponent {...{ city, isLoading, weather }} />

}