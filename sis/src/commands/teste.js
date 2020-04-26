module.exports = {
  name: 'teste',
  run: async toolbox => {
    toolbox.print.success('Executou')

    const {
      template,
      print: {success, error}
    } = toolbox

    await template.generate({
      template: 'app.js.ejs',
      target: 'src/app.js',
    })

    success('Generate app.js')
  },
};