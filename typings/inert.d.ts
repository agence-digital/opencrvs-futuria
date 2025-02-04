import * as Hapi from '@hapi/hapi';

declare module '@hapi/hapi' {
  interface ResponseToolkit {
    file(path: string, options?: any): Hapi.ResponseObject;
  }
}
