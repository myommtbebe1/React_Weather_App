import axios from "axios";

export const api=axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5"
})

export const api_key='d37aa948dc260bc083fdeb6e94b79ae3'