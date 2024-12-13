import { AppContainer, AppHeader } from "@src/core/common"
import { RootStackParamList } from "@src/core/navigation"
import React from "react"
import { CityDetailsHOC } from "./city-details.hoc"

export const CityDetailsPage: React.FC<RootStackParamList['cityDetailsScreen']> = (props) => {
    return <AppContainer>
        <AppHeader />
        <CityDetailsHOC {...{ ...props }} />
    </AppContainer>
}