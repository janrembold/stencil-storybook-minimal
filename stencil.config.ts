import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-storybook-minimal',
  outputTargets: [
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
      type: 'docs-json',
      file: 'node_modules/.cache/stencil/docs.json'
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
