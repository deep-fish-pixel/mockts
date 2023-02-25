import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { HttpParams } from './http.define';
import { HttpMethodEnum } from './http.define';

export const request: AxiosInstance = axios.create({
  // 前缀
  baseURL: '/',
  // 超时
  timeout: 1000 * 60,
  // 请求头
  headers: {
    'Content-Type': 'application/json'
  }
});


export default {
  get<T = never>(url: string, data?: HttpParams | FormData, config: AxiosRequestConfig = {}): Promise<T> {
    return request.get(url, {
      method: HttpMethodEnum.GET,
      params: data,
      ...config
    });
  },

  post<T = never>(url: string, data?: HttpParams | FormData, config: AxiosRequestConfig = {}): Promise<T> {
    return request.get(url, {
      method: HttpMethodEnum.POST,
      params: data,
      ...config
    });
  },

  put<T = never>(url: string, data?: HttpParams | FormData, config: AxiosRequestConfig = {}): Promise<T> {
    return request.get(url, {
      method: HttpMethodEnum.PUT,
      params: data,
      ...config
    });
  },

  delete<T = never>(url: string, data?: HttpParams | FormData, config: AxiosRequestConfig = {}): Promise<T> {
    return request.get(url, {
      method: HttpMethodEnum.DELETE,
      params: data,
      ...config
    });
  }
};
