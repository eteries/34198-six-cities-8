import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { APIConfig, HttpCode } from '../constants';

export const createAPI = (onUnauthorized: () => void): AxiosInstance => {
  const API = axios.create({
    baseURL: APIConfig.BaseURL as string,
    timeout: APIConfig.Timeout as number,
  })

  API.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const {response} = error;
      if (response?.status === HttpCode.Unauthorized) {
        return onUnauthorized();
      }

      return Promise.reject(error);
    }
  )

  return API;
}
