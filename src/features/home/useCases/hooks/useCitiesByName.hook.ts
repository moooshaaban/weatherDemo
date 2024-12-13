import { useCustomQuery } from "@src/core/hooks"
import { Weather } from "@src/core/models"
import urls from '@core/utils/urls.json';

export const useCitiesByName = ({ searchValue }: { searchValue: string }) => {
    return useCustomQuery<Weather>({
        url: `/data/2.5/weather?q=${searchValue}&apikey=${urls.API_KEY}`,
        dependedParam: searchValue,
        options: {
            cacheTime: 0,
            enabled: !!searchValue,
            retry: 0,
        },
    })
}
