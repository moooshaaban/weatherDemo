import { useCustomQuery } from "@src/core/hooks"
import { Weather } from "@src/core/models"
import urls from '@core/utils/urls.json';

export const useCitiesByName = ({ searchValue, enabled = true }: { searchValue: string, enabled?: boolean }) => {
    return useCustomQuery<Weather>({
        url: `/data/2.5/weather?q=${searchValue}&apikey=${urls.API_KEY}`,
        dependedParam: searchValue,
        options: {
            cacheTime: 0,
            enabled: !!enabled && !!searchValue,
            retry: 0,
        },
    })
}
