import axios from "axios";
import { RawAttraction } from "../types/attraction";
import * as config from "./config";
import { WaitTimeData } from "../types/waitTime";

const api = axios.create({
    baseURL: config.API_URL,
});

export const setToken = (token: string) => {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeToken = () => {
    api.defaults.headers.common.Authorization = null;
};

export const get = async (url: string) => {
    const response = await api.get(url);
    return response.data;
};

export const post = async (url: string, data: any) => {
    const response = await api.post(url, data).catch((e) => {
        throw e;
    });
    return response.data;
};

export const put = async (url: string, data: any) => {
    const response = await api.put(url, data);
    return response.data;
};

export const remove = async (url: string) => {
    const response = await api.delete(url);
    return response.data;
};

export const getAttractions = async (): Promise<RawAttraction[]> => {
    const response = await api.get("/attractions/get");
    if (response.status !== 200) throw new Error(response.data.message);
    return response.data;
};

export const getAttractionData = async (attractionId: string): Promise<WaitTimeData> => {
    const response = await api.get(`/attractions/get-data/${attractionId}`);
    if (response.status !== 200) throw new Error(response.data.message);
    return response.data;
};
