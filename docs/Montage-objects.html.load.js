montageDefine("574d69b","docs/Montage-objects.html",{text:'<!doctype html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n    \n    <title>Montage objects - Montage Docs</title>\n    \n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n        \n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->    \n</head>\n<body class=docs>\n  \n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n            </nav>\n        </div>\n    </header>\n    \n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<h1>Montage objects<a class=anchor id=Montage-objects href="#Montage-objects"></a>\n</h1>\n\n<p>Montage objects are based on the <a href="http://ecma-international.org/ecma-262/5.1/#sec-8.6">ECMAScript 5</a> object model, which uses <code>Object.create()</code> to define new objects. Montage provides a similar method called <code>Montage.create()</code> that serves two purposes: to define new Montage types that share a common interface, and to create new <em>instances</em> from those types.</p>\n\n<h2>Montage type definition and object creation<a class=anchor id=Montage-type-definition-and-object-creation href="#Montage-type-definition-and-object-creation"></a>\n</h2>\n\n<p>The <code>Montage.create()</code> method defined by the framework is used for two purposes:</p>\n\n<ul>\n<li>To define new (Montage) types—A Montage type is prototype for the purpose of providing a common interface shared by instances of that type. Types should only contain state if it is acceptable for all instances of that type and its descendant types to share that state. In this way, types are akin to classes in statically typed languages like Java.</li>\n<li>To create new instances—An instance is a prototype for the purpose of doing work. The properties of an instance have state which must not be shared by other objects. An instance must not be used as a type. This usage is analogous to <code>Object.create()</code>.</li>\n</ul><h3>Creating Montage types<a class=anchor id=Creating-Montage-types href="#Creating-Montage-types"></a>\n</h3>\n\n<p>To define a new Montage type, you call <code>Montage.create()</code> and pass it two parameters: the prototype object from which the new type will inherit, and a properties object. The properties object is an object literal whose own properties define the new properties and functions that the type will have.</p>\n\n<p><code>var type = Montage.create(Prototype, propertiesObject);</code></p>\n\n<p>For instance, the following defines a new Montage type named <code>Person</code> whose base prototype is the <code>Montage</code> object itself. The new type inherits all the properties of the base prototype. The properties object passed to <code>Montage.create()</code> defines three member properties: <code>_name</code>, <code>name</code>, and the function <code>sayHello()</code>.</p>\n\n<p></p><div class=highlight><pre><span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>;</span>\n<span class=kd>var</span> <span class=nx>Person</span> <span class=o>=</span> <span class=nx>exports</span><span class=p>.</span><span class=nx>Person</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Montage</span><span class=p>,</span> <span class=p>{</span>\n    <span class=nx>_name</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kc>null</span><span class=p>,</span>\n    <span class=p>},</span>\n    <span class=nx>sayHello</span><span class=o>:</span> <span class=p>{</span>\n      <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n        <span class=nx>console</span><span class=p>.</span><span class=nx>log</span><span class=p>(</span><span class=s2>"Hello, my name is "</span> <span class=o>+</span> <span class=k>this</span><span class=p>.</span><span class=nx>name</span><span class=p>);</span>\n      <span class=p>}</span>\n    <span class=p>},</span>\n    <span class=nx>name</span><span class=o>:</span> <span class=p>{</span>\n      <span class=nx>get</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n        <span class=k>return</span> <span class=k>this</span><span class=p>.</span><span class=nx>_name</span><span class=p>;</span> \n      <span class=p>},</span>\n      <span class=nx>set</span><span class=o>:</span> <span class=kd>function</span><span class=p>(</span><span class=nx>value</span><span class=p>)</span> <span class=p>{</span>\n        <span class=k>this</span><span class=p>.</span><span class=nx>_name</span> <span class=o>=</span> <span class=nx>value</span><span class=p>;</span>\n      <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>});</span>\n</pre></div>\n\n<p>The properties object contains one or more <em>property descriptors</em>, object literals whose fields describe the property, including its value and other property <em>attributes</em>. There are two types of property descriptors: <strong>data descriptors and accessor descriptors</strong>.</p>\n\n<p>A data descriptor contains a <code>value</code> field that specifies the property’s initial value. In the example above, the <code>_name</code> property’s is a defined by a data descriptor whose <code>value</code> field is set to <code>null</code>. The <code>sayHello()</code> function is also defined by a data descriptor; its <code>value</code> field is assigned the function definition.</p>\n\n<p></p><div class=highlight><pre><span class=nx>_name</span><span class=o>:</span> <span class=p>{</span>\n    <span class=nx>value</span><span class=o>:</span> <span class=kc>null</span><span class=p>,</span>\n    <span class=nx>enumerable</span><span class=o>:</span> <span class=kc>false</span>\n<span class=p>},</span>\n<span class=nx>sayHello</span><span class=o>:</span> <span class=p>{</span>\n  <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n    <span class=nx>console</span><span class=p>.</span><span class=nx>log</span><span class=p>(</span><span class=s2>"Hello, my name is "</span> <span class=o>+</span> <span class=k>this</span><span class=p>.</span><span class=nx>name</span><span class=p>);</span>\n  <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>An <em>accessor descriptor</em> consists of one or two accessor functions named <code>get()</code> and <code>set()</code>. The accessor functions store or retrieve a JavaScript language value associated with the property. For example, above example the <code>name</code> property is assigned an accessor descriptor with <code>get()</code> and <code>set()</code> functions. These functions, respectively, retrieve the value of the object’s <code>_name</code> property, and stores a new value in the same property.</p>\n\n<p></p><div class=highlight><pre><span class=nx>name</span><span class=o>:</span> <span class=p>{</span>\n    <span class=nx>get</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n        <span class=k>return</span> <span class=k>this</span><span class=p>.</span><span class=nx>_name</span><span class=p>;</span> \n    <span class=p>},</span>\n    <span class=nx>set</span><span class=o>:</span> <span class=kd>function</span><span class=p>(</span><span class=nx>value</span><span class=p>)</span> <span class=p>{</span>\n        <span class=k>this</span><span class=p>.</span><span class=nx>_name</span> <span class=o>=</span> <span class=nx>value</span><span class=p>;</span>\n    <span class=p>}</span>\n<span class=p>}</span>\n</pre></div>\n\n<p>Montage supports all the same property attributes defined by ECMAScript 5, and includes some custom attributes.</p>\n\n<h3>Creating Montage instances<a class=anchor id=Creating-Montage-instances href="#Creating-Montage-instances"></a>\n</h3>\n\n<p>To create an instance of the <code>Person</code> prototype defined in "Creating Montage types", you can do either of the following:</p>\n\n<ul>\n<li>Call <code>Montage.create()</code> passing the <code>Person</code> prototype as the base:\n<div class=highlight><pre><span class=c1>// require() Person prototype</span>\n<span class=c1>// assumes person.js is in same folder</span>\n<span class=kd>var</span> <span class=nx>Person</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"person"</span><span class=p>).</span><span class=nx>Person</span><span class=p>;</span>\n<span class=kd>var</span> <span class=nx>p1</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Person</span><span class=p>);</span>\n<span class=nx>p1</span><span class=p>.</span><span class=nx>sayHello</span><span class=p>();</span>\n</pre></div>\n</li>\n<li>Call <code>create()</code> directly on the <code>Person</code> prototype itself:\n<div class=highlight><pre><span class=kd>var</span> <span class=nx>Person</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"person"</span><span class=p>).</span><span class=nx>Person</span><span class=p>;</span>\n<span class=kd>var</span> <span class=nx>p2</span> <span class=o>=</span> <span class=nx>Person</span><span class=p>.</span><span class=nx>create</span><span class=p>();</span>\n<span class=nx>p2</span><span class=p>.</span><span class=nx>sayHello</span><span class=p>();</span>\n</pre></div>\n</li>\n</ul><p>You can call <code>create()</code> on any Montage type to return an instance of that type.</p>\n\n<p>Note that instances should never be used as types. For example, the <code>p1</code> instance from the previous code sample should <em>not</em> be used like this:\n</p><div class=highlight><pre><span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>;</span>\n<span class=kd>var</span> <span class=nx>Person</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"person"</span><span class=p>).</span><span class=nx>Person</span><span class=p>;</span>\n<span class=kd>var</span> <span class=nx>p2</span> <span class=o>=</span> <span class=nx>Person</span><span class=p>.</span><span class=nx>create</span><span class=p>();</span>\n<span class=c1>// Don\'t do this (base a new type on an instance)</span>\n<span class=kd>var</span> <span class=nx>p3</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>p2</span><span class=p>,</span> <span class=p>{</span> \n    <span class=nx>newProp</span><span class=o>:</span> <span class=p>{</span>\n       <span class=nx>value</span><span class=o>:</span> <span class=kc>null</span>\n    <span class=p>}</span>\n<span class=p>};</span>\n</pre></div>\n\n<h4>Initializing new objects<a class=anchor id=Initializing-new-objects href="#Initializing-new-objects"></a>\n</h4>\n\n<p>When you instantiate a Montage object the framework invokes <code>didCreate()</code> on the newly created object. This method is called before any properties in the serialization have been assigned to the new object, and it does not accept arguments; all parameterized initialization on the new object must occur as the result of observing setters on those properties.</p>\n\n<p>For example, consider the following <code>Person</code> prototype that defines accessor methods for its name property. The <code>set()</code> method assigns the new value to the “backing” <code>_name</code> property, and then calls the object’s <code>sayHello()</code> function. The <code>didCreate()</code> method sets its creation date/time, and then accesses the <code>name</code> property, which returns <code>null</code> at initialization since the <code>name</code> property in the HTML page hasn’t been assigned at that point.</p>\n\n<p></p><div class=highlight><pre><span class=c1>// person.js</span>\n<span class=kd>var</span> <span class=nx>Montage</span> <span class=o>=</span> <span class=nx>require</span><span class=p>(</span><span class=s2>"montage"</span><span class=p>).</span><span class=nx>Montage</span><span class=p>;</span>\n<span class=kd>var</span> <span class=nx>Person</span> <span class=o>=</span> <span class=nx>exports</span><span class=p>.</span><span class=nx>Person</span> <span class=o>=</span> <span class=nx>Montage</span><span class=p>.</span><span class=nx>create</span><span class=p>(</span><span class=nx>Montage</span><span class=p>,</span> <span class=p>{</span>\n\n    <span class=nx>_name</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kc>null</span>\n    <span class=p>},</span>\n    <span class=nx>name</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>set</span><span class=o>:</span> <span class=kd>function</span><span class=p>(</span><span class=nx>value</span><span class=p>)</span> <span class=p>{</span>\n            <span class=k>this</span><span class=p>.</span><span class=nx>_name</span> <span class=o>=</span> <span class=nx>value</span><span class=p>;</span>\n            <span class=k>this</span><span class=p>.</span><span class=nx>sayHello</span><span class=p>();</span>    \n        <span class=p>},</span>\n        <span class=nx>get</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n            <span class=k>return</span> <span class=k>this</span><span class=p>.</span><span class=nx>_name</span><span class=p>;</span>\n        <span class=p>}</span>\n    <span class=p>},</span>\n    <span class=nx>sayHello</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n            <span class=nx>console</span><span class=p>.</span><span class=nx>log</span><span class=p>(</span><span class=k>this</span><span class=p>.</span><span class=nx>name</span> <span class=o>+</span> <span class=s2>" was created at: "</span> <span class=o>+</span> <span class=k>this</span><span class=p>.</span><span class=nx>timestamp</span><span class=p>);</span>\n        <span class=p>}</span>\n    <span class=p>},</span>\n    <span class=nx>timestamp</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kc>null</span>\n    <span class=p>},</span>\n\n    <span class=nx>didCreate</span><span class=o>:</span> <span class=p>{</span>\n        <span class=nx>value</span><span class=o>:</span> <span class=kd>function</span><span class=p>()</span> <span class=p>{</span>\n            <span class=k>this</span><span class=p>.</span><span class=nx>timestamp</span> <span class=o>=</span> <span class=k>new</span> <span class=nb>Date</span><span class=p>();</span>\n            <span class=nx>console</span><span class=p>.</span><span class=nx>log</span><span class=p>(</span><span class=s2>"My name is: "</span> <span class=o>+</span> <span class=k>this</span><span class=p>.</span><span class=nx>name</span><span class=p>);</span> <span class=c1>// this.name is still null at this point</span>\n        <span class=p>}</span>\n    <span class=p>}</span>\n<span class=p>});</span>\n</pre></div>\n\n<p>And below is an HTML template whose serialization block declares a new <code>Person</code> object, and assigns the value “Steve” to the serialized object’s <code>name</code> property.</p>\n\n<p></p><div class=highlight><pre><span class=c>&lt;!-- index.html --&gt;</span>\n<span class=nt>&lt;html&gt;</span>\n<span class=nt>&lt;head&gt;</span>\n  <span class=nt>&lt;script </span><span class=na>src=</span><span class=s>"../montage/montage.js"</span><span class=nt>&gt;&lt;/script&gt;</span>\n  <span class=nt>&lt;script </span><span class=na>type=</span><span class=s>"text/montage-serialization"</span><span class=nt>&gt;</span>\n  <span class=p>{</span>\n    <span class=s2>"a_person"</span><span class=o>:</span> <span class=p>{</span>\n      <span class=s2>"prototype"</span><span class=o>:</span> <span class=s2>"person"</span><span class=p>,</span>\n      <span class=s2>"properties"</span><span class=o>:</span> <span class=p>{</span>\n        <span class=s2>"name"</span><span class=o>:</span> <span class=s2>"Steve"</span>\n      <span class=p>}</span>\n    <span class=p>}</span>\n  <span class=p>}</span>\n  <span class=nt>&lt;/script&gt;</span>\n  <span class=nt>&lt;title&gt;</span>Main app<span class=nt>&lt;/title&gt;</span>\n<span class=nt>&lt;/head&gt;</span>\n<span class=nt>&lt;body&gt;</span>\n<span class=nt>&lt;/body&gt;</span>\n<span class=nt>&lt;/html&gt;</span>\n</pre></div>\n\n<p>At runtime, the following is displayed in the JavaScript console:</p>\n\n<p></p><div class=highlight><pre><span class=n>My</span> <span class=n>name</span> <span class=n>is</span><span class=p>:</span> <span class=n>null</span>\n<span class=n>Steve</span> <span class=n>was</span> <span class=n>created</span> <span class=n>at</span><span class=p>:</span> <span class=n>Wed</span> <span class=n>Jan</span> <span class=mi>25</span> <span class=mi>2012</span> <span class=mi>17</span><span class=p>:</span><span class=mi>33</span><span class=p>:</span><span class=mi>07</span> <span class=n>GMT</span><span class=o>-</span><span class=mi>0800</span> <span class=p>(</span><span class=n>PST</span><span class=p>)</span>\n</pre></div>\n\n<p>The reason for this output is that, at initialization, the object’s <code>name</code> property hasn’t yet been set from the serialization, so its value is <code>null</code> when accessed inside <code>didCreate()</code>. The <code>name</code> property’s accessor <code>set</code> method is passed the property’s value during deserialization, which is then displayed by the <code>sayHello()</code> function.</p>\n\n<h2>Property descriptor attributes and default values<a class=anchor id=Property-descriptor-attributes-and-default-values href="#Property-descriptor-attributes-and-default-values"></a>\n</h2>\n\n<p>In addition to the <code>value</code> attribute for data descriptors, and the <code>get</code>/<code>set</code> attributes for accessor descriptors, a property descriptor may also contain additional attributes that further describe or customize the property’s behavior. Montage supports all the standard ECMAScript property attributes, and also defines a few custom property attributes.</p>\n\n<h3>Standard property descriptor attributes<a class=anchor id=Standard-property-descriptor-attributes href="#Standard-property-descriptor-attributes"></a>\n</h3>\n\n<p>A data property descriptor supports the following attributes:</p>\n\n<ul>\n<li>\n<strong>value</strong> — The value retrieved by reading the property. Default is <code>true</code>.</li>\n<li>\n<strong>writable</strong> — Boolean. If false, attempts by to change the property’s value attribute will not succeed. Default is <code>true</code>.</li>\n<li>\n<strong>enumerable</strong> — Boolean. If true, the property will be enumerated by a for-in loop. Otherwise, the property is said to be non-enumerable. Default is <code>true</code> for non-function properties, and <code>false</code> for function properties.</li>\n<li>\n<strong>configurable</strong> — Boolean. If false, attempts to delete the property, change the property to be an accessor property, or change its attributes (other than <code>value</code>) will fail. Default is <code>true</code>.</li>\n</ul><p>An accessor property descriptor supports the following attributes:</p>\n\n<ul>\n<li>\n<strong>get</strong> — A function that’s called to return a property value. Default is <code>null</code>.</li>\n<li>\n<strong>set</strong> — A function that’s called to set a a property value. The assigned value is provided as the sole function argument. Default is <code>null</code>.</li>\n<li>\n<strong>enumerable</strong> — Boolean. If true, the property will be enumerated by a for-in loop. Otherwise, the property is said to be non-enumerable. Default is <code>true</code>.</li>\n<li>\n<strong>configurable</strong> — Boolean. If false, attempts to delete the property, change the property to be a data property, or change its attributes will fail. Default is <code>true</code>.</li>\n</ul><h3>Montage property descriptor attributes<a class=anchor id=Montage-property-descriptor-attributes href="#Montage-property-descriptor-attributes"></a>\n</h3>\n\n<p>In addition to the standard ECMAScript property attributes, Montage objects also support the following custom attributes:</p>\n\n<ul>\n<li>\n<strong>serializable</strong>: A string that controls how the property is serialized. Valid values are:\n\n<ul>\n<li>“reference”: Stores a reference to the property.</li>\n<li>“value”: Stores the property’s value.</li>\n<li>“auto”: Determines whether to store either a value or a reference based on if a value was already serialized (default).</li>\n</ul>\n</li>\n<li>\n<strong>dependencies</strong>: A collection of properties that this property relies on. Default is <code>null</code>.</li>\n<li>\n<strong>modify</strong>: A function that is called when this property is modified as a result of a data binding with another property. For example, if <code>obj.prop1</code> defines a binding with <code>obj2.prop2</code>, then whenever the value of <code>obj2.prop2</code> changes Montage will call <code>obj1.prop1.modify()</code>.</li>\n<li>\n<strong>distinct</strong>: A boolean that, when true, indicates that each new instance should receive a copy of the property’s value. Valid values for are:\n\n<ul>\n<li>“Shallow” object literals, or object literals that only contain primitive values: booleans, numbers, strings; no objects or arrays.</li>\n<li>Array literals</li>\n<li>JavaScript objects that can be copied by calling their constructor function with no arguments and copying their enumerable properties.</li>\n</ul>\n</li>\n</ul><h3>Default property attribute values<a class=anchor id=Default-property-attribute-values href="#Default-property-attribute-values"></a>\n</h3>\n\n<p>The following table lists the default values of property descriptor attributes in Montage. Note that some attributes do not have the same default values as <code>Object.create()</code>.</p>\n\n<table><tbody>\n<tr>\n<th>Attribute</th>\n   <th>Type</th>\n   <th>Default value</th>\n</tr>\n<tr>\n<td><code>value</code></td>\n    <td>Object</td>\n    <td><code>null</code></td>\n</tr>\n<tr>\n<td><code>get</code></td>\n    <td>Function</td>\n    <td><code>null</code></td>\n</tr>\n<tr>\n<td><code>set</code></td>\n   <td>Function</td>\n   <td><code>null</code></td>\n</tr>\n<tr>\n<td><code>enumerable</code></td>\n    <td>Boolean</td>\n   <td>\n<code>true</code> for non-function values and accessor properties; <code>false</code> for function values.</td>\n</tr>\n<tr>\n<td><code>configurable</code></td>\n   <td>Boolean</td>\n   <td><code>true</code></td>\n</tr>\n<tr>\n<td><code>serializable</code></td>\n    <td>String. Valid values:\n         <ul>\n<li><code>"value"</code></li>\n             <li><code>"reference"</code></li>\n             <li><code>"auto"</code></li>\n         </ul>\n</td>\n    <td><code>"auto"</code></td>\n</tr>\n<tr>\n<td><code>dependencies</code></td>\n   <td>Array</td>\n   <td><code>null</code></td>\n</tr>\n<tr>\n<td><code>modify</code></td>\n   <td>function</td>\n   <td><code>null</code></td>\n</tr>\n<tr>\n<td><code>distinct</code></td>\n   <td>Boolean</td>\n   <td><code>false</code></td>\n</tr>\n</tbody></table><h2>Terminology<a class=anchor id=Terminology href="#Terminology"></a>\n</h2>\n\n<p>Below are some definitions to help with the discussion.</p>\n\n<p><strong>prototype</strong>\n(noun): As used in JavaScript, a prototype is an object that shares its interface through “prototypical inheritance”. Both Montage instances and types (see below) have prototypes.</p>\n\n<p><strong>create</strong>\n(verb) To create a new prototype from a base prototype. In Montage, creation is used for both “type inheritance” and “instantiation”.</p>\n\n<p><strong>(Montage) type</strong>\n(noun) A prototype for the purpose of inheriting a common interface. Montage types are always defined by rich property descriptors that extend ECMAScript 5 property descriptors, but have slightly different default attribute values. Creating descriptors has some overhead, which is acceptable for types because they are never “hot” code.</p>\n\n<p><strong>(Montage) instance</strong>\n(noun): A prototype for the purpose of doing work. The properties of an instance have state which must not be shared by other objects. An instance must not be used as a type.</p>\n\n<p><strong>inherit</strong>\n(verb): To create a new type, based on another type. Types can be used to create instances or types. Types should only have state if it is acceptable for all instances of that type and its descendant types to share that state. Shared state cannot be serialized.</p>\n\n<p><strong>instantiate</strong>\n(verb) To create a new instance from a type.</p>\n\n<p><strong>initialize</strong>\n(verb) To set up an initial, consistent state for an instance. Objects that have been deserialized are not initialized: it’s assumed that they were serialized with a consistent internal state.</p>\n\n<p><strong>state</strong>\n(noun) The properties owned by an instance. Some state can be serialized and deserialized.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montage_js" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n    \n    <section id=social class=social>\n        <article>\n            \n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n            \n            \n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montage_js data-count=none>Tweet</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n                <a href="https://twitter.com/montage_js" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montage_js</a>\n                <script>!function(e,t,n){var r,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(r=e.createElement(t),r.id=n,r.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(r,i))}(document,"script","twitter-wjs")</script>\n            </div>\n            \n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js">"explicit"</script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go()</script>\n            </div>\n            \n        </article>\n    </section>\n        \n    \n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n        \n    \n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()</script>\n    \n</body>\n</html>'})