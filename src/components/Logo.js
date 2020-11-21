import React from 'react';


function Logo(variant=null) {
  if (variant.color === 'red' ) {
    return (
      <img src="/ShakingHands_LandingPage_Red.png" alt="logo" width="50%"/>
    );
  }
  return (
    <img src="/ShakingHandblack.png" alt="logo" width="50%"/>
  );
}

export default Logo;
