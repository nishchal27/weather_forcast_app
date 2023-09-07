import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
} from '../constants';
import { WeatherAction } from '../types/actions';
import { Weather } from '../types/weather';

//action get data from reactJs and provide it to reducer through store.

export const getWeather = (payload: string): WeatherAction  => ({
  type: GET_WEATHER_REQUEST,
  payload,
});

export const getWeatherSuccess = (payload: Weather): WeatherAction  => ({
  type: GET_WEATHER_SUCCESS,
  payload,
});

export const getWeatherFailure = (payload: string): WeatherAction  => ({
  type: GET_WEATHER_FAILURE,
  payload,
});
