import { IConfigureHumanID, ILogIn, IOnCancel, IOnError, IOnSuccess } from './core.interface';
import Provider from './Provider';
declare const configureHumanID: IConfigureHumanID;
declare const logIn: ILogIn;
declare const onCancel: IOnCancel;
declare const onSuccess: IOnSuccess;
declare const onError: IOnError;
export { configureHumanID, logIn, onError, onSuccess, onCancel, Provider as HumanIDProvider };
