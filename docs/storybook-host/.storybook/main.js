const config = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'docs/storybook-host/vite.config.ts'
      }
    }
  },
  refs: {
    "accept-payment": {
      title: 'Accept Payment',
      url: 'http://localhost:4103'
    },
    "admin": {
      title: 'Admin',
      url: 'http://localhost:4102'
    },
    "merchant": {
      title: 'Merchant',
      url: 'http://localhost:4101'
    },
    "core": {
      title: 'Core',
      url: 'http://localhost:4002'
    },
    "ui": {
      title: 'UI',
      url: 'http://localhost:4001'
    },
  }
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
