import React from 'react';
import MainComponent from '../modules/MainComponent';
import {registerRef} from '../helpers';
import {IHumanIDProvider} from './core.interface';

const Provider: IHumanIDProvider = (): JSX.Element => {
  return <MainComponent ref={registerRef} />;
};

Provider.ref = null;

export default Provider;
