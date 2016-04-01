module.exports = {
  rules: {
    enable(context) {
      const sourceCode = context.getSourceCode(),
        comments = sourceCode.getAllComments()

      if (!comments || comments.length < 1 || !comments[0].value.match(/@flow/)) {
        context.report({
          message: 'Missing @flow directive at the top of the file',
          loc: { line: 1, col: 0 },
          fix: fixer => fixer.insertTextBeforeRange([0, 0], '// @flow\n')
        })
      }

      return {}
    }
  }
}
