import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpService} from './services/http.service';
import {AppHttpInterceptor} from './interceptor/https-interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
  ],
  providers: [
    HttpService,
    AppHttpInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }],
  exports: []
})
export class HttpModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpModule,
      providers: [
        HttpService
      ]
    };
  }
}
