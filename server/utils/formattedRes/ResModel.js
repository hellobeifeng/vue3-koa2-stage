class BaseModel {
  constructor ({ code, data, message }) {
    this.code = code
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

export class SuccessModel extends BaseModel {
  constructor (data = {}) {
    super({
      code: 'A00200',
      data
    })
  }
}

export class ErrorModel extends BaseModel {
  constructor  (data = {}, message = '') {
    super({
      code: 'A00500',
      data,
      message
    })
  }
}