import React from 'react';
import AlertButton from './AlertButton';

function Toolbar() {
  return (
    <div>
      <AlertButton message = "Alert message 1!">
        Alert Button 1
      </AlertButton>
      <AlertButton message = "Alert message 2!">
        Alert Button 2
      </AlertButton>
    </div>
  );
}

export default Toolbar;
