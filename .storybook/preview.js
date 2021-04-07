import { defineCustomElements } from '../loader';
import { setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from '../node_modules/.cache/stencil/docs.json';

defineCustomElements();

if (docJson) {
  setStencilDocJson(docJson);
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { hideNoControlsWarning: true },
};
