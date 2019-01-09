export const environment = {
  production: false,
  settings: {
    serverendpoint: 'http://localhost:8080/server/api/',
    // serverendpoint: 'http://ec2-34-227-171-6.compute-1.amazonaws.com:8081/demoson/server/api/',
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
