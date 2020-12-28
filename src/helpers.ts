import options from './core/options';
import {Countries, FlagType} from './modules/Login/Login.interface';

const countries: Countries = require('../assets/json/countries.json');

export function checkClient() {
  if (
    options.clientId === null ||
    !options.clientId?.length ||
    options.clientSecret === null ||
    !options.clientSecret?.length
  ) {
    throw new Error(
      'ClientId and ClientSecret must filled! get the appId and appSecret by dropping us an email developers@human-id.org.'
    );
  } else if (options.appName === null || !options.appName?.length) {
    throw new Error('HumanID need your application name, please fill your application name');
  } else if (options.Icon === null) {
    throw new Error('HumanID need your application logo, please fill your application logo');
  }
}

export function getDialCode(countryCode: FlagType) {
  return countries[countryCode]?.dialCode;
}

export function getCountry(countryCode: FlagType) {
  return countries[countryCode];
}
