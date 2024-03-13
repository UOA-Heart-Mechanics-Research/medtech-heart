Medtech-Heart-Vue Overview
==========================

Build Setup
-----------

.. code:: bash

   # install dependencies
   $ yarn install

   # serve with hot reload at localhost:3000
   $ yarn dev

   # build for production and launch server
   $ yarn build
   $ yarn start

   # generate static project
   $ yarn generate

Quick start up
-------------

- Via docker
   - Important: Make sure you have docker and docker-compose installed, and the docker engine is running.
   - Clone/download the project to desktop, 
      - In the project root folder, there is a docker-start.bat file, double-click it, it will automatically run the heart app in docker container and open the chrome browser.
         - (if there is no heart app image in docker, it will automatically build a docker image and run the container, usually happens on first time, may take 1~2 minutes. If there is a heart app image, it will run the app in a docker container, may take around 30s)
         - if sometime the browser is blank, just refresh the browser the app will appear. : )
   - Run docker via command line:

   .. code:: bash

      cd medtech-heart
      docker-compose up

   - After running in the docker container, go `http://localhost:5173/`.
   - If the website is black, then refresh the broswer.

- Via nodejs environment
   - make sure the nodejs (version 16.14.0) and yarn are globally installed in the machine.
   - Clone/download the project to desktop, 
      - In the project root folder, there is a local_setup_start.bat file, double-click it,
         - It will automatically install all dependencies,
         - and open the chrome browser, waiting 30s~1min, the app will show in the browser. 

Nuxt Project
-------------

.. include:: example.md
   :strat-line: 1

For detailed explanation on how things work, check out the
`documentation`_.

Special Directories
-------------------

You can create the following extra directories, some of which have
special behaviors. Only ``pages`` is required; you can delete them if
you don’t want to use their functionality.

``assets``
~~~~~~~~~~

The assets directory contains your uncompiled assets such as Stylus or
Sass files, images, or fonts.

More information about the usage of this directory in `the
documentation`_.

``components``
~~~~~~~~~~~~~~

The components directory contains your Vue.js components. Components
make up the different parts of your page and can be reused and imported
into your pages, layouts and even other components.

More information about the usage of this directory in `the
documentation <https://nuxtjs.org/docs/2.x/directory-structure/components>`__.

``layouts``
~~~~~~~~~~~

Layouts are a great help when you want to change the look and feel of
your Nuxt app, whether you want to include a sidebar or have distinct
layouts for mobile and desktop.

More information about the usage of this directory in `the
documentation <https://nuxtjs.org/docs/2.x/directory-structure/layouts>`__.

``pages``
~~~~~~~~~

This directory contains your application views and routes. Nuxt will
read all the ``*.vue`` files inside this directory and setup Vue Router
automatically.

More information about the usage of this directory in `the
documentation <https://nuxtjs.org/docs/2.x/get-started/routing>`__.

``plugins``
~~~~~~~~~~~

The plugins directory contains JavaScript plugins that you want to run
before instantiating the root Vue.js Application. This is the place to
add Vue plugins and to inject functions or constants. Every time you
need to use ``Vue.use()``, you should create a file in ``plugins/`` and
add its path to plugins in ``nuxt.config.js``.

More information about the usage of this directory in `the
documentation <https://nuxtjs.org/docs/2.x/directory-structure/plugins>`__.

``static``
~~~~~~~~~~

This directory contains your static files. Each file inside this
directory is mapped to ``/``.

Example: ``/static/robots.txt`` is mapped as ``/robots.txt``.

More information about the usage of this directory in `the
documentation <https://nuxtjs.org/docs/2.x/directory-structure/static>`__.

``store``
~~~~~~~~~

This directory contains your Vuex store files. Creating a file in this
directory automatically activates Vuex.

More information about the usage of this directory in `the
documentation <https://nuxtjs.org/docs/2.x/directory-structure/store>`__.

.. _documentation: https://nuxtjs.org
.. _the documentation: https://nuxtjs.org/docs/2.x/directory-structure/assets