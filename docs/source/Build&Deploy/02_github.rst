Deploy on GitHub Pages
=========================

When we deploy the project on GitHub Pages we need to create a gh-pages branch, we don't need to create this branch manually!

Here are the steps we host the project on GitHub pages.

1. Set up the base route for ``generate project``, because we want to deploy the project on ``https://github.com/<USERNAME>/<REPO>``. So we need to config our project base route with our REPO name in nuxt.config.js.

.. code-block:: bash
    :linenos:

    const routerBase =
    process.env.DEPLOY_ENV === "GH_PAGES"
        ? {
            router: {
            base: "/<your REPO>/",
            },
        }
        : {};
    export default {
        ...routerBase
    }

2. Set the ``target`` and ``generate`` in nuxt.config.js

.. code-block:: bash
    :linenos:

    export default {
        target: "static",
        ...routerBase,
        generate: {
            dir: "build",
            routes: [
            "/model-heart",
            "/attack-healthy",
            "/attack-minor",
            "/attack-severe",
            "/electricity-healthy",
            "/electricity-fibrillation",
            "/failure-healthy",
            "/failure-compensated",
            "/failure-decompensated",
            ],
        },
    }

3. Set the package command in package.json

.. code-block:: bash
    :linenos:

    {
        "scripts": {
            "dev": "nuxt",
            "build": "nuxt build",
            "start": "nuxt start",
            "generate": "nuxt generate",
            "build:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt build",
            "generate:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt generate"
        },
    }

4. Modify the code when finished

.. code-block:: bash
    :linenos:

    yarn generate:gh-pages
    git add .
    git commit -m "Ready to host on a GitHub pages"
    git push origin main

5. After you merge your local code to your main branch, we need to generating `gh-pages` branches

.. code-block:: bash
    :linenos:

    git subtree push --prefix=build origin gh-pages

6. Then the project will be automatically host on your GitHub pages. Go ``settings`` -> ``pages`` to see the link.