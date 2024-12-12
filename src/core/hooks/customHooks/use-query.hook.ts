import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetcher } from '@core/api';

/**
 * Interface for the props required by the useCustomQuery hook.
 */
interface Props {
  url: string;
  dependedParam?: string | number | boolean;
  options?:
  | Omit<UseQueryOptions<any, Error, any, QueryKey>, 'queryKey' | 'queryFn'>
  | undefined;
  queryKey?: string;
}

/**
 * Custom hook that utilizes React Query's useQuery hook to fetch data.
 *
 * @template T - The expected type of the response data.
 * @param {Props} props - The props required for the custom query hook.
 * @param {string} props.url - The URL to fetch data from.
 * @param {string | number | boolean} [props.dependedParam] - An optional dependent parameter to include in the query key.
 * @param {Omit<UseQueryOptions<any, Error, any, QueryKey>, 'queryKey' | 'queryFn'>} [props.options] - Optional query options to configure the useQuery hook.
 * @param {string} [props.queryKey] - An optional custom query key.
 * @returns {object} - An object containing the query result, refetch and remove functions, and the onRefetch method.
 */
export const useCustomQuery = <T>({
  url,
  dependedParam,
  options,
  queryKey,
}: Props) => {
  // Destructure the refetch and remove functions, and the rest of the query result
  const { refetch, remove, ...rest } = useQuery<T, Error>(
    // Set the query key using either the provided queryKey or the URL, along with the dependedParam if provided
    [queryKey ? queryKey : url, dependedParam],
    // Define the query function to fetch data using the fetcher utility

    async (): Promise<T> => {
      return await fetcher<T>(url);
    },
    options,
  );

  // Return an object with the refetch and remove functions, and the rest of the query result
  return {
    /**
     * Method to refetch the query after removing it.
     */
    onRefetch: () => {
      remove();
      refetch();
    },
    refetch,
    remove,
    ...rest,
  };
};
