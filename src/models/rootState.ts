import {State} from './models.interface';

const rootState: State = {
  loginFetching: false,
  loginPayload: null,
  loginOTPFetching: false,
  loginOTPPayload: null
};

export default rootState;
