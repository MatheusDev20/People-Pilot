import axios, { AxiosError } from "axios";
import { refresh } from "../../api/auth";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_KSX_BACKEND_URL,
  timeout: 5000,
});

export const refreshToken = async (error: AxiosError): Promise<any> => {
  const { response } = error;
  const originalRequest = error.config;
  const status = response?.status;

  if (status === 401 && originalRequest) {
    await refresh();

    return await axiosInstance(originalRequest);
  }
};

axiosInstance.interceptors.response.use((response) => {
  return response;
}, refreshToken);

export const handleRequestError = (
  error: any,
  defaultMessage = "Erro de Sistema",
): string => {
  if (error instanceof AxiosError) {
    const { response } = error;
    const message = response?.data.response.message;

    return message;
  }

  return defaultMessage;
};
