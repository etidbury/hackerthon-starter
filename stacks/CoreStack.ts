import { Api, Table, StaticSite, StackContext } from 'sst/constructs';

export function CoreStack({ stack }: StackContext) {
  // Create the table
  const table = new Table(stack, 'Counter', {
    fields: {
      counter: 'string',
    },
    primaryIndex: { partitionKey: 'counter' },
  });

  // Create the HTTP API
  const api = new Api(stack, 'Api', {
    defaults: {
      function: {
        // Bind the table name to our API
        bind: [table],
      },
    },
    routes: {
      'POST /': 'api/functions/src/lambda.main',
    },
  });

  // Deploy our React app
  const site = new StaticSite(stack, 'ReactSite', {
    path: './',
    buildCommand: 'vite build',
    buildOutput: 'dist',
    environment: {
      VITE_APP_API_URL: api.url,
    },
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
    ApiEndpoint: api.url,
  });
}
