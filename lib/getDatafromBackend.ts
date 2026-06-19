import { axiosInstance } from "./Axios-instance";

export const getData = async <T>(
  endpoint: string
): Promise<T> => {
  const { data } = await axiosInstance.get<T>(endpoint);
  return data;
};

export const postUser = async <T, D>(
  endpoint: string,
  payload: D,
): Promise<T> => {
  const { data } = await axiosInstance.post<T>(endpoint, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const postProjects = async <T, D>(
  endpoint: string,
  payload: D,
  token: string
): Promise<T> => {
  if (!token) throw new Error("Authentication token is required");

  const { data } = await axiosInstance.post<T>(endpoint, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return data;
};


export const update = async <T, D>(
  endpoint: string,
  payload: D,
  token: string
): Promise<T> => {
  if (!token) throw new Error("Authentication token is required");

  const { data } = await axiosInstance.put<T>(endpoint, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return data;
};
export const Delete = async <T>(
  endpoint: string,
  token: string
): Promise<T> => {
  if (!token) throw new Error("Authentication token is required");

  const { data } = await axiosInstance.delete<T>(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return data;
};