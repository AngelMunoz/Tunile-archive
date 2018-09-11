import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";
export const config: Config = {
  namespace: 'tunile',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
