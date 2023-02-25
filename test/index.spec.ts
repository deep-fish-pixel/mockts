import express from 'express';
import { mockServer } from '../src';
import { request } from "./helper/client";

const app = express();

app.use(mockServer({
  prefix: '/api',
  rootPath: "../mock",
}));

app.listen(8000);


describe("Simple mock", () => {
  it("test success", () => {
    return request.get('http://localhost:8000/api/test01').then(res => {
      expect(res).toStrictEqual({ result: 0, msg: "success" });
    });
  });
});



