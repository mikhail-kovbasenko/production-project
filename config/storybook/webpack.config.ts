import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { resolve } from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };
  config!.resolve!.alias = { '@': resolve(__dirname, '..', '..', 'src') };
  config.resolve?.modules?.unshift(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx', '.js');

  if (config.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule | '...') => {
      if (rule !== '...' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  // eslint-disable-next-line no-param-reassign
  // config.module?.rules = config.module?.rules?.map((rule: RuleSetRule) => {
  //   if (/svg/.test(rule.test)) {
  //     return {
  //       ...rule, exclude: /\\.svg/i,
  //     };
  //   }

  //   return rule;
  // });
  config.module?.rules?.push(buildSvgLoader());
  config.module?.rules?.push(buildCssLoader(true));

  config?.plugins?.push(new DefinePlugin({
    IS_DEV: true,
    __API__: JSON.stringify('http://testapi.ru'),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  return config;
};
