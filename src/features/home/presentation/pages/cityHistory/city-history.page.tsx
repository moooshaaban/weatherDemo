import { AppContainer, AppHeader } from "@src/core/common"
import { RootStackParamList } from "@src/core/navigation"
import React from "react"
import { CityHistoryHOC } from "./city-history.hoc"

export const CityHistoryPage: React.FC<RootStackParamList['cityHistoryScreen']> = ({ cityName }) => {
    return <AppContainer>
        <AppHeader title={{ locale: "historical", localeProps: { params: { value: cityName } } }} />
        <CityHistoryHOC cityName={cityName} />
    </AppContainer>
}