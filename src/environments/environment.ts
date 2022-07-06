// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {prod} from './environment.prod';
import {dev} from './environment.dev';
import {config} from '@app/config';

const environments = {
  dev,
  prod
};

class Environment {

  private _env;

  constructor(env) {
    this.env = environments[env];

    console.log('using ' + this.env + ' as environment');
  }

  private get env() {
    return this._env;
  }

  private set env(env) {
    this._env = env;
  }

  public get production(): boolean {
    return this._env.production;
  }

  public get api_url(): string {
    return this._env.api_url;
  }
}

export const environment = new Environment(config.env);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
