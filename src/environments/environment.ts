// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  settings: {
    serverendpoint: 'http://localhost:8080/server/api/',
    // serverendpoint: 'http://ec2-34-227-171-6.compute-1.amazonaws.com:8081/demoson/server/api',
    dateFormat : 'dd/MM/yyyy'
  }
};

export class StaticVariable {
  private static _settings;
  constructor() {
    StaticVariable._settings = environment.settings;
  }

  public STATIC_VARIABLE = StaticVariable;

  static get settings() {
    return this._settings;
  }
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
