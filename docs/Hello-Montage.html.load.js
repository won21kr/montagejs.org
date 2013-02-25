montageDefine("574d69b","docs/Hello-Montage.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n    \n    <title>Hello Montage - Montage Docs</title>\n    \n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n        \n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->    \n</head>\n<body class=docs>\n  \n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n            </nav>\n        </div>\n    </header>\n    \n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Hello Montage<a class=anchor id=Hello-Montage href="#Hello-Montage"></a>\n</h1>\n\n<p>In this tutorial you create a simple Montage application that uses the Montage <a href="http://montagejs.github.com/montage/samples/sink/#dynamicText">DynamicText</a> component to display a text string in a <code>&lt;div/&gt;</code> element. The purpose of the tutorial is to introduce you to the parts that make up a Montage application.</p>\n\n<p>To complete this tutorial, you should have already followed the steps in the Montage <a href=Quick-Start.html>Quick Start</a>.</p>\n\n<p>This tutorial walks you through the files that <code>minit</code> creates for you, so that you\'ll be familiar with the structure of a montage application.</p>\n\n<h2>Create the project folder and index page<a class=anchor id=Create-the-project-folder-and-index-page href="#Create-the-project-folder-and-index-page"></a>\n</h2>\n\n<p>The main HTML page of every Montage application must include the Montage loader script, which bootstraps the framework and your application.</p>\n\n<ol>\n<li>In your Montage ~/Projects folder create a new folder called “hello”.</li>\n<li>Create a new file named index.html.</li>\n<li>Copy and paste the following text into index.html.</li>\n</ol><p></p><div class=highlight><pre><span class=cp>&lt;!DOCTYPE html&gt;</span>\n<span class=nt>&lt;html&gt;</span>\n<span class=nt>&lt;head&gt;</span>\n    <span class=nt>&lt;title&gt;</span>Hello Montage<span class=nt>&lt;/title&gt;</span>\n    <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/javascript"</span> <span class=na>src=</span><span class=s>"./node_modules/montage/montage.js"</span> <span class=na>data-auto-package</span><span class=nt>&gt;&lt;/script&gt;</span>\n    <span class=nt>&lt;/head&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"title"</span><span class=nt>&gt;&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n<span class=nt>&lt;/html&gt;</span>\n</pre></div>\n\n<p>This HTML includes a reference to the Montage loader script (montage.js) which we will add in a minute. The presence of the <code>data-auto-package</code> attribute is a convenience that frees you from having to manually create a package.json file. The <code>&lt;div&gt;</code> element in the HTML body has a <code>data-montage-id</code> attribute whose value identifies the element to Montage during deserialization.</p>\n\n<h2>Create a Montage serialization block<a class=anchor id=Create-a-Montage-serialization-block href="#Create-a-Montage-serialization-block"></a>\n</h2>\n\n<p>A serialization block is a JSON structure that declares serialized versions of Montage components and objects used by the application. A serialization can also describe data bindings between components in the same serialization block, and declare event listeners. The JSON structure is contained by a <code>&lt;script&gt;</code> element of type “text/montage-serialization”. For more information about the serialization format, see <a href=Montage-serialization-format.html>Montage serialization format</a>.</p>\n\n<p>Add a serialization block to the document:\n</p><div class=highlight><pre><span class=cp>&lt;!DOCTYPE html&gt;</span>\n<span class=nt>&lt;html&gt;</span>\n<span class=nt>&lt;head&gt;</span>\n    <span class=nt>&lt;title&gt;</span>Hello Montage<span class=nt>&lt;/title&gt;</span>\n    <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/javascript"</span> <span class=na>src=</span><span class=s>"./node_modules/montage/montage.js"</span> <span class=na>data-auto-package</span><span class=nt>&gt;&lt;/script&gt;</span>\n    <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n    <span class=p>{</span>\n\n    <span class=p>}</span>\n    <span class=nt>&lt;/script&gt;</span>\n    <span class=nt>&lt;/head&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"title"</span><span class=nt>&gt;&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n<span class=nt>&lt;/html&gt;</span>\n</pre></div>\n\n<h2>Add a DynamicText component to the serialization block<a class=anchor id=Add-a-DynamicText-component-to-the-serialization-block href="#Add-a-DynamicText-component-to-the-serialization-block"></a>\n</h2>\n\n<p>Next you’ll add a serialized <a href="http://montagejs.github.com/montage/samples/sink/#dynamicText">DynamicText</a> component to the Montage serialization block, and associate it with the <code>&lt;div&gt;</code> element. Each Montage component in a serialization is represented as a JSON object that contains a member named <code>prototype</code>. This property is a string whose value compactly specifies two pieces of data: the prototype’s module ID (it’s URL, so to speak), and the names of the exported prototype. The name of the prototype (DynamicText) is inferred from the last path segment of the module ID (dynamic-text), according to some simple naming conventions.</p>\n\n<p>Modify the serialization as follows:\n</p><div class=highlight><pre><span class=nt>&lt;script</span> <span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n{\n    "title": {\n        "prototype": "montage/ui/dynamic-text.reel"\n    }\n}\n<span class=nt>&lt;/script&gt;</span>\n</pre></div>\n\n<p>Notes:</p>\n\n<ul>\n<li>The “title” label assigned to the serialized DynamicText object is only used internally by Montage during the deserialization process. It does not translate into a property or instance name.</li>\n</ul><h2>Specify the component’s initial property values<a class=anchor id="Specify-the-component’s-initial-property-values" href="#Specify-the-component%E2%80%99s-initial-property-values"></a>\n</h2>\n\n<p>You can specify initial values for a serialized component by adding a <code>properties</code> object to the JSON object. Every Montage component has an <code>element</code> property that identifies the DOM element that it controls. The DynamicText component’s <code>value</code> property specifies the text string the component should display.</p>\n\n<p>The JSON serialization format includes a extension that allows you to reference DOM elements by their <code>data-montage-id</code> values. This is called an “element reference” object and it has the following form:</p>\n\n<p><code>"element": {"#": "elementID"}</code></p>\n\n<p>At runtime, the deserializer assigns to “element” a reference to the HTMLElement whose <code>data-montage-id</code> is <code>elementID</code>.</p>\n\n<p>To specify the DynamicText component’s DOM element and initial text value, modify the serialization as follows:\n</p><div class=highlight><pre><span class=nt>&lt;script</span> <span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n{\n    "title": {\n        "prototype": "montage/ui/dynamic-text.reel",\n        "properties": {\n            "element": {"#": "title"},\n            "value": "Hello, Montage!"\n        }\n    }\n}\n<span class=nt>&lt;/script&gt;</span>\n</pre></div>\n\n<h2>Create the package.json file and add montage to the app.<a class=anchor id=Create-the-package.json-file-and-add-montage-to-the-app. href="#Create-the-package.json-file-and-add-montage-to-the-app."></a>\n</h2>\n\n<ol>\n<li>Create a new file named <code>package.json</code> </li>\n<li>Copy and paste the following into that file:\n<div class=highlight><pre><span class=p>{</span>\n    "<span class=n>name</span>"<span class=p>:</span> "<span class=n>hello</span><span class=o>-</span><span class=n>world</span>"<span class=p>,</span>\n    "<span class=n>version</span>"<span class=p>:</span> "<span class=mf>0.0</span><span class=p>.</span><span class=mi>1</span>"<span class=p>,</span>\n    "<span class=n>dependencies</span>"<span class=p>:</span> <span class=p>{</span>\n        "<span class=n>montage</span>"<span class=p>:</span> "<span class=o>*</span>"\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n</li>\n<li>Save that file (in the same folder as index.html.</li>\n<li>From terminal run `<code>npm install</code> in that folder to install Montage.</li>\n</ol><h2>Test in a browser<a class=anchor id=Test-in-a-browser href="#Test-in-a-browser"></a>\n</h2>\n\n<p>Save your changes and point your web browser at the project’s index.html page (for example, <a href="http://localhost:8081/hello/index.html">http://localhost:8081/hello/index.html</a>). You should see something like the following:</p>\n\n<p><img src="http://montagejs.org/docs/img/hello-montage.png" alt="Hello, Montage!"></p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    \n    <section id=social class=social>\n        <article>\n            \n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n            \n            \n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n            \n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n            \n        </article>\n    </section>\n        \n    \n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n        \n    \n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n    \n</body>\n</html>'})