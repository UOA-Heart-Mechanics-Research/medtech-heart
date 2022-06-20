Important Notes 
================

We are using static site generation with Nuxt ‘generate’ command to create a static website, to provide easy accessibility for other team members. However, ‘generate’ command ignores dynamic routes as it does not know about them. To create these routes, we just need to add these routes in the configuration.(See generate: {routes: [ … in nuxt.config.js)

.. toctree::
    :maxdepth: 2
    :numbered: 2

    nuxt