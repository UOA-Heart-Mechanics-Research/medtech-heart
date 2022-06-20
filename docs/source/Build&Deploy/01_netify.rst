Deploy app on netify
======================

1. Create your netify account(recommend using your GitHub account).
2. ``Configure the Netlify app on GitHub``, that means you need to install netify on your GitHub, you can choose to install it in the selected repo or all repos.
3. Import the repo that you want to deploy on netify.
4. Choose which branch you want to deploy.
5. Config the ``Customize build settings``

.. code-block:: bash
    :linenos:

    // Config the Build command, in our code we use 
    yarn generate
    //Publish directory
    dist

See this video to learn more:

https://explorers.netlify.com/learn/get-started-with-nuxt/nuxt-generate-and-deploy

6. Now the heart-app host on this domain:

https://medtech-heart.netlify.app/

