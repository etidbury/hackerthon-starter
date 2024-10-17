import { SSTConfig } from 'sst';
import { CoreStack } from './stacks/CoreStack';

export default {
  config(_input) {
    return {
      name: 'hackathon-starter',
      region: 'eu-west-2',
    };
  },
  stacks(app) {
    app.stack(CoreStack);
  },
} satisfies SSTConfig;
