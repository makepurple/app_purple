const { getPrismaClientDmmf } = require('nexus-prisma/dist-cjs/helpers/prisma')
const ModelsGenerator = require('nexus-prisma/dist-cjs/generator/models/index')
const { Runtime } = require('nexus-prisma/dist-cjs/generator/runtime/settingsSingleton')

const gentimeSettings = {
  "output": {
    "directory": "/home/leedavidcs/projects/app_purple/packages/prisma/nexus-prisma",
    "name": "index"
  },
  "projectIdIntToGraphQL": "Int",
  "jsdocPropagationDefault": "guide",
  "docPropagation": {
    "GraphQLDocs": true,
    "JSDoc": true
  },
  "prismaClientImportId": "/home/leedavidcs/projects/app_purple/node_modules/.pnpm/@prisma+client@3.8.0_prisma@3.8.0/node_modules/@prisma/client"
}

const dmmf = getPrismaClientDmmf({
  // JSON stringify the values to ensure proper escaping
  // Details: https://github.com/prisma/nexus-prisma/issues/143
  // TODO test that fails without this code
  require: () => require("/home/leedavidcs/projects/app_purple/node_modules/.pnpm/@prisma+client@3.8.0_prisma@3.8.0/node_modules/@prisma/client"),
  importId: gentimeSettings.prismaClientImportId,
  importIdResolved: require.resolve("/home/leedavidcs/projects/app_purple/node_modules/.pnpm/@prisma+client@3.8.0_prisma@3.8.0/node_modules/@prisma/client")
})

const models = ModelsGenerator.JS.createNexusTypeDefConfigurations(dmmf, {
  runtime: Runtime.settings,
  gentime: gentimeSettings,
})

module.exports = {
  $settings: Runtime.settings.change,
  ...models,
}