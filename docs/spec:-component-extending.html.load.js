montageDefine("28f0767","docs/spec:-component-extending.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Spec: Component Extending - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Component Extending<a class=anchor id=Component-Extending href="#Component-Extending"></a>\n</h1>\n\n<p><em>Editor António Afonso</em></p>\n\n<p>Index</p>\n\n<ul>\n<li>Introduction</li>\n<li>Functional Description</li>\n<li>API</li>\n<li>extends Template Property</li>\n<li>Examples</li>\n</ul><h2>Introduction<a class=anchor id=Introduction href="#Introduction"></a>\n</h2>\n\n<p>This specification describes how a developer can inherit and specialize components, either their own or from other packages.</p>\n\n<p>Extending a component is somewhat similar to extending a JavaScript object — by creating a new one and making its prototype be the extended object — with the caveat of also having to extend its template counterpart when present.</p>\n\n<h2>Functional Description<a class=anchor id=Functional-Description href="#Functional-Description"></a>\n</h2>\n\n<p>The process of extending a component is the same as creating an entirely new component using the original one as its prototype.</p>\n\n<p>If the customization doesn’t require a change in the controller of the component (i.e.: the JavaScript object) then it is sufficient to create an instance of the extended object.</p>\n\n<p>When the extended component has a template the developer needs to create its own template or point to the extended one.</p>\n\n<h2>API<a class=anchor id=API href="#API"></a>\n</h2>\n\n<p>There are three options to extend a component’s template:</p>\n\n<ol>\n<li>Set the <code>templateModuleId</code> to point to the parent if that is the exact one needed (e.g.: if the extended component doesn’t wish to introduce changes in the template).</li>\n<li>Create a new template that will completely redefine the markup of the component with no relation to the original template.</li>\n<li>Set the <code>extends</code> property of the template that points to the template to be imported and where. This is similar to the “Web Components Explained” <a href="http://dvcs.w3.org/hg/webcomponents/raw-file/tip/explainer/index.html#decorator-section">decorator</a>. This approach is useful when the component needs to add additional CSS data and/or reuse the original markup. The template object will be accessible through the template label of the serialization.</li>\n</ol><p><code>extends</code> Template Property</p>\n\n<p>This property needs to be an object with a <code>templateModuleId</code> of the template to extend and an <code>element</code> where the template’s elements should be inserted.\nThis extended template will be instantiated using the same instances that were provided to the component’s template, this means that the <code>owner</code> object of the extended template will still be the component.</p>\n\n<p>An additional <code>instances</code> property can also be defined to provide a different set of instances to the extended template. This property must be in the label/object key-value format just like the <code>instantiateWithInstances</code> parameters.</p>\n\n<p>All the elements inside the body of the extended template will be inserted at the <code>element</code> location.</p>\n\n<p>The current template being instantiated can be accessed in the serialization through the <code>template</code> label, the template will make sure this label will be associated with its own instance.</p>\n\n<p><code>Template.defineExtension(&lt;templateModuleId&gt;, &lt;elementId&gt;, &lt;instances&gt;)</code> is the programmatic way of extending a template.</p>\n\n<h2>Examples<a class=anchor id=Examples href="#Examples"></a>\n</h2>\n\n<h3>Extending the Toggle component by only changing its markup:<a class=anchor id=Extending-the-Toggle-component-by-only-changing-its-markup: href="#Extending-the-Toggle-component-by-only-changing-its-markup:"></a>\n</h3>\n\n<p><strong>my-toggle.js</strong>\n</p><div class=highlight><pre><span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>,</span>\n    <span class=nx>Toggle</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"ui/toggle"</span><span class=p>).</span><span class=nx>Toggle</span><span class=p>;</span>\n\n<span class=nx>exports</span><span class=p>.</span><span class=nx>MyToggle</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Toggle</span><span class=p>);</span>\n</pre></div>\n\n<p><strong>my-toggle.html</strong>\n</p><div class=highlight><pre><span class=cp>&lt;!DOCTYPE html&gt;</span>\n<span class=nt>&lt;html&gt;</span>\n<span class=nt>&lt;head&gt;</span>\n    <span class=nt>&lt;title&gt;&lt;/title&gt;</span>\n    <span class=nt>&lt;link</span> <span class=na>rel=</span><span class=s>"stylesheet"</span> <span class=na>type=</span><span class=s>"text/css"</span> <span class=na>href=</span><span class=s>"my-toggle.css"</span><span class=nt>&gt;</span>\n    <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n    <span class=p>{</span>\n        <span class=s2>"owner"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"my-toggle.reel"</span><span class=p>,</span>\n            <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n                <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"my-toggle"</span><span class=p>}</span>\n            <span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n    <span class=nt>&lt;/script&gt;</span>\n    \n<span class=nt>&lt;/head&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"my-toggle"</span><span class=nt>&gt;</span>\n        <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"thumb"</span> <span class=nt>/&gt;</span>\n    <span class=nt>&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n<span class=nt>&lt;/html&gt;</span>\n</pre></div>\n\n<h3>Extending the Toggle component by only changing some of its logic:<a class=anchor id=Extending-the-Toggle-component-by-only-changing-some-of-its-logic: href="#Extending-the-Toggle-component-by-only-changing-some-of-its-logic:"></a>\n</h3>\n\n<p><strong>my-toggle.js</strong>\n</p><div class=highlight><pre><span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>,</span>\n    <span class=nx>Toggle</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/ui/toggle.reel"</span><span class=p>).</span><span class=nx>Toggle</span><span class=p>;</span>\n\n<span class=nx>exports</span><span class=p>.</span><span class=nx>MyToggle</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Toggle</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>draw</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n            <span class=c1>// my different draw implementation</span>\n        <span class=p>}</span>\n    <span class=p>},</span>\n    <span class=nx>templateModuleId</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=s2>"montage/ui/toggle.reel/toggle.html"</span>\n    <span class=p>}</span>\n<span class=p>});</span>\n</pre></div>\n\n<h3>Extending the Toggle component by adding styling elements:<a class=anchor id=Extending-the-Toggle-component-by-adding-styling-elements: href="#Extending-the-Toggle-component-by-adding-styling-elements:"></a>\n</h3>\n\n<p><strong>my-toggle.js</strong>\n</p><div class=highlight><pre><span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>,</span>\n    <span class=nx>Toggle</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage/ui/toggle.reel"</span><span class=p>).</span><span class=nx>Toggle</span><span class=p>;</span>\n\n<span class=nx>exports</span><span class=p>.</span><span class=nx>MyToggle</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Toggle</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>draw</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n            <span class=c1>// my different draw implementation</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>});</span>\n</pre></div>\n\n<p><strong>my-toggle.html</strong>\n</p><div class=highlight><pre><span class=cp>&lt;!DOCTYPE html&gt;</span>\n<span class=nt>&lt;html&gt;</span>\n<span class=nt>&lt;head&gt;</span>\n    <span class=nt>&lt;title&gt;&lt;/title&gt;</span>\n    <span class=nt>&lt;link</span> <span class=na>rel=</span><span class=s>"stylesheet"</span> <span class=na>type=</span><span class=s>"text/css"</span> <span class=na>href=</span><span class=s>"my-toggle.css"</span><span class=nt>&gt;</span>\n    <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n    <span class=p>{</span>	\n             <span class=s2>"owner"</span><span class=o>:</span> <span class=p>{</span>\n		  <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"my-toggle.reel"</span><span class=p>,</span>\n            <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n                <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"my-toggle"</span><span class=p>}</span>\n            <span class=p>}</span>\n        <span class=p>},</span>\n \n        <span class=s2>"template"</span><span class=o>:</span> <span class=p>{</span>\n           <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n               <span class=s2>"extends"</span><span class=o>:</span> <span class=p>{</span>\n                   <span class=s2>"templateModuleId"</span><span class=o>:</span> <span class=s2>"montage/ui/toggle.reel/toggle.html"</span><span class=p>,</span>\n                   <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"toggle"</span><span class=p>},</span>\n			   <span class=s2>"instances"</span><span class=o>:</span> <span class=p>{</span>\n      			  <span class=s2>"owner"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"@"</span><span class=o>:</span> <span class=s2>" owner"</span><span class=p>}</span>\n                   <span class=p>}</span>\n               <span class=p>}</span>\n           <span class=p>}</span>\n       <span class=p>}</span>\n    <span class=p>}</span>\n    <span class=nt>&lt;/script&gt;</span>\n    \n<span class=nt>&lt;/head&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"my-toggle"</span><span class=nt>&gt;</span> ← (merge attributes from toggle.html)\n       <span class=nt>&lt;h1&gt;</span>My Toggle<span class=nt>&lt;/h1&gt;</span>\n       <span class=nt>&lt;div</span> <span class=na>id=</span><span class=s>"toggle"</span><span class=nt>&gt;&lt;/div&gt;</span>\n   <span class=nt>&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n<span class=nt>&lt;/html&gt;</span>\n</pre></div>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(e,n,s){var t,a=e.getElementsByTagName(n)[0];e.getElementById(s)||(t=e.createElement(n),t.id=s,t.src="//platform.twitter.com/widgets.js",a.parentNode.insertBefore(t,a))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(e,n,s){var t,a=e.getElementsByTagName(n)[0];e.getElementById(s)||(t=e.createElement(n),t.id=s,t.src="//platform.twitter.com/widgets.js",a.parentNode.insertBefore(t,a))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}();</script>\n\n</body>\n</html>'});