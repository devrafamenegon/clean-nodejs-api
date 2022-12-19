export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Missing required parameters: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
