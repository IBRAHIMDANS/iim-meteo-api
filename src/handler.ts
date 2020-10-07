import 'source-map-support/register';
import { Handler } from 'aws-lambda';
import { HelloFunction, WeatherFunction } from './functions';


export const hello: Handler = HelloFunction;
export const weather: Handler = WeatherFunction;

