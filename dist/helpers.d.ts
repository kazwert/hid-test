import { MainComponentRef } from './core/core.interface';
import { FlagType } from './modules/Login/Login.interface';
export declare function checkClient(): Error | undefined;
export declare function registerRef(ref: MainComponentRef): void;
export declare function getDialCode(countryCode: FlagType): string;
export declare function getCountry(countryCode: FlagType): import("./modules/Login/Login.interface").Country;
