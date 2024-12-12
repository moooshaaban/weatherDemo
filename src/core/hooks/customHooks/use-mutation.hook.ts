import { useMutation, UseMutationOptions } from '@tanstack/react-query';

interface Props {
  url: string; // The URL or key used by React Query to identify the mutation
  api: (inputs: any, accessToken?: string) => Promise<any>; // Function to perform the API request
  options?:
  | Omit<
    UseMutationOptions<any, Error, any, any>,
    'mutationFn' | 'mutationKey'
  >
  | undefined; // Options for configuring the mutation, excluding 'mutationFn' and 'mutationKey'
}

/**
 * Custom hook for performing a mutation with React Query.
 *
 * @param {Object} props - The configuration object for the custom mutation hook.
 * @param {string} props.url - The URL or key used by React Query to identify the mutation.
 * @param {Function} props.api - Function that performs the API request. It takes inputs and optionally an access token, returning a promise.
 * @param {Object} [props.options] - Optional configuration for the mutation, excluding 'mutationFn' and 'mutationKey'.
 *
 * @template I - Type for the input data used in the mutation.
 * @template R - Type for the response data returned from the mutation.
 *
 * @returns {UseMutationResult<R, Error, I>} - The result of the mutation, including status, data, error, and other properties from React Query.
 */
export const useCustomMutation = <I, R>({ url, api, options }: Props) => {

  return useMutation({
    mutationKey: [url],
    mutationFn: async (mutateBody: I) => {
      // Perform the API request using the provided function and input data
      const res = await api(mutateBody);
      return res;
    },
    ...options
  },)

};
