import { AppContainer, AppHeader } from "@src/core/common"
import { RootStackParamList } from "@src/core/navigation"
import React from "react"
import { HomeHOC } from "./home.hoc"

export const HomePage: React.FC<RootStackParamList['homeScreen']> = () => {
    return <AppContainer>
        <AppHeader title={"cities"} hideBack />
        <HomeHOC />
    </AppContainer>
}