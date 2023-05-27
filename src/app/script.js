import React, { useState } from 'react';

const AuthenticatorItem = ({ code }) => {
  return (
    <div className="authenticator-item">
      <div className="number">{code}</div>
      <div className="gmail-icon"></div>
      <div className="timer"></div>
    </div>
  );
};

const Authenticator = () => {
  const [authenticatorItems, setAuthenticatorItems] = useState([]);

  const generateCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000);
    return code;
  };

  const createAuthenticatorItem = () => {
    const code = generateCode();
    const authenticatorItem = <AuthenticatorItem key={code} code={code} />;
    return authenticatorItem;
  };

  const addAuthenticator = () => {
    const newAuthenticatorItems = [...authenticatorItems, createAuthenticatorItem()];
    setAuthenticatorItems(newAuthenticatorItems);
  };

  return (
    <div>
      <h1>Authenticator</h1>
      <div id="authenticator">
        {authenticatorItems}
      </div>
      <button id="addButton" onClick={addAuthenticator}>+</button>
    </div>
  );
};

export default Authenticator;
