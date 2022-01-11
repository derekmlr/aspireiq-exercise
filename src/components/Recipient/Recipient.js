import { useState, useEffect } from 'react';
import { ReactComponent as ErrorIcon } from '../../images/error-circle.svg';

import './Recipient.scss';

export default function Recipient({ value, remove, revise }) {

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = emailRegex.test(value);

  return (
    <div className={`Recipient ${!isValid ? 'Recipient-error' : ''}`}>
      <span>{value}</span>
      {isValid &&
          <button className="Recipient-action Recipient-remove" onClick={() => remove(value)}>&times;</button> }
      {!isValid &&
          <button className="Recipient-action Recipient-revise" onClick={() => revise(value)}>
            <ErrorIcon className="Recipient-revise-icon" />
          </button>}
    </div>
  );
}