const config = require('./tsconfig.base.json');

const getAliases = (includes) => {
  return Object.fromEntries(
    Object.entries(config.compilerOptions.paths)
      .filter(([_, value]) => {
        return includes.some((part) => {
          return value[0].includes(part);
        });
      })

      .map(([key, value]) => {
        const paths = value[0]
          .replace('/index.ts', '')

          .replace('/*', '');

        return [key.replace('/*', ''), paths];
      })
  );
};

const apps = getAliases(['apps/']);

const packages = getAliases(['packages/']);

const alias = {
  apps,
  packages,
};

module.exports = { alias };
