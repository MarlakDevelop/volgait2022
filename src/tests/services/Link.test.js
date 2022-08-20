import LinkService from "services/Link.service";

test('getting query string from options', () => {
  const linkService = new LinkService('')

  const tests = [
    {
      options: {screen1: 1},
      result: 'screen1=1'
    },
    {
      options: {screen2: false},
      result: 'screen2=false'
    },
    {
      options: {screen3: ['12', 1]},
      result: 'screen3=12,1'
    },
    {
      options: {screen4: 'привет'},
      result: 'screen4=привет'
    },
    {
      options: {screen5: null},
      result: ''
    },
    {
      options: {screen1: 1, screen2: false, screen3: ['12', 1], screen4: 'привет', screen5: null},
      result: 'screen1=1&screen2=false&screen3=12,1&screen4=привет'
    }
  ]

  tests.forEach((test) => {
    expect(linkService.buildOptionsString(test.options)).toBe(test.result)
  })
})

test('getting url link', () => {
  const url = 'https://example.com'
  const linkService = new LinkService(url)

  const tests = [
    {
      options: {screen1: 1, screen2: false, screen3: ['12', 1], screen4: 'привет', screen5: null},
      result: `${url}?screen1=1&screen2=false&screen3=12,1&screen4=привет`
    },
    {
      options: {screen5: null},
      result: url
    },
    {
      options: {},
      result: url
    }
  ]

  tests.forEach((test) => {
    expect(linkService.generate(test.options)).toBe(test.result)
  })
})
