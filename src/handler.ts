import 'source-map-support/register';
import { Handler } from 'aws-lambda';
import {config} from 'dotenv';
import { HelloFunction, WeatherFunction } from './functions';

config()

export const hello: Handler = HelloFunction;
export const weather: Handler = WeatherFunction;

