import axios from 'axios';
import urls from '@core/utils/urls.json';

/**
 * Create an axios instance with the base URL from the configuration file.
 * This instance will be used for making API requests to the weather service.
 */
const instance = axios.create({
  baseURL: urls?.API_ENDPOINT_Weather?.trim(),
});

/**
 * Add a request interceptor to the axios instance.
 * This interceptor can be used to modify the request configuration before the request is sent.
 * Here, it is primarily used to add any necessary headers to the request.
 */
instance.interceptors.request.use(
  config => {
    // Add any custom headers if necessary
    config.headers = {
      ...config.headers,
    } as any;

    // Uncomment and modify the following lines if an authorization token is needed
    // const token = store.getState().auth.principle?.token;
    // if (token) {
    //   config.headers = {
    //     ...config.headers,
    //     Authorization: `Bearer ${token}`,
    //   } as any;
    // }

    return config; // Return the modified config
  },
  error => {
    // Handle request error here
    return Promise.reject(error);
  },
);

/**
 * Export the configured axios instance.
 * This instance can be imported and used in other parts of the application to make API requests.
 */
export default instance;
