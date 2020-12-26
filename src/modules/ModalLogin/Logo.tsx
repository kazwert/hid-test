import React from 'react';
import options from '../../core/options';

function Logo(): JSX.Element | null {
  const {Icon} = options;

  if (Icon === null) {
    return null;
  }

  // @ts-ignore
  return <Icon />;
}

export default Logo;
