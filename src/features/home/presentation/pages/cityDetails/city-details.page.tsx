import { AppContainer, AppHeader } from "@src/core/common"
import { RootStackParamList } from "@src/core/navigation"
import React from "react"

export const CityDetailsPage: React.FC<RootStackParamList['cityDetailsScreen']> = (city) => {
    return <AppContainer>
        <AppHeader />
    </AppContainer>
}