export interface City {
  name: string;
  country: string;
}

export interface Weather {
  city: string;
  list: {
    day: string;
    time: string;
    temp: string;
    icon: string;
    dt: number;
  }[];
    feels_like: number;
    humidity: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
    temp: number;
    main: string;
    description: string;
    icon: string;
};

export interface WeatherPayload {
  cod: string;
  message: number;
  city: City;
  list: {
    dt: number;
    main: {
      feels_like: number;
      humidity: number;
      pressure: number;
      temp_max: number;
      temp_min: number;
      temp: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
  }[];
    main: {
      feels_like: number;
      humidity: number;
      pressure: number;
      temp_max: number;
      temp_min: number;
      temp: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
}
