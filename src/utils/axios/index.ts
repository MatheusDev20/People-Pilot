import axios, { AxiosError } from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_KSX_BACKEND_URL,
  timeout: 5000,
});

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
