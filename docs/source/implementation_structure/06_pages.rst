Pages
===========

.. image:: images/05_pages.jpg
.. include:: ../style.rst

:green:`PAGES`

-  The application uses dynamic routes to show topics, with
   \_slug/index.vue page creating these dynamic routes. The route names
   are created by concatenating keys of topic and subtopic and joining
   with ‘-’ character.(see menu buttons in navigation.vue in
   components/navigation folder). This is done just to facilitate easy
   searching of subtopic in topics.json data file, otherwise just the
   key of each subtopic can also be used to generate route names,
   provided they are unique.

-  index.vue at root of pages folder which is the default entry point
   for the website is redirected at it’s middleware to “model-heart,”
   which is the default route showing the home page. Since we are using
   dynamic routes and index.vue at pages root cannot be made dynamic(as
   per my knowledge) hence, \_slug/index.vue is used to show all these
   pages with dynamic routes. Also, the content of home page are also
   maintained in the similar way as other topics, i.e. through
   topics.json, there is nothing to show at index.vue

-  about/index.vue is the page for about section and has route “/about”.