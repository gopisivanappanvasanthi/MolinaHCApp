import { RestDictionaryService } from '@sitecore-jss/sitecore-jss';
import config from './config';

export const dictionaryService = new RestDictionaryService({
  apiHost: config.sitecoreApiHost,
  apiKey: config.sitecoreApiKey,
  siteName: config.jssAppName,
});