import options from './core/options';
import {MainComponentRef} from './core/core.interface';
import Provider from './core/Provider';
import {Countries, FlagType} from './modules/Login/Login.interface';

const countries: Countries = require('./assets/json/countries.json');

export function checkClient() {
  if (
    options.clientId === null ||
    !options.clientId?.length ||
    options.clientSecret === null ||
    !options.clientSecret?.length
  ) {
    return new Error(
      'ClientId and ClientSecret must filled! get the appId and appSecret by dropping us an email developers@human-id.org.'
    );
  } else if (options.appName === null || !options.appName?.length) {
    return new Error('HumanID need your application name, please fill your application name');
  } else if (options.Icon === null) {
    return new Error('HumanID need your application logo, please fill your application logo');
  }
}

export function registerRef(ref: MainComponentRef) {
  Provider.ref = ref;
}

export function getDialCode(countryCode: FlagType) {
  return countries[countryCode]?.dialCode;
}

export function getCountry(countryCode: FlagType) {
  return countries[countryCode];
}
