/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Har {
  log: Log;
  [k: string]: any;
}
export interface Log {
  version: string;
  creator: Creator;
  browser?: Browser;
  pages?: Page[];
  entries: Entry[];
  comment?: string;
  [k: string]: any;
}
export interface Creator {
  name: string;
  version: string;
  comment?: string;
  [k: string]: any;
}
export interface Browser {
  name: string;
  version: string;
  comment?: string;
  [k: string]: any;
}
export interface Page {
  startedDateTime: string;
  id: string;
  title: string;
  pageTimings: PageTimings;
  comment?: string;
  [k: string]: any;
}
export interface PageTimings {
  onContentLoad?: number;
  onLoad?: number;
  comment?: string;
  [k: string]: any;
}
export interface Entry {
  pageref?: string;
  startedDateTime: string;
  time: number;
  request: Request;
  response: Response;
  cache: Cache;
  timings: Timings;
  serverIPAddress?: string | string;
  connection?: string;
  comment?: string;
  [k: string]: any;
}
export interface Request {
  method: string;
  url: string;
  httpVersion: string;
  cookies: Cookie[];
  headers: Header[];
  queryString: Query[];
  postData?: PostData;
  headersSize: number;
  bodySize: number;
  comment?: string;
  [k: string]: any;
}
export interface Cookie {
  name: string;
  value: string;
  path?: string;
  domain?: string;
  expires?: string | null;
  httpOnly?: boolean;
  secure?: boolean;
  comment?: string;
  [k: string]: any;
}
export interface Header {
  name: string;
  value: string;
  comment?: string;
  [k: string]: any;
}
export interface Query {
  name: string;
  value: string;
  comment?: string;
  [k: string]: any;
}
export interface PostData {
  mimeType: string;
  text?: string;
  params?: Param[];
  comment?: string;
  [k: string]: any;
}
export interface Param {
  name: string;
  value?: string;
  fileName?: string;
  contentType?: string;
  comment?: string;
  [k: string]: any;
}
export interface Response {
  status: number;
  statusText: string;
  httpVersion: string;
  cookies: Cookie[];
  headers: Header[];
  content: Content;
  redirectURL: string;
  headersSize: number;
  bodySize: number;
  comment?: string;
  [k: string]: any;
}
export interface Content {
  size: number;
  compression?: number;
  mimeType: string;
  text?: string;
  encoding?: string;
  comment?: string;
  [k: string]: any;
}
export interface Cache {
  beforeRequest?: null | BeforeRequest;
  afterRequest?: null | AfterRequest;
  comment?: string;
  [k: string]: any;
}
export interface BeforeRequest {
  expires?: string;
  lastAccess: string;
  eTag: string;
  hitCount: number;
  comment?: string;
  [k: string]: any;
}
export interface AfterRequest {
  expires?: string;
  lastAccess: string;
  eTag: string;
  hitCount: number;
  comment?: string;
  [k: string]: any;
}
export interface Timings {
  dns?: number;
  connect?: number;
  blocked?: number;
  send: number;
  wait: number;
  receive: number;
  ssl?: number;
  comment?: string;
  [k: string]: any;
}
