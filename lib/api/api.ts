import axios, { AxiosError } from "axios";

export const nextServer = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL_1}/api`,
  withCredentials: true,
});

export type ApiError = AxiosError<{ error: string }>;
