montageDefine("3ea393a","docs/spec:-richtexteditor.html",{text:'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=utf-8>\n    <meta name=viewport content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">\n    <meta http-equiv=X-UA-Compatible content="chrome=1">\n\n    <title>Spec: RichTextEditor - Montage Docs</title>\n\n    <link rel=stylesheet href="http://fonts.googleapis.com/css?family=Open+Sans:400,700">\n    <link rel=stylesheet href="../stylesheets/normalize.css">\n    <link rel=stylesheet href="../stylesheets/base.css">\n    <link rel=stylesheet href="../stylesheets/pages.css">\n    <link rel=stylesheet href="../stylesheets/solarized.css">\n\n    <!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->\n</head>\n<body class=docs>\n\n    <header class="header header-pages pushed">\n        <div class=header-container>\n            <a href="/"><img class=logo src="../images/logo-pages.png" alt=Montage></a>\n            <nav class=nav>\n                <a class=nav-item href="/apps">Apps</a>\n                <a class="nav-item active" href="/docs">Docs</a>\n                <a class=nav-item href="/apis">APIs</a>\n            </nav>\n        </div>\n    </header>\n\n    <section id=docs>\n        <article>\n            <div class=markdown-body>\n\n<p>RichText Editor Component</p>\n\n<p>RichText Editor is a lightweight Montage component that provides basic HTML editing capability. This component is a wrapper around the HTML5 contentEditable and mostly relies on the level of support of execCommand by the browser.</p>\n\n<p>The RichText Editor let you set, on a specific selection range, various attribute:</p>\n\n<ul>\n<li>text style: bold, italic, underline, strikethrough,  superscript, subscript</li>\n<li>font style: fontname, fontsize</li>\n<li>color: backcolor, forecolor</li>\n<li>justification: left, center, right and full</li>\n<li>list style: ordered, unordered</li>\n<li>paragraph indent: indent and outdent (via methods)</li>\n</ul><p>The RichText Editor allows you to re-size images, and supports drag &amp; drop between pages or from the desktop of HTML fragment, text and images. Finally, the RichText Editor is compatible with the native undo &amp; redo as well with the Montage Undo Manager.</p>\n\n<p>The RichText Editor does not provides any user interface other than the editor area itself. However it does provides the necessary scripting interface to easily implement a user interface like a toolbar using bindings.</p>\n\n<p>The RichText editor provides a basic overlay interface to extend the editor. The RichText editor provides two overlays: The resize to resize images and a link popup to allow user to navigate to a link.</p>\n\n<p>The component itself can be found under /lab/lib/ui/rich-text-editor.reel/. There is also an test application under /lib/sandbox/ui/rich-text-editor-test/.</p>\n\n<p>How to create a RichText Editor:</p>\n\n<p>The easy way to create a RichText Editor is by using serialization. The minimum you need is a div tag and assign it a RichTextEditor component:</p>\n\n<p>"editor": {\n"module": "montage/lib/ui/rich-text-editor.reel",\n"name": "RichTextEditor",\n"properties": {\n"element": {"#": "editor" }\n}\n}\n…\n</p>\n\n<div id="”editor”">\n    <span>Hello World!</span>\n</div>\n\n<p></p>\n\n<p>Properties:</p>\n\n<p>You can set and get the content of the RichText Editor in HTML format via the value property or in plain text format via the textValue property, both properties are depending on each other.</p>\n\n<p>You can also query or change the style of the current selection by using the formatting properties such as bold, italic, underline, etc...</p>\n\n<p>activeOverlay [object, readonly]:\n    [object] editor.activeOverlay\nreturns the currently active (displayed) overlay.</p>\n\n<p>baselineShift [string]:\n    [string] editor.baselineShift\nreturns the baseline shift for the current selected text.\neditor.baselineShift = "baseline" | "subscript" | "superscript"\nset the baseline shift for the current selected text. Set it to subscript or \nsuperscript. baseline is the default value.\nIf the selected text contains a mix of baseline shift, the return value of editor.baselineShift is depending of the browser’s implementation.</p>\n\n<p>backColor [string]:\n    [string] editor.backColor\nreturns the background color for the current selected text as a CSS rgb color.\neditor.backColor = [string] | null\nset the background color for the current selected text.</p>\n\n<p>editor.backColor can be set to any valid CSS color value, however, the color is always returned as an rgb color. If the current selection is across elements with different background colors, the value of editor.backColor is depending of the browser’s implementation.</p>\n\n<p>To remove a background color, set it to null.</p>\n\n<p>bold [boolean]:\n    [boolean] editor.bold\nreturns true if the current selected text is bold.\neditor.bold = true | false<br>\nadd or remove the bold attribute to the selected text.</p>\n\n<p>If the selected text contains some text in bold and some not, the return value of editor.bold is depending of the browser’s implementation.</p>\n\n<p>delegate [object]:\n    [object] editor.delegate\nreturns the delegate object.\neditor.delegate = [object] | null\nset the delegate object</p>\n\n<p>Refer to the delegate section here after for a list of delegate methods a consumer can implement.</p>\n\n<p>fontName [string]:\n    [string] editor.fontName\nreturns the font family name for the current selected text as a CSS font-family.\neditor.fontName = [string]\nset the font family name  for the current selected text.</p>\n\n<p>editor.fontName can be set to any valid CSS font-family value, including multiple values. If the current selection is across multiple font-family elements, the value of editor.fontName is depending of the browser’s implementation.</p>\n\n<p>fontSize [string]:\n    [string] editor.fontSize\nreturns the font size for the current selected text .\neditor.fontSize = [string]\nset the font size for the current selected text.</p>\n\n<p>Only HTML font size value 1 to 7 are supported. If the current selection is a mix of font size, the value of editor.fontSize is depending of the browser’s implementation.</p>\n\n<p>foreColor [string]:\n    [string] editor.foreColor\nreturns the color for the current selected text as a CSS rgb color.\neditor.foreColor = [string] | null\nset the color for the current selected text.</p>\n\n<p>editor.foreColor can be set to any valid CSS color value, however, the color is always returned as an rgb color. If the current selection is across elements with different colors, the value of editor.foreColor is depending of the browser’s implementation.</p>\n\n<p>To remove a color, set it to null.</p>\n\n<p>hasFocus [boolean, readonly]:\n    [boolean] editor.hasFocus\nreturns true when the editor has focus, else return false.</p>\n\n<p>innerElement [HTMLElement, readonly]:\n    [HTMLElement] editor.innerElement\nreturns the editor inner element, the element which is editable.</p>\n\n<p>isActiveElement [boolean, readonly]:\n    [boolean] editor.isActiveElement\nreturns true when the editor his the active element, else return false.</p>\n\n<p>Normally the activeElement has also focus, However, in a multiple window environment, it’s possible to be the activeElement without having focus. Typically, a toolbar item my steal the focus but not become the activeElement.</p>\n\n<p>italic [boolean]:\n    [boolean] editor.italic\nreturns true if the current selected text is italic.\neditor.italic = true | false<br>\nadd or remove the italic attribute to the selected text.</p>\n\n<p>If the selected text contains some italic text and some not, the return value of editor.italic is depending of the browser’s implementation.</p>\n\n<p>justify [string]:\n    [string] editor.justify\nreturns the justification for the current selected line.\neditor.justify = "left" | "center" | "right"| "full"\nset the justification for the current selected line.</p>\n\n<p>If the current selection is across multiple lines with different justification, the value of editor.justify is depending of the browser’s implementation.</p>\n\n<p>listStyle [string]:\n    [string] editor.listStyle\nreturns the list style for the current selected text.\neditor.listStyle = "none" | "unordered" | "ordered"\nset the list style for the current selected text.</p>\n\n<p>editor.listStyle can be use in combination with editor.indent and  editor.outdent to create a list hierarchy.   </p>\n\n<p>overlays [Array]:\n    [Array] editor.overlays\nreturns an array of overlay components.\neditor.overlays = [Array] | null<br>\nset the content to true to make the editor readonly</p>\n\n<p>Overlays are extension that can be displayed on top of the editor based on the context. </p>\n\n<p>By default the editor install 2 overlays, one for resizing images and one to display a popup on top of a link to allow the user to navigate to that link.</p>\n\n<p>Here is an example how to setup an overlays:</p>\n\n<p>"myOverlay": {\n"module": "myOverlay.reel",\n"name": "MyOverlay"\n},</p>\n\n<p>"editor": {\n"module": "montage/lib/ui/rich-text-editor.reel",\n"name": "RichTextEditor",\n"properties": {\n"element": {"#": "editor" },\n"overlays": [\n    {"@": "myOverlay" }\n]\n}\n}</p>\n\n<p>See the overlay section hereafter to details.</p>\n\n<p>readOnly [boolean]:\n    [boolean] editor.readOnly\nreturns true if the content is read only, else return false.\neditor.readOnly = true | false<br>\nset the content to true to make the editor readonly</p>\n\n<p>When the editor is set to read only, the user is not able to modify the content. However it still possible to set the content programmatically with editor.value or editor.textValue.</p>\n\n<p>sanitizer [object]: \n    [object] editor.sanitizer\nreturns the sanitizer object.\neditor.sanitizer = [object] | null<br>\nset the sanitizer object</p>\n\n<p>The editor by default install it’s own sanitizer. Only set the sanitizer if you want to provide your own or disable it.</p>\n\n<p>See the Sanitizer section hereafter for details.</p>\n\n<p>strikeThrough [boolean]:\n    [boolean] editor.strikeThrough\nreturns true if the current selected text is strikethrough.\neditor.strikeThrough = true | false \nadd or remove the underline attribute to the selected text.</p>\n\n<p>If the selected text contains some strikethrough text and some not, the return value of editor.strikeThrough is depending of the browser’s implementation.</p>\n\n<p>textValue [string]:\n    [string] editor.textValue\nreturns a plain text version of the content.\neditor.value = [string] \nset the content to the specified plain text string.</p>\n\n<p>By default, the original content of the element to which the editor is attached to is used.</p>\n\n<p>underline [boolean]:\n    [boolean] editor.underline\nreturns true if the current selected text is underline.\neditor.underline = true | false \nadd or remove the underline attribute to the selected text.</p>\n\n<p>If the selected text contains some underline text and some not, the return value of editor.underline is depending of the browser’s implementation.</p>\n\n<p>undoManager [object]:\n    [object] editor.undoManager\nreturns the Montage Undo Manager associated with the component or null.\neditor.undoManager = [object] | null<br>\nassociate a Montage Undo Manager with the editor.</p>\n\n<p>As the RichTextEditor is based on content editable, it is automatically incorporated with the native Undo Manager provided by the browser. However it’s possible to also use the Montage Undo Manager. If you decide to use the Montage Undo manager, you should intercept the browser undo and redo keyboard shortcut in order to keep both the native and the Montage Undo Manager in sync.</p>\n\n<p>By Default, the Montage’s default undo manager is assigned to editor.undoManager.</p>\n\n<p>value [string]:\n    [string] editor.value\nreturns the content as HTML.\n    editor.value = [string] \nset the content to the specified HTML string.</p>\n\n<p>By default, the original content of the element to which the editor is attached to is used.</p>\n\n<p>Methods:</p>\n\n<p>focus:\n    editor.focus()</p>\n\n<pre><code>set the focus on the editor element. The editor will also become the activeElement.\n</code></pre>\n\n<p>indent:\n    editor.indent()</p>\n\n<p>Indent the selected text. If the selected text is inside a list, calling editor.indent()\nwill move the selection into a sub list.</p>\n\n<p>outdent:\n    editor.outdent()</p>\n\n<pre><code>Outdent the selected text. If the selected text is inside a list, calling\n</code></pre>\n\n<p>editor.outdent()will move the selection either out of the list or into the\nparent list.</p>\n\n<p>redo:\n    editor.redo()</p>\n\n<p>Redo the last editing operation that was canceled by undo.</p>\n\n<p>undo:\n    editor.undo()</p>\n\n<p>undo the last editing operation.</p>\n\n<p>selectAll:\n    editor.selectAll()</p>\n\n<p>select the whole editor’s content.\nNote: Depending on the browser implementation, some of the outer element without direct text node wont be selected, therefore is you press delete after selecting all, some markup might still be there, you will have to Select all again to get rid of it.</p>\n\n<p>selectElement:\n    editor.selectElement([HTMLElement]element)</p>\n\n<p>Select the specified element.</p>\n\n<p>execCommand:\n    editor.execCommand([string]command,[boolean]showUI,\nvalue, [string]label)</p>\n\n<p>This is equivalent to document.execCommand except that it will take care of putting the focus on the editor before executing the command, mark the editor’s content as dirty and will add the command to the Montage Undo Manager stack using the label provided.</p>\n\n<p>You should only use that method if you are extending the editor’s functionality or writing your own overlay. The typical usage would be to insert HTML via the insertHTML command.\nFor all other command which are exposed by an editor’s property like bold or italic, use the editor property instead.</p>\n\n<p>markDirty:\n    editor.markDirty()</p>\n\n<p>Mark the editor content as dirty. That will force the editor to generate editorChange event as well update the editor.value and editor.textValue properties.</p>\n\n<p>This should only be called is your are extending the editor or writing an overlay.</p>\n\n<p>showOverlay:\n    editor.showOverlay([object]overlay)</p>\n\n<p>Set the overlay as the active overlay and display it .</p>\n\n<p>This should only be called is your are extending the editor or writing an overlay.</p>\n\n<p>hideOverlay:\n    editor.hideOverlay()</p>\n\n<p>Hide the active overlay.</p>\n\n<p>This should only be called is your are extending the editor or writing an overlay.</p>\n\n<p>Events:</p>\n\n<p>The editor generates events when either the data or the selection change. The consumer can listen to those events to do some custom work.</p>\n\n<p>editorChange:\n    editorChange is dispatched when the content of the editor is modified.\nNote: this event is buffered to limit performance impact. The event is fired 100ms after the last change or in case or repetitive changes, at least once per second.</p>\n\n<p>editorSelect:\n    editorSelect is dispatched when the current selection or caret position change.</p>\n\n<p>Note: this event is buffered to limit performance impact. The event is fired 100ms after the last selection or caret position change.</p>\n\n<p>Delegate:</p>\n\n<p>The consumer can setup a delegate to alter data received during a paste or drop operation before the editor’s content is modified. The delegate can implement any of the methods below. If there is not delegate or if the delegate does not implement one of those methods, the editor will skip the delegate and apply it’s default behavior.</p>\n\n<p>If the editor has a identifier property, the identifier will be append to the delegate method name. Let say the editor.identifier = "editor" and the delegate want to implement the drop method. The method will need to be named editorDrop.</p>\n\n<p>canDrag: \n    [boolean] delegate.canDrag(editor, event)</p>\n\n<p>This is called when the user start dragging an HTML element from the editor’s content. </p>\n\n<pre><code>editor is the editor object itself.\nevent is the current event.\n</code></pre>\n\n<p>use event.srcElement to find out which element is getting dragged.</p>\n\n<p>Return true if you want to allow the source element to be dragged, else return false.</p>\n\n<p>canDrop:</p>\n\n<pre><code>[boolean] delegate.canDrop(editor, event, source)\n</code></pre>\n\n<p>This is called when the drag occurs over an HTML element in the editor’s content.</p>\n\n<pre><code>editor is the editor object itself.\nevent is the current event.\nsource is the dragged element is originated from within the editor, else null.\n</code></pre>\n\n<p>use event.target to find out in which element the drop may happen.</p>\n\n<p>Return true if you want to allow the source element to be dropped in the target, else return false.</p>\n\n<p>shouldDrop:\n[string | boolean] delegate.shouldDrop(editor, event, data,\n                            contentType)</p>\n\n<pre><code>Called when the user drop some data as either plain text or html into the editor.\n\neditor is the editor object itself.\nevent is the current event.\ndata is the data to insert as string.\ncontentType specify the nature of the data (text/plain, text/html).\n\nThe delegate can return the following value:\n\ntrue        the editor will handle the drop itself.\nfalse       the drop is canceled.\nnull        the drop is canceled.\n[string]    the returned data will be inserted as HTML into the editor.\n</code></pre>\n\n<p>Note: the data is sanitized by the sanitizer before being handed to the delegate. You are responsible to sanitized any returned data. If you don’t want the user to be able to drop data or file into the editor, you should set editor.allowDrop = false.</p>\n\n<p>shouldDropFile:\n    [string | boolean] delegate.shouldDropFile(editor, file[, data])</p>\n\n<p>Called when the user drop a file or a group of files into the editor. The delegate is called \nindividually for each file.</p>\n\n<pre><code>editor is the editor object itself.\nfile is a File object.\ndata, the content of the file as string. Only provided if the browser supports FileReader.\n\nThe delegate can return the following value:\n\ntrue        the editor will handle the drop itself.\nfalse       the drop is canceled.\nnull        the drop is canceled.\n[string]    the returned data will be inserted as HTML into the editor.\n</code></pre>\n\n<p>Note: Currently, the editor support only image files. If you want to handle other type of file, you must return some HTML data as string. You are responsible to sanitize the returned data. If you don’t want the user to be able to drop data or file into the editor, you should set editor.allowDrop = false.</p>\n\n<p>shouldPaste:\n    [string | boolean] delegate.paste(editor, event, data,\n                            contentType)</p>\n\n<pre><code>Called when the paste some data as into the editor.\n\neditor is the editor object itself.\nevent is the current event.\n</code></pre>\n\n<p>data is the data to insert as string.\n    contentType specify the nature of the data (currently, always text/html).</p>\n\n<pre><code>The delegate can return the following value:\n\ntrue        the editor will handle the paste itself.\nfalse       the paste is canceled.\nnull        the paste is canceled.\n[string]    the returned data will be inserted as HTML into the editor.\n</code></pre>\n\n<p>Note: the data is sanitized by the sanitizer before being handed to the delegate. You are responsible to sanitized any returned data.</p>\n\n<p>shouldPasteFile:\n    [string | boolean] delegate.shouldDropFile(editor, file[, data])</p>\n\n<p>Called when the user paste an data as blob into the editor. Currently only images are supported</p>\n\n<pre><code>editor is the editor object itself.\n</code></pre>\n\n<p>file is a File object.\n    data, the content of the file as string. Only provided if the browser supports FileReader.</p>\n\n<pre><code>The delegate can return the following value:\n\ntrue        the editor will handle the paste itself.\nfalse       the paste is canceled.\nnull        the paste is canceled.\n[string]    the returned data will be inserted as HTML into the editor.\n</code></pre>\n\n<p>Note: You are responsible to sanitize the returned data.</p>\n\n<p>Sanitizer:</p>\n\n<p>The editor provides a sanitizer object by default. The role of the sanitizer is to cleanup any data before inserting it or extracting it from the editor. The default sanitizer will remove any scripting and scope any CSS before injecting any data into the editor. However, scripts are not removed when the initial value is set via editor.value = [string].</p>\n\n<p>The consumer can however provides its own sanitizer or extend the default one in order to customize the editor’s behavior. The sanitizer must implement the following methods: </p>\n\n<p>willSetValue:\n    [string] sanitizer.willSetValue(value, uniqueId)</p>\n\n<p>Called when setting the editor’s value, right before the value is assigned to editor.value.</p>\n\n<p>Returns the altered value as string.</p>\n\n<p>The default sanitizer will scope any CSS using the uniqueId. </p>\n\n<p>didGetValue:\n    [string] sanitizer.didGetValue(value, uniqueId)</p>\n\n<p>Called when getting the editor’s value, right before the value is returned from editor.value.</p>\n\n<p>Returns the altered value as string.</p>\n\n<p>The default sanitizer will unscope any CSS using the uniqueId. </p>\n\n<p>willInsertHtmlData:\n    [string] sanitizer.willInsertHtmlData(data, uniqueId)</p>\n\n<p>Called when inserting data via a paste or drop.</p>\n\n<p>Returns the altered data as string.</p>\n\n<p>The default sanitizer will remove any script and scoop any CSS using the uniqueId. </p>\n\n<p>Overlays</p>\n\n<p>Overlays are custom Montage UI component that can be display in a slot on top of the editor’s content. Only one overlay can be displayed at a time. Overlays can be use to display a specific UI when the user select or click on a specific element.</p>\n\n<p>When an a mouse event or touch event occurs inside the editor, the event is passed down to the overlays via methods(editorMouseDown, editor.MouseUp, editorTouchStart and editorTouchEnd), a overlay can takeover the event by stopping the event. Overlay are also called when the editor selection change (editorSelectionDidChanged). The overlay can also prevent another overlay to receive that event by return true. </p>\n\n<p>When an event occurs, the active overlay is called first, then the other overlay are called in the order in the editor.overlays array order.</p>\n\n<p>To become active, an overlay needs to call editor.showOverlay(this). And when an active overlay is done, it need to call editor.showOverlay()</p>\n\n<p>The Editor provides and install by default two overlays:\nan image resizer (montage/lab/lib/ui/rich-text-resizer.reel)\nand a link popup (montage/lab/lib/ui/rich-text-linkpopup.reel)</p>\n\n<p>Overlay Interface (all methods are optional, but you need to implement at least one):</p>\n\n<p>initWithEditor:\n    overlay.initWithEditor(editor)</p>\n\n<p>Called when the overlay is installed, the editor object is provided as parameter.</p>\n\n<p>didBecomeActive:\n    overlay.didBecomeActive()</p>\n\n<pre><code>Called when the overlay became active and it’s displayed in the edtior’s slot. \n</code></pre>\n\n<p>didBecomeInactive:\n    overlay.didBecomeInactive()</p>\n\n<p>Called when the overlay became inactive and it’s not displayed anymore.</p>\n\n<p>editorMouseDown:\n    overlay.editorMouseDown(event)</p>\n\n<p>return true to prevent other overlay to receive that event. You may want to stop the propagation of the event.</p>\n\n<p>editorMouseUp:\n    overlay.editorMouseUp(event)</p>\n\n<p>return true to prevent other overlay to receive that event. You may want to stop the propagation of the event.</p>\n\n<p>editorTouchStart:\n    overlay.editorTouchStart(event)</p>\n\n<p>return true to prevent other overlay to receive that event. You may want to stop the propagation of the event.</p>\n\n<p>editorTouchEnd:\n    overlay.editorTouchEnd(event)</p>\n\n<p>return true to prevent other overlay to receive that event. You may want to stop the propagation of the event.</p>\n\n<p>editorSelectionDidChange:\n    overlay.editorSelectionDidChange(range)</p>\n\n<p>return true to prevent other overlay to receive that event.</p>\n\n                </div>\n        </article>\n    </section>\n\n    <section id=next class=next>\n        <article>\n            <h3 class=title>More help?</h3>\n            <div class=cols>\n                <div class="col col-1-2">\n                    <p>Can\'t find what you are looking for? Get in touch, we\'re more than happy in helping answer your questions.\n                    </p>\n                </div>\n                <aside class="col col-1-2">\n                    <p><strong>Have feedback or ideas?</strong> Let us know by creating a new <a href="https://github.com/montagejs/montage/issues" target=_blank>issue</a>, join us in <a href="http://webchat.freenode.net/?channels=montage" target=_blank>IRC</a> or post questions to our <a href="https://groups.google.com/forum/?fromgroups#!forum/montagejs" target=_blank>Google Group</a>. We\'re also on <a href="https://twitter.com/montagejs" target=_blank>Twitter</a> and <a href="https://plus.google.com/116915300739108010954/" target=_blank>Google+</a>.\n                    </p>\n                </aside>\n            </div>\n        </article>\n    </section>\n\n\n    <section id=social class=social>\n        <article>\n\n            <div class="button-group github">\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=watch&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n                <iframe src="http://ghbtns.com/github-btn.html?user=montagejs&amp;repo=montage&amp;type=fork&amp;count=true" allowtransparency=true frameborder=0 scrolling=0 width=90px height=20px></iframe>\n            </div>\n\n\n            <div class="button-group twitter">\n                <a href="https://twitter.com/share" class=twitter-share-button data-via=montagejs data-count=none>Tweet</a>\n                <script>!function(e,t,n){var a,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(a=e.createElement(t),a.id=n,a.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(a,i))}(document,"script","twitter-wjs");</script>\n                <a href="https://twitter.com/montagejs" class=twitter-follow-button data-show-count=false data-show-screen-name=false>Follow @montagejs</a>\n                <script>!function(e,t,n){var a,i=e.getElementsByTagName(t)[0];e.getElementById(n)||(a=e.createElement(t),a.id=n,a.src="//platform.twitter.com/widgets.js",i.parentNode.insertBefore(a,i))}(document,"script","twitter-wjs");</script>\n            </div>\n\n            <div class="button-group g-plus">\n                \n                <script src="https://apis.google.com/js/plusone.js"></script>\n                \n                <div class=g-plusone data-size=medium data-annotation=inline data-width=200></div>\n                \n                <script>gapi.plusone.go();</script>\n            </div>\n\n        </article>\n    </section>\n\n\n    <footer class=footer>\n        2013 montagejs.org - <a href="https://github.com/montagejs/montagejs.org">Contributions</a> to this page are welcomed.\n    </footer>\n\n\n    \n    <script>var _gaq=_gaq||[];_gaq.push(["_setAccount","UA-35717912-1"]),_gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();</script>\n\n</body>\n</html>'});