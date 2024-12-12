import { axios, mapAxiosError } from '@core/utils';
import { AxiosError, AxiosRequestHeaders } from 'axios';

/**
 * Fetches data from the given URL with optional headers.
 *
 * This function uses axios to perform a GET request to the specified URL.
 * If headers are provided, they will be included in the request.
 * In case of an error, the error is mapped using the mapAxiosError utility and thrown.
 *
 * @template T - The expected type of the response data.
 * @param {string} url - The URL to fetch data from.
 * @param {AxiosRequestHeaders} [headers] - Optional headers to include in the request.
 * @returns {Promise<T>} - A promise that resolves to the response data of type T.
 */

export async function fetcher<T>(
  url: string,
  headers?: AxiosRequestHeaders,
): Promise<T> {
  try {
    // Perform a GET request to the specified URL with optional headers.
    const response = await axios.get<T>(url, { headers });

    // Return the response data.
    return response.data;
  } catch (error) {
    // console.log('error ::: ', JSON.stringify((error as any)?.response?.data));
    // Map and throw the error using the mapAxiosError utility.
    throw mapAxiosError(error as AxiosError);
  }
}
