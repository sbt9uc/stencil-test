import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';  

export const config: Config = {
  namespace: 'stencil-two',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'rating-stars',
      proxiesFile: './src/components/rating-stars/rating-stars',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
