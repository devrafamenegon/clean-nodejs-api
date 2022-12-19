export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Invalid parameters: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
