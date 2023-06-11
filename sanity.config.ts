import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({
    projectId: 'wa999jxr',

    dataset: 'production',

    title: 'My Personal Website',

    apiVersion: '2023-05-31',

    basePath: '/admin',

    plugins: [deskTool()],

    schema: { types: schemas },
})

export default config
