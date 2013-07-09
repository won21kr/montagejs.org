montageDefine("28f0767","docs/wip-composition.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>WIP composition - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Component composition using Montage.<a class=anchor id=Component-composition-using-Montage. href="#Component-composition-using-Montage."></a>\n</h1>\n\n<p>The way to create and compose the ui for your application using montage is primarily by expressing this in the markup of your templates.</p>\n\n<h2>The Repetition<a class=anchor id=The-Repetition href="#The-Repetition"></a>\n</h2>\n\n<p></p><div class=highlight><pre>...\n<span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span><span class=p>{</span>\n    <span class=s2>"repetition"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"montage/ui/repetition.reel"</span><span class=p>,</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"repetition"</span><span class=p>},</span>\n            <span class=s2>"content"</span><span class=o>:</span> <span class=p>[</span><span class=mi>1</span><span class=p>,</span><span class=mi>2</span><span class=p>,</span><span class=mi>3</span><span class=p>]</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n    <span class=s2>"text"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"montage/ui/dynamic-text.reel"</span><span class=p>,</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"text"</span><span class=p>},</span>\n            <span class=s2>"value"</span><span class=o>:</span> <span class=s2>"hello"</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span><span class=nt>&lt;/script&gt;</span>\n...\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;ul</span> <span class=na>data-montage-id=</span><span class=s>"repetition"</span><span class=nt>&gt;</span>\n        <span class=nt>&lt;li</span> <span class=na>data-montage-id=</span><span class=s>"text"</span><span class=nt>&gt;&lt;/li&gt;</span>\n    <span class=nt>&lt;/ul&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n...\n</pre></div>\nVia the markup we are passing a parameter to the Repetition (the li element) and this will tell the repetition to repeat the li and its associated DynamicText as many times as there are values in the content array. In this case three times.\n\n<h2>Similarly the Condition<a class=anchor id=Similarly-the-Condition href="#Similarly-the-Condition"></a>\n</h2>\n\n<p></p><div class=highlight><pre>...\n<span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span><span class=p>{</span>\n    <span class=s2>"condition"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"montage/ui/condition.reel"</span><span class=p>,</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"condition"</span><span class=p>},</span>\n            <span class=s2>"condition"</span><span class=o>:</span> <span class=kc>false</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n    <span class=s2>"text"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"montage/ui/dynamic-text.reel"</span><span class=p>,</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"text"</span><span class=p>},</span>\n            <span class=s2>"value"</span><span class=o>:</span> <span class=s2>"This is the truth"</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span><span class=nt>&lt;/script&gt;</span>\n...\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"condition"</span><span class=nt>&gt;</span>\n        <span class=nt>&lt;span</span> <span class=na>data-montage-id=</span><span class=s>"text"</span><span class=nt>&gt;&lt;/span&gt;</span>\n    <span class=nt>&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n...\n</pre></div>\nThe span is a parameter to the Condition that tells it to show that element when the condition property is true. In this casse the condition will make sure the span is not visible on the screen.\n\n<h2>Implementing a custom component using the same pattern.<a class=anchor id=Implementing-a-custom-component-using-the-same-pattern. href="#Implementing-a-custom-component-using-the-same-pattern."></a>\n</h2>\n\n<p>Given the desired usage for CustomComponent.\n</p><div class=highlight><pre>...\n<span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span><span class=p>{</span>\n    <span class=s2>"customComponent"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"my/custom-component.reel"</span><span class=p>,</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"customComponent"</span><span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n    <span class=s2>"text"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"montage/ui/dynamic-text.reel"</span><span class=p>,</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"text"</span><span class=p>},</span>\n            <span class=s2>"value"</span><span class=o>:</span> <span class=s2>"I\'m included."</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span><span class=nt>&lt;/script&gt;</span>\n...\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"customComponent"</span><span class=nt>&gt;</span>\n        <span class=nt>&lt;span</span> <span class=na>data-montage-id=</span><span class=s>"text"</span><span class=nt>&gt;&lt;/span&gt;</span>         <span class=err>&lt;</span>- innerTemplate\n    <span class=nt>&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n...\n</pre></div>\nThe CustomComponent can make use of a <em>template argument</em> to include all the contents of it\'s <em>innerTemplate</em>. A template argument is an element that has the attribute data-arg. This marks the element as a placeholder that will replaced by the innerTemplate.\n\n<p><strong>my/custom-component.reel/custom-component.html</strong>\n</p><div class=highlight><pre>...\n<span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span><span class=p>{</span>\n    <span class=s2>"owner"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"my/custom-component.reel"</span>\n    <span class=p>}</span>\n<span class=p>}</span><span class=nt>&lt;/script&gt;</span>\n...\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>class=</span><span class=s>"my-CustomComponent--prettyFrame"</span><span class=nt>&gt;</span>\n        <span class=nt>&lt;span</span> <span class=na>data-arg=</span><span class=s>"*"</span><span class=nt>&gt;&lt;/span&gt;</span>\n    <span class=nt>&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n...\n</pre></div>\n\n<h2>The Substitution<a class=anchor id=The-Substitution href="#The-Substitution"></a>\n</h2>\n\n<p>The Substitution component allows you to branch the component tree based on a key in your data</p>\n\n<p></p><div class=highlight><pre>...\n<span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span><span class=p>{</span>\n    <span class=s2>"customerNameSubstitution"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"montage/ui/substitution.reel"</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"customerNameSubstitution"</span><span class=p>},</span>\n            <span class=s2>"switchComponents"</span><span class=o>:</span> <span class=p>{</span>\n                <span class=s2>"read"</span> <span class=o>:</span> <span class=s2>"montage/ui/dynamic-text.reel"</span>\n                <span class=s2>"edit"</span> <span class=o>:</span> <span class=s2>"montage/ui/input-text.reel"</span>\n            <span class=p>}</span>\n            <span class=s2>"switchValue"</span><span class=o>:</span> <span class=s2>"read"</span>\n        <span class=p>},</span>\n        <span class=s2>"bindings"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"value"</span><span class=o>:</span> <span class=p>{</span>\n                <span class=s2>"&lt;-"</span><span class=o>:</span> <span class=s2>"@customer.name"</span>\n            <span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>}</span><span class=nt>&lt;/script&gt;</span>\n...\n<span class=nt>&lt;body&gt;</span>\n    Customer name: <span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"customerNameSubstitution"</span><span class=nt>&gt;&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n...\n</pre></div>\n\n<h2>The Exposition<a class=anchor id=The-Exposition href="#The-Exposition"></a>\n</h2>\n\n<p>The Exposition component allows you to specify components that might or might not be related but need to occupy the same space in the dom.</p>\n\n<p></p><div class=highlight><pre>...\n<span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span><span class=p>{</span>\n    <span class=s2>"preferences"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"montage/ui/exposition.reel"</span>\n        <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"element"</span><span class=o>:</span> <span class=p>{</span><span class=s2>"#"</span><span class=o>:</span> <span class=s2>"preferences"</span><span class=p>}</span>\n        <span class=p>},</span>\n        <span class=s2>"bindings"</span><span class=o>:</span> <span class=p>{</span>\n            <span class=s2>"value"</span><span class=o>:</span> <span class=p>{</span>\n                <span class=s2>"&lt;-"</span><span class=o>:</span> <span class=s2>"@customer.name"</span>\n            <span class=p>}</span>\n        <span class=p>}</span>\n    <span class=p>},</span>\n    <span class=s2>"displayPanel"</span><span class=o>:</span> <span class=p>{...},</span>\n    <span class=s2>"networkPanel"</span><span class=o>:</span> <span class=p>{...},</span>\n    <span class=s2>"usersPanel"</span><span class=o>:</span> <span class=p>{...}</span>\n<span class=p>}</span><span class=nt>&lt;/script&gt;</span>\n...\n<span class=nt>&lt;body&gt;</span>\n    <span class=nt>&lt;div</span> <span class=na>data-montage-id=</span><span class=s>"preferences"</span><span class=nt>&gt;</span>\n        <span class=nt>&lt;div</span> <span class=na>data-param=</span><span class=s>"display"</span>  <span class=na>data-montage-id=</span><span class=s>"displayPanel"</span><span class=nt>&gt;&lt;/div&gt;</span>\n        <span class=nt>&lt;div</span> <span class=na>data-param=</span><span class=s>"network"</span>  <span class=na>data-montage-id=</span><span class=s>"networkPanel"</span><span class=nt>&gt;&lt;/div&gt;</span>\n        <span class=nt>&lt;div</span> <span class=na>data-param=</span><span class=s>"users"</span>  <span class=na>data-montage-id=</span><span class=s>"usersPanel"</span><span class=nt>&gt;&lt;/div&gt;</span>\n    <span class=nt>&lt;/div&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n...\n</pre></div>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(e,t,n){var a,s=e.getElementsByTagName(t)[0];e.getElementById(n)||(a=e.createElement(t),a.id=n,a.src="//platform.twitter.com/widgets.js",s.parentNode.insertBefore(a,s))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(e,t,n){var a,s=e.getElementsByTagName(t)[0];e.getElementById(n)||(a=e.createElement(t),a.id=n,a.src="//platform.twitter.com/widgets.js",s.parentNode.insertBefore(a,s))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();</script>\n\n</body>\n</html>'});