import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

export interface Configuration {
    retry: number    
}
export const CONFIG_TOKEN = new InjectionToken<Configuration>('Configuration Token');
@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    private config: Configuration = {
        retry: 0
    }
    constructor( @Optional() @Inject(CONFIG_TOKEN) private configuration: Configuration) {
        if (this.configuration) {
            this.config = {...this.config, ...configuration};
        }
    }


    getRetryAttempt(): number {
        return this.config.retry;
    }
}
