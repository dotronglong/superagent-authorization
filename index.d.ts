declare module "superagent-authorization" {
  export function Basic(username: string, password: string): any
  export function Bearer(token: string): any
}