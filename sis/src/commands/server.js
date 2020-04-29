const fileEnums = require('../enums')
module.exports = {
  name: 'node',
  run: async toolbox => {
    toolbox.print.success('Creating...')
    const {
      template,
      print: { success, error }
    } = toolbox

    fileEnums.map((element)=>{
      template.generate({
        template: element.template,
        target: element.target
      })
    })

    success('Structure generated successfully')
  }
}
