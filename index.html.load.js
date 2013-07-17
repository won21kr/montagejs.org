montageDefine("3ea393a","index.html",{text:'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Montage - HTML5 framework</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="stylesheets/normalize.css">\n    <link rel=stylesheet href="stylesheets/base.css">\n    <link rel=stylesheet href="stylesheets/index.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n\n    <script src="packages/montage@089b576/montage.js"></script>\n    <script type="text/montage-serialization">{"features":{"prototype":"ui/features.reel","properties":{"element":{"#":"features"}}}}</script>\n\n  </head>\n<body>\n\n    <header class="header-index pushed">\n        <h1><img class=logo src="images/logo-montage.png" alt=Montage></h1>\n        <h2 class=tagline>An <strong>HTML5 framework</strong> for building modern <strong>Web Apps</strong>.</h2>\n    </header>\n\n    <nav class="bar links">\n        <a class="link download" href="docs/quick-start.html">Quick Start</a>\n        <a class="link docs" href="docs/">Docs</a>\n    </nav>\n\n    <section id=intro class=intro>\n        <article>\n            <h3 class=title>Introducing Montage</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                <p>MontageJS helps you build scalable and maintainable HTML5 applications optimized for today\'s and tomorrow\'s range of connected devices. With MontageJS, developers can create reusable user interface components and modules, bind properties among components and controllers, and synchronize DOM queries and updates to ensure a smooth user experience, especially on resource-constrained devices.</p>\n                </div>\n                <aside class="col col-1-2">\n                    <p>Features include</p>\n                    <ul>\n                        <li>Reusable components and HTML templates</li>\n                        <li>Declarative component model</li>\n                        <li>Declarative data binding</li>                        \n                        <li>Managed draw cycle</li>\n                        <li>Implicit event delegation</li>\n                    </ul>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    <section id=features class=features style=min-height:1050px>\n        <article>\n            <h3 class=title>Features</h3>\n\n\n            <h3 class=sub-title>Declarative Data Binding</h3>\n            <div data-montage-id=features></div>\n\n            <div class=cols>\n                <div class="col col-1-2">\n                    <h3 class=sub-title>Reusable Components</h3>\n                    <p>MontageJS comes with a variety of self-contained, reusable, and reliable components for building native-quality HTML5 apps. You can use these components individually, nest them within others, or use our clean API to build your own. <a href="docs/exploring-components.html" target=_blank>Learn more &gt;</a></p>\n                </div>\n                <div class="col col-1-2">\n                    <h3 class=sub-title>Declarative Component Model</h3>\n                    <p>Montage models components as standalone web pages. The HTML of a component (the "template") contains a DOM skeleton and comes to life with the inclusion of a JSON formatted block or file—a component object model, distinct but connected to the DOM—that describes how to dress up the DOM with connections among components. <a href="docs/montage-serialization-format.html" target=_blank>Learn more &gt;</a></p>\n                </div>\n            </div>\n\n            <div class=cols>\n                <div class="col col-1-2">\n                    <h3 class=sub-title>Implicit Event Delegation</h3>\n                    <p>MontageJS supports and extends the browser\'s native event handling mechanism using an event delegation model. This model helps improve performance, provides simple event handling logic, and adds the ability to observe property changes. <a href="docs/event-handling.html" target=_blank>Learn more &gt;</a></p>\n                </div>\n                <div class="col col-1-2">\n                    <h3 class=sub-title>Managed Draw Cycle</h3>\n                    <p>MontageJS components participate in a managed draw cycle that separates reading and writing operations: DOM updates and queries are batched into separate code passes, thus limiting the number of DOM reflows while maximizing application performance. <a href="docs/component-draw-cycle.html" target=_blank>Learn more &gt;</a></p>\n                </div>\n\n            </div>\n\n\n        </article>\n    </section>\n\n	<section id=apps class="gallery apps pushed">\n	    <article>\n	        <h3 class=title>Made with Montage</h3>\n	        <p>A couple examples of Apps built with Montage.<br>\n                Check out more <a class=link href=apps>sample Apps and demos</a>.</p>\n	        <ul class=gallery>\n                <li class=gallery-item>\n   	                <a href="apps/popcorn/" target=_blank>\n   	                    <figure class=gallery-thumb><img class=gallery-img src="images/apps/popcorn.jpg" alt=Popcorn></figure>\n   	                    <figcaption class=gallery-description>Popcorn (Tablets)</figcaption>\n   	                </a>\n   	            </li>\n	            <li class=gallery-item>\n	                <a href="apps/calculator/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="images/apps/calculator.jpg" alt=Calculator></figure>\n	                    <figcaption class=gallery-description>Calculator (Mobile)</figcaption>\n	                </a>\n	            </li>\n	            <li class=gallery-item>\n	                <a href="apps/paparazzi/" target=_blank>\n	                    <figure class=gallery-thumb><img class=gallery-img src="images/apps/paparazzi.jpg" alt=Paparazzi></figure>\n	                    <figcaption class=gallery-description>Paparazzi (Desktop)</figcaption>\n	                </a>\n	            </li>\n                <li class=gallery-item>\n   	                <a href="apps/carconfigurator/" target=_blank>\n   	                    <figure class=gallery-thumb><img class=gallery-img src="images/apps/carconfigurator.jpg" alt="Car Configurator"></figure>\n   	                    <figcaption class=gallery-description>Car Configurator (WebGL)</figcaption>\n   	                </a>\n   	            </li>\n	        </ul>\n	    </article>\n	</section>\n\n 	<section id=tools class=tools>\n        <article>\n            <h3 class=title>Tools</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p><a href="https://github.com/montagejs/minit" target=_blank>Minit</a> kickstarts your Montage projects by generating prebuilt Montage application templates and components and placing the associated files inside the proper directories of your project.</p>\n                </div>\n                <div class="col col-1-2">\n                    <p><a href="https://github.com/montagejs/mop" target=_blank>Mop</a> translates your developer-optimized experience into a user-optimized experience by cleaning up an application with its deeply intertwined dependencies into a single optimized script.</p>\n                </div>\n            </div>\n        </article>\n    </section>\n\n    <section id=misc class=misc>\n        <article>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <h3 class=title>Browser Support</h3>\n                    <p>Montage works best in "evergreen" browsers, including current versions of Google Chrome, Firefox, Safari, Chrome Android, Mobile Safari, and IE 10.</p>\n                </div>\n                <div class="col col-1-2">\n                    <h3 class=title>License</h3>\n                    <p>Montage is <strong>open source</strong> and licensed under <strong>BSD</strong>. For more details see <a href="https://github.com/montagejs/montage/blob/master/LICENSE.md" target=_blank>LICENSE.md</a>.</p>\n                </div>\n            </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>Next steps</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>For more information <a href="docs/">explore the Montage documentation</a> or <a href="https://github.com/montagejs/montage#montage" target=_blank>dive into the code itself</a>.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <a href="https://github.com/montagejs/montage"><img style="position: absolute; top: 0; right: 0; border: 0" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"></a>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var s=document.createElement("script");s.type="text/javascript",s.async=!0,s.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(s,n)}();</script>\n\n</body>\n</html>'});