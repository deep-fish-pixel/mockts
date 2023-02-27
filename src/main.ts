import server from "./mockServer";

export enum Method {
 GET = 'GET',
 POST = 'POST',
 PATCH = 'PATCH',
 PUT = 'PUT',
 DELETE = 'DELETE'
}

interface Header{
 [key: string]: string | boolean| RegExp | Header | undefined;
 required?: boolean;
 regExp?: RegExp;
}

interface ObjectJSON{
 [key: string]: string | boolean| number | ObjectJSON;
}

function response(req: Request, res: Response): ObjectJSON | void {

}

type ResponseType = ObjectJSON | (typeof response);

export interface MockConfig{
 path: string;
 method?: Method | Array<Method>;
 headers?: Header;
 delay?: number;
 query?: {
  [key: string]: string | Array<string | number>;
 };
 params?: {
  [key: string]: string;
 }
 body?: {
  [key: string]: any;
 }
 paramAll?: {
  [key: string]: any;
 }
 validates?: {
  method?: Method | Array<Method>;
  query: {

  },
  params: {

  },
  body: {

  },
  paramAll: {

  },
  headers: {

  },
 }
 response: ResponseType
}
export function defineConfig(mock: MockConfig) {
 return mock;
}

console.log(1122334455667788)
export const mockServer = server;

