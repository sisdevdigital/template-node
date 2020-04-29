module.exports = [
  {
    "template": "app.js.ejs",
    "target": "server/src/app.js"
  },
  {
    "template": "server.js.ejs",
    "target": "server/src/server.js"
  },
  {
    "template": "HealthController.js.ejs",
    "target": "server/src/app/controllers/HealthController.js"
  },
  {
    "template": ".gitkeep.ejs",
    "target": "server/src/app/middlewares/.gitkeep"
  },
  {
    "template": ".gitkeep.ejs",
    "target": "server/src/app/models/.gitkeep"
  },
  {
    "template": "database.js.ejs",
    "target": "server/src/config/database.js"
  },
  {
    "template": ".gitkeep.ejs",
    "target": "server/src/database/migrations/.gitkeep"
  },
  {
    "template": "database/index.js.ejs",
    "target": "server/src/database/index.js"
  },
  {
    "template": "helpers/httpCodes.js.ejs",
    "target": "server/src/helpers/enums/httpCodes.js"
  },
  {
    "template": "helpers/logger.js.ejs",
    "target": "server/src/helpers/logger.js"
  },
  {
    "template": "routes/health.routes.js.ejs",
    "target": "server/src/routes/health.routes.js"
  },
  {
    "template": "routes/index.routes.js.ejs",
    "target": "server/src/routes/index.routes.js"
  },
  {
    "template": "swagger/openapi.yaml.ejs",
    "target": "server/swagger/openapi.yaml"
  },
  {
    "template": ".gitkeep.ejs",
    "target": "server/tmp/.gitkeep"
  },
  {
    "template": "postman/Estrutura.postman_collection.json.ejs",
    "target": "server/postman/Estrutura.postman_collection.json"
  },
  {
    "template": "__tests__/health.test.js.ejs",
    "target": "server/__tests__/integration/health.test.js"
  },
  {
    "template": ".gitkeep.ejs",
    "target": "server/__tests__/integration/mock/.gitkeep"
  },
  {
    "template": ".gitkeep.ejs",
    "target": "server/__tests__/unit/.gitkeep"
  },
  {
    "template": "root_files/.editorconfig.ejs",
    "target": "server/.editorconfig"
  },
  {
    "template": "root_files/.env.example.ejs",
    "target": "server/.env.example"
  },
  {
    "template": "root_files/.env.test.ejs",
    "target": "server/.env.test"
  },
  {
    "template": "root_files/.eslintrc.js.ejs",
    "target": "server/.eslintrc.js"
  },
  {
    "template": "root_files/.eslintignore.ejs",
    "target": "server/.eslintignore"
  },
  {
    "template": "root_files/.gitignore.ejs",
    "target": "server/.gitignore"
  },
  {
    "template": "root_files/.prettierrc.ejs",
    "target": "server/.prettierrc"
  },
  {
    "template": "root_files/.sequelizerc.ejs",
    "target": "server/.sequelizerc"
  },
  {
    "template": "root_files/commitlint.config.js.ejs",
    "target": "server/commitlint.config.js"
  },
  {
    "template": "root_files/Dockerfile.ejs",
    "target": "server/Dockerfile"
  },
  {
    "template": "root_files/Jenkinsfile.ejs",
    "target": "server/Jenkinsfile"
  },
  {
    "template": "root_files/jest.config.js.ejs",
    "target": "server/jest.config.js"
  },
  {
    "template": "root_files/.babelrc.ejs",
    "target": "server/.babelrc"
  },
  {
    "template": "root_files/nodemon.json.ejs",
    "target": "server/nodemon.json"
  },
  {
    "template": "root_files/package.json.ejs",
    "target": "server/package.json"
  },
  {
    "template": "root_files/README.md.ejs",
    "target": "server/README.md"
  }
]
