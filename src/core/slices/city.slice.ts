import { City, Weather } from "@core/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootStore } from "../store";


/**
 * City Reducer 
 * 
 * handle add and remove city and city history locally 
 * 
 */

interface CitiesSlice {
    cities: City[];
    history: { cityName: string; history: Weather[] }[] | null;
}


const initialState: CitiesSlice = {
    cities: [],
    history: null
}


const citiesSlice = createSlice({
    name: 'citiesSlice',
    initialState,
    reducers: {
        addCity(state, { payload }: PayloadAction<City>) {
            state.cities = [...(state?.cities?.filter(ele => ele?.cityName !== payload?.cityName)), payload]
        },
        removeCity(state, { payload }: PayloadAction<Pick<City, 'cityName'>>) {
            state.cities = [...(state?.cities?.filter(ele => ele?.cityName !== payload?.cityName))]
        },
        addCityWeatherHistory(state,
            { payload }: PayloadAction<{ cityName: string; history: Weather[] }>) {
            //initial
            if (!state.history) {
                state.history = [payload]
                return
            }
            const cityExists = state?.history?.some(history => history.cityName === payload?.cityName);
            if (!cityExists)//FirstTime With City
                state.history = [...state.history, payload]
            else
                state.history = state?.history?.map(historyEle =>
                    historyEle.cityName === payload.cityName
                        ? { ...historyEle, history: [...(historyEle.history), ...payload.history] }
                        : historyEle
                )
        },
    }
})


export default citiesSlice.reducer;

export const {
    addCity,
    addCityWeatherHistory,
    removeCity,
} = citiesSlice.actions;

export const useCities = () => useSelector((state: RootStore) => state.cities.cities);

export const useCitiesHistory = ({ cityName }: { cityName: string }) => useSelector((state: RootStore) => {
    const cityHistory = state?.cities?.history?.find(
        item => item.cityName === cityName,
    );
    return cityHistory?.history || [];
});




