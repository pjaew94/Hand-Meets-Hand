import React from 'react';
import { css } from '@emotion/core';
import DotLoader from 'react-spinners/DotLoader'

const override = css `
display: block;
margin: 0 auto;
border-color: pink;
`;

const container = css `
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const Spinner = () => {
  return (
    <div className='spinner_container' css={container}>
      <DotLoader 
        css={override}
        size={150}
        color={'pink'}
      />
    </div>
  )
}

export default Spinner