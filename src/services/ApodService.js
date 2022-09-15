import { AppState } from "../AppState.js";
import { APOD } from "../models/APOD.js";
import { logger } from "../utils/Logger.js";
import { nasaApi } from "./AxiosService";

class APODService {

    async getApod() {
        const res = await nasaApi.get('/planetary/apod')
        logger.log("is it working", res.data)
        // AppState.APOD = res.data.map(a => new APOD(a))
        AppState.APOD = res.data

    }

    async getApodByDate(date = '') {
        const res = await nasaApi.get('', { params: { date } })
        console.log(res.data);
        AppState.APOD = new APOD(res.data)
    }



}

export const apodService = new APODService()






