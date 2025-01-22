module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  plugins: [
    // {
    //   rules: {
    //     ticket: ({ subject }) => {
    //       const ticketRegex = /(\w+-{1}\d+)/
    //       return [
    //         ticketRegex.test(subject),
    //         'Example => feat(button): added theme settings [TICKET-123]',
    //       ]
    //     },
    //   },
    // },
  ],
  rules: {
    // ticket: [2, 'always'],
  },
  ignores: [(commit) => commit === ''],
  defaultIgnores: true,
  helpUrl:
    'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
  prompt: {
    messages: {},
    questions: {
      subject: {
        description:
          'Write a short, imperative tense description of the change',
      },
      ticket: {
        description: 'Provide a Ticket Number',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
    },
  },
}
