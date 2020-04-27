module.exports = {
  name: 'node',
  run: async toolbox => {
    toolbox.print.success('Creating...')
    const SERVER = 'server'
    const SRC = 'src'
    const {
      template,
      print: { success, error }
    } = toolbox

    //outside subfolder in src
    await template.generate({
      template: 'app.js.ejs',
      target: `${SERVER}/${SRC}/app.js`
    })

    await template.generate({
      template: 'server.js.ejs',
      target: `${SERVER}/${SRC}/server.js`
    })

    //[FOLDER = app]
    await template.generate({
      template: 'HealthController.js.ejs',
      target: `${SERVER}/${SRC}/app/controllers/HealthController.js`
    })
    await template.generate({
      template: '.gitkeep.ejs',
      target: `${SERVER}/${SRC}/app/middlewares/.gitkeep`
    })
    await template.generate({
      template: '.gitkeep.ejs',
      target: `${SERVER}/${SRC}/app/models/.gitkeep`
    })

    //[FOLDER = config]
    await template.generate({
      template: 'database.js.ejs',
      target: `${SERVER}/${SRC}/config/database.js`
    })

    //[FOLDER = database]
    await template.generate({
      template: '.gitkeep.ejs',
      target: `${SERVER}/${SRC}/database/migrations/.gitkeep`
    })
    await template.generate({
      template: 'database/index.js.ejs',
      target: `${SERVER}/${SRC}/database/index.js`
    })

    //[FOLDER = helpers]
    await template.generate({
      template: 'helpers/httpCodes.js.ejs',
      target: `${SERVER}/${SRC}/helpers/enums/httpCodes.js`
    })
    await template.generate({
      template: 'helpers/logger.js.ejs',
      target: `${SERVER}/${SRC}/helpers/logger.js`
    })

    //[FOLDER = routes]
    await template.generate({
      template: 'routes/health.routes.js.ejs',
      target: `${SERVER}/${SRC}/routes/health.routes.js`
    })
    await template.generate({
      template: 'routes/index.routes.js.ejs',
      target: `${SERVER}/${SRC}/routes/index.routes.js`
    })

    //[FOLDER = swagger]
    await template.generate({
      template: 'swagger/openapi.yaml.ejs',
      target: `${SERVER}/swagger/openapi.yaml`
    })

    //[FOLDER = tmp]
    await template.generate({
      template: '.gitkeep.ejs',
      target: `${SERVER}/tmp/.gitkeep`
    })

    //[FOLDER = postman]
    await template.generate({
      template: 'postman/Estrutura.postman_collection.json.ejs',
      target: `${SERVER}/postman/Estrutura.postman_collection.json`
    })

    //[FOLDER = integration test]
    await template.generate({
      template: '__tests__/health.test.js.ejs',
      target: `${SERVER}/__tests__/integration/health.test.js`
    })
    await template.generate({
      template: '.gitkeep.ejs',
      target: `${SERVER}/__tests__/integration/mock/.gitkeep`
    })

    //[FOLDER = unit test]
    await template.generate({
      template: '.gitkeep.ejs',
      target: `${SERVER}/__tests__/unit/.gitkeep`
    })

    //[FOLDER = root]
    await template.generate({
      template: 'root_files/.editorconfig.ejs',
      target: `${SERVER}/.editorconfig`
    })
    await template.generate({
      template: 'root_files/.env.example.ejs',
      target: `${SERVER}/.env.example`
    })
    await template.generate({
      template: 'root_files/.env.test.ejs',
      target: `${SERVER}/.env.test`
    })

    await template.generate({
      template: 'root_files/.eslintrc.js.ejs',
      target: `${SERVER}/.eslintrc.js`
    })
    await template.generate({
      template: 'root_files/.eslintignore.ejs',
      target: `${SERVER}/.eslintignore`
    })
    await template.generate({
      template: 'root_files/.gitignore.ejs',
      target: `${SERVER}/.gitignore`
    })

    await template.generate({
      template: 'root_files/.prettierrc.ejs',
      target: `${SERVER}/.prettierrc`
    })
    await template.generate({
      template: 'root_files/.sequelizerc.ejs',
      target: `${SERVER}/.sequelizerc`
    })
    await template.generate({
      template: 'root_files/commitlint.config.js.ejs',
      target: `${SERVER}/commitlint.config.js`
    })

    await template.generate({
      template: 'root_files/Dockerfile.ejs',
      target: `${SERVER}/Dockerfile`
    })
    await template.generate({
      template: 'root_files/Jenkinsfile.ejs',
      target: `${SERVER}/Jenkinsfile`
    })
    await template.generate({
      template: 'root_files/jest.config.js.ejs',
      target: `${SERVER}/jest.config.js`
    })

    await template.generate({
      template: 'root_files/nodemon.json.ejs',
      target: `${SERVER}/nodemon.json`
    })
    await template.generate({
      template: 'root_files/package.json.ejs',
      target: `${SERVER}/package.json`
    })
    await template.generate({
      template: 'root_files/README.md.ejs',
      target: `${SERVER}/README.md`
    })

    success('Structure generated successfully')
  }
}
