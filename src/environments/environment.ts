// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCzeqLbwoHNn5OcFDNtMcJoRCaqbIayS6o',
    authDomain: 'week-tweak.firebaseapp.com',
    databaseURL: 'https://week-tweak.firebaseio.com',
    projectId: 'week-tweak',
    storageBucket: 'week-tweak.appspot.com',
    messagingSenderId: '253720781124'
  },
  dialogflow: {
    wtBot: 'f40796bc30ee47e28c6843952ee4eba7'
  }
};
