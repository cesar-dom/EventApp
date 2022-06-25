import { css } from '@emotion/react';

export default css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    // GLOBAL CUSTOM SCROLLBAR
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #04c4f2;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #018aad;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #018aad;
    }
    ::-webkit-scrollbar-track {
      background: #f2f2f2;
      border: 0px none #ffffff;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-track:hover {
      background: #bdbdbd;
    }
    ::-webkit-scrollbar-track:active {
      background: #bdbdbd;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }

  body {
    background: #09090A !important;
    color: #E1E1E6 !important;
  }
`;
