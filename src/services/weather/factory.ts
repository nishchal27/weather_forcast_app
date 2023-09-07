import moment from 'moment';

import {
  WeatherPayload,
  Weather,
} from '../../types/weather';

const ICON_URL = 'https://openweathermap.org/img/w/';

// Open Weather API uses unix timestamp format
// JS does not, therefore, it is needed to use
// unix and utc functions from momentjs
export const transformPayload = (payload: WeatherPayload): Weather => ({
  city: `${payload.city.name} ${payload.city.country}`,
  list: payload.list
    .map(item => ({
      day: moment.unix(item.dt).utc().format('dddd'),
      time: moment.unix(item.dt).utc().format('h:mmA'),
      temp: `${Math.round(item.main.temp)}`,
      icon: `${ICON_URL}${item.weather[0].icon}.png`,
      dt: item.dt
    })),
  feels_like: Math.round(payload.list[1].main.feels_like),
  humidity: payload.list[1].main.humidity,
  pressure: payload.list[1].main.pressure,
  temp_max: Math.round(payload.list[1].main.temp_max),
  temp_min: Math.round(payload.list[1].main.temp_min),
  temp: Math.round(payload.list[1].main.temp),
  main: payload.list[1].weather[0].main,
  description: payload.list[1].weather[0].description,
  icon: payload.list[1].weather[0].icon
});

export default {
  transformPayload,
};
