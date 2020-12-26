import {
  IConfigureHumanID,
  ILogIn,
  IOnCancel,
  IOnError,
  IOnSuccess
} from './core.interface';
import {EventRegister, ON_CANCEL, ON_ERROR, ON_SUCCESS} from './eventManager';
import options from './options';
import Provider from './Provider';

const configureHumanID: IConfigureHumanID = (params) => {
  const {appName, clientId, clientSecret, Icon = null} = params;

  options.appName = appName;
  options.clientId = clientId;
  options.clientSecret = clientSecret;
  options.Icon = Icon;
};

const logIn: ILogIn = () => {
  Provider.ref?.logIn();
};

const onCancel: IOnCancel = (callback) => {
  EventRegister.addEventListener(ON_CANCEL, (cancel: boolean) => {
    if (cancel) {
      callback();
    }
  });
};

const onSuccess: IOnSuccess = (callback) => {
  EventRegister.addEventListener(ON_SUCCESS, (exchangeToken: string) => {
    if (exchangeToken) {
      callback(exchangeToken);
    }
  });
};

const onError: IOnError = (callback) => {
  EventRegister.addEventListener(ON_ERROR, (message: string) => {
    if (message) {
      callback(message);
    }
  });
};

export {
  configureHumanID,
  logIn,
  onError,
  onSuccess,
  onCancel,
  Provider as HumanIDProvider
};
