import { useCustomQuery } from "@src/core/hooks"
import { Weather } from "@src/core/models"

export const useCitiesByName = ({ searchValue }: { searchValue: string }) => {
    return useCustomQuery<Weather>({
        url: `/data/2.5/weather?q=${searchValue}&apikey=f5cb0b965ea1564c50c6f1b74534d823`,
        dependedParam: searchValue,
        options: {
            cacheTime: 0,
            enabled: !!searchValue,
            retry: 0,
        },
    })
}