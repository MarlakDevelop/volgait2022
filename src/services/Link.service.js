export default class LinkService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  generate(options) {
    const optionsString = this.buildOptionsString(options)
    if (!!optionsString) {
      return `${this.baseUrl}?${optionsString}`
    }
    return this.baseUrl
  }

  buildOptionsString(options) {
    return Object.entries(options).map(option => {
      if (option[1] === null) return null
      if (typeof(option[1]) === 'array') return `${option[0]}=${option[1].join(',')}`
      return `${option[0]}=${option[1]}`
    }).filter(option => option != null).join('&')
  }
}
