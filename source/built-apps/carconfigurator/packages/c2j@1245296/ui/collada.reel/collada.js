var Montage=require("montage").Montage,Component=require("montage/ui/component").Component;require("runtime/dependencies/gl-matrix");var GLSLProgram=require("runtime/glsl-program").GLSLProgram,ResourceManager=require("helpers/resource-manager").ResourceManager,Engine=require("runtime/engine").Engine,Material=require("runtime/material").Material,Utilities=require("runtime/utilities").Utilities,dom=require("montage/ui/dom"),Point=require("montage/core/geometry/point").Point,OrbitCamera=require("runtime/dependencies/camera").OrbitCamera,TranslateComposer=require("montage/ui/composer/translate-composer").TranslateComposer;Material.implicitAnimationsEnabled=!0,exports.Collada=Montage.create(Component,{implicitAnimationsEnabled:{get:function(){return Material.implicitAnimationsEnabled},set:function(e){Material.implicitAnimationsEnabled=e}},modelController:{value:null},update:{value:function(){this.needsDraw=!0}},scaleFactor:{value:window.devicePixelRatio,writable:!0},carName:{value:"nodeFromflattenedMesh",writable:!1},carNode:{value:null,writable:!0},_sceneBBox:{value:null,writable:!0},sceneBBox:{get:function(){return this._sceneBBox},set:function(e){this._sceneBBox=e}},canvas:{get:function(){return this.templateObjects.canvas}},_camera:{value:null,writable:!0},camera:{get:function(){return this._camera},set:function(e){this._camera=e}},_engine:{value:null,writable:!0},engine:{get:function(){return this._engine},set:function(e){this._engine=e}},_scene:{value:null},scene:{get:function(){return this._scene===null&&this.engine&&this.engine.rootPass&&(this._scene=this.engine.rootPass.inputs.scene),this._scene},set:function(e){this._scene=e,this.applyScene()}},applyScene:{value:function(){var e=this._scene;if(this.engine&&this.engine.rootPass){var t=mat4.identity(),n=e.rootNode,r=e.rootNode.boundingBox;e.rootNode.apply(function(e,t,n){var i=mat4.create();mat4.multiply(n,e.transform,i);if(e.boundingBox){var s=Utilities.transformBBox(e.boundingBox,n);r?r=Utilities.mergeBBox(s,r):r=s}return i},!0,t),this.sceneBBox=r,this.engine.rootPass.inputs.scene=e}}},getRelativePositionToCanvas:{value:function(e){return dom.convertPointFromPageToNode(this.canvas,Point.create().init(e.pageX,e.pageY))}},_materialsByName:{value:null},_buildMaterialNameMap:{value:function(){var e=Object.keys(Material.materialForID),t=e.length,n;this._materialsByName={};while(t)t--,n=Material.materialForID[e[t]],this._materialsByName[n.name]=n.id;console.log("materials",this._materialsByName);var r=document.createEvent("CustomEvent");r.initCustomEvent("materialReady",!0,!0),this.dispatchEvent(r,!0,!0)}},hasMaterials:{get:function(){return!!this._materialsByName}},materialForName:{value:function(e){if(!this._materialsByName)throw"Collada: No materials available yet.";var t=this._materialsByName[e];return Material.materialForID[t]}},prepareForDraw:{value:function(){var e=this.canvas.getContext("experimental-webgl",{antialias:!0})||this.canvas.getContext("webgl",{antialias:!0});this.canvas.style.opacity=1;var t=null;this.engine=Object.create(Engine),this.engine.init(e,t),this.engine.renderer.resourceManager.observers.push(this),this._scene&&this.applyScene(),this._buildMaterialNameMap(),this.canvas.setAttribute("height",this._height),this.canvas.setAttribute("width",this._width),this.camera=new MontageOrbitCamera(this.canvas),this.camera.maxDistance=200,this.camera.minDistance=100,this.camera.setDistance(170.9999542236328),this.camera.distanceStep=.01,this.camera.constrainDistance=!0,this.camera.setYUp(!0),this.camera.orbitX=.6750000000000003,this.camera.orbitY=-0.5836293856408279,this.camera.minOrbitX=this.camera.orbitX-.4,this.camera.maxOrbitX=this.camera.orbitX+.4,this.camera.constrainXOrbit=!0;var n=vec3.createFrom(0,0,0);n[2]-=10,this.camera.setCenter(n),this.carNode=this.scene.rootNode.nodeWithName(this.carName),this.carNode||console.log("car node name was not found("+this.carName+"), please check in Sketchup/JSON files");var r=this.sceneBBox,i=[r[1][0]-r[0][0],r[1][1]-r[0][1],r[1][2]-r[0][2]],s=i[0]>i[1]?i[0]:i[1];s=i[2]>s?i[2]:s,s=1;var o=mat4.scale(mat4.identity(),[s,s,s]),u=mat4.translate(o,[-i[0]/2-r[0][0],-i[1]/2-r[0][1],-i[2]/2-r[0][2]]),a=mat4.translate(mat4.identity(),[0,0,0]),f=mat4.create();mat4.multiply(a,u,this.carNode.transform),this.needsDraw=!0,this.canvas.addEventListener("touchstart",this.start.bind(this),!0),document.addEventListener("touchend",this.end.bind(this),!0),document.addEventListener("touchcancel",this.end.bind(this),!0),document.addEventListener("touchmove",this.move.bind(this),!0),document.addEventListener("gesturechange",this,!0),this.canvas.addEventListener("mousedown",this.start.bind(this),!0),document.addEventListener("mouseup",this.end.bind(this),!0),document.addEventListener("mousemove",this.move.bind(this),!0),document.addEventListener("mousewheel",this,!0),Material.animationDelegate=this;var l=["interior1"];l.forEach(function(e){var t=this.materialForName(e);t&&(t.inputs.specularColor=[0,0,0])},this)}},captureMousewheel:{value:function(){this.needsDraw=!0}},captureGesturechange:{value:function(){this.needsDraw=!0}},move:{value:function(e){this.needsDraw=!0}},start:{value:function(e){e.preventDefault(),this._consideringPointerForPicking=!0;var t=this.getRelativePositionToCanvas(e);this._mousePosition=[t.x,t.y]}},end:{value:function(e){if(this._consideringPointerForPicking&&e.target===this.canvas){e.preventDefault();var t=["material_14","material_19","body3","material_5","interior1","material_12"],n=this.hitTest(this._mousePosition,{materials:t});if(n&&n.length>0){var r=0;n.length>1&&(n[r].material.name==="interior1"||n[r].material.name==="material_12"||n[r].material.name==="material.26")&&(r=1);var i=document.createEvent("CustomEvent");i.initCustomEvent("pick",!0,!0,{material:n[r].material}),this.dispatchEvent(i,!0,!0)}}this._consideringPointerForPicking=!1,this._mousePosition=null}},hitTest:{value:function(e,t){if(this.engine&&this.engine.rootPass&&this.canvas){var n=[0,0,parseInt(this.canvas.getAttribute("width")),parseInt(this.canvas.getAttribute("height"))];return this.engine.rootPass.hitTest(e,n,t)}return null}},getWebGLContext:{value:function(){return this.engine?this.engine.renderer.webGLContext:null}},_consideringPointerForPicking:{writable:!0,value:!1},_mousePosition:{writable:!0,value:null},_floorTextureLoaded:{writable:!0,value:!1},drawGradient:{value:function(){if(!this.engine||!this.scene)return;if(!this.engine.rootPass.inputs.viewPoint)return;var e=this.getWebGLContext(),t=this;this.engine.renderer.bindedProgram=null;var n=mat4.ortho(-1,1,1,-1,0,1e3);e.disable(e.DEPTH_TEST),e.disable(e.CULL_FACE),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA);if(!this._gradientProgram){this._gradientProgram=Object.create(GLSLProgram);var r="precision highp float;attribute vec3 vert;attribute vec3 color;uniform mat4 u_projMatrix; varying vec3 v_color;void main(void) { v_color = color;gl_Position = u_projMatrix * vec4(vert,1.0); }",i="precision highp float;varying vec3 v_color; void main(void) {  gl_FragColor = vec4(v_color, 0.7); }";this._gradientProgram.initWithShaders({"x-shader/x-vertex":r,"x-shader/x-fragment":i}),this._gradientProgram.build(e)||console.log(this._gradientProgram.errorLogs)}if(!this.vertexBuffer){var s=[1,1,1],o=[.25,.25,.25],u=[-1,-1,0,o[0],o[1],o[2],1,-1,0,o[0],o[1],o[2],-1,1,0,s[0],s[1],s[2],-1,1,0,s[0],s[1],s[2],1,-1,0,o[0],o[1],o[2],1,1,0,s[0],s[1],s[2]];this.vertexBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array(u),e.STATIC_DRAW)}e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer);var a=this._gradientProgram.getLocationForSymbol("vert");typeof a!="undefined"&&(e.enableVertexAttribArray(a),e.vertexAttribPointer(a,3,e.FLOAT,!1,24,0));var f=this._gradientProgram.getLocationForSymbol("color");typeof f!="undefined"&&(e.enableVertexAttribArray(f),e.vertexAttribPointer(f,3,e.FLOAT,!1,24,12)),this.engine.renderer.bindedProgram=this._gradientProgram;var l=this._gradientProgram.getLocationForSymbol("u_projMatrix");l&&this._gradientProgram.setValueForSymbol("u_projMatrix",n),this._gradientProgram.commit(e),e.drawArrays(e.TRIANGLES,0,6),e.disableVertexAttribArray(a),e.disableVertexAttribArray(f)}},drawFloor:{value:function(e){function t(e,t){n.bindTexture(n.TEXTURE_2D,t),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.bindTexture(n.TEXTURE_2D,null),r._floorTextureLoaded=!0,r.needsDraw=!0}if(!this.engine||!this.scene)return;if(!this.engine.rootPass.inputs.viewPoint)return;var n=this.getWebGLContext(),r=this;if(!this.floorTexture){this.floorTexture=n.createTexture();var i=new Image;i.onload=function(){t(i,r.floorTexture)},i.src="assets/images/dropshadow-1.png"}if(!this._floorTextureLoaded)return;this.engine.renderer.bindedProgram=null;var s=this.engine.rootPass.inputs.viewPoint,o=s.cameras[0].projection.matrix,u=mat4.create();mat4.multiply(e,this.carNode.transform,u),n.disable(n.DEPTH_TEST),n.disable(n.CULL_FACE),n.enable(n.BLEND),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA);if(!this._floorProgram){this._floorProgram=Object.create(GLSLProgram);var a="precision highp float;attribute vec3 vert;attribute vec3 color;attribute vec2 texcoord;varying vec2 v_texcoord;uniform mat4 u_projMatrix; uniform mat4 u_mvMatrix; varying vec3 v_color;varying vec3 v_coord;void main(void) { v_color = color;v_texcoord = vec2(texcoord.x, 1.-texcoord.y) - vec2(-0.5,0.35);v_coord = vert;gl_Position = u_projMatrix * u_mvMatrix * vec4(vert,1.0); }",f="precision highp float;varying vec3 v_color;varying vec3 v_coord;varying vec2 v_texcoord;uniform sampler2D u_image; void main(void) {  vec4 imgcol =  vec4(texture2D(u_image, v_texcoord)); gl_FragColor = vec4( imgcol.xyz, imgcol.a);  }";this._floorProgram.initWithShaders({"x-shader/x-vertex":a,"x-shader/x-fragment":f}),this._floorProgram.build(n)||console.log(this._floorProgram.errorLogs)}if(!this.floorVertexBuffer){var l=160,c=1,h=100,p=[-l,-l,0,1,1,1,-c,-c,l,-l,0,1,1,1,c,-c,-l,l,0,0,0,0,-c,c,-l,l,0,0,0,0,-c,c,l,-l,0,1,1,1,c,-c,l,l,0,0,0,0,c,c];this.floorVertexBuffer=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,this.floorVertexBuffer),n.bufferData(n.ARRAY_BUFFER,new Float32Array(p),n.STATIC_DRAW)}n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,this.floorTexture),n.bindBuffer(n.ARRAY_BUFFER,this.floorVertexBuffer);var d=this._floorProgram.getLocationForSymbol("vert");typeof d!="undefined"&&(n.enableVertexAttribArray(d),n.vertexAttribPointer(d,3,n.FLOAT,!1,32,0));var v=this._floorProgram.getLocationForSymbol("color");typeof v!="undefined"&&(n.enableVertexAttribArray(v),n.vertexAttribPointer(v,3,n.FLOAT,!1,32,12));var m=this._floorProgram.getLocationForSymbol("texcoord");typeof m!="undefined"&&(n.enableVertexAttribArray(m),n.vertexAttribPointer(m,2,n.FLOAT,!1,32,24)),this._floorProgram.setValueForSymbol("u_image",0),this.engine.renderer.bindedProgram=this._floorProgram;var g=this._floorProgram.getLocationForSymbol("u_projMatrix");g&&this._floorProgram.setValueForSymbol("u_projMatrix",o);var y=this._floorProgram.getLocationForSymbol("u_mvMatrix");y&&this._floorProgram.setValueForSymbol("u_mvMatrix",u),this._floorProgram.commit(n),n.drawArrays(n.TRIANGLES,0,6),n.disableVertexAttribArray(d),n.disableVertexAttribArray(v),n.disableVertexAttribArray(m),n.disable(n.BLEND),n.bindTexture(n.TEXTURE_2D,null)}},_width:{value:null},width:{get:function(){return this._width},set:function(e){if(e===this._width)return;this._width=e*this.scaleFactor,this.needsDraw=!0}},_height:{value:null},height:{get:function(){return this._height},set:function(e){if(e===this._height)return;this._height=e*this.scaleFactor,this.needsDraw=!0}},_cameraAnimating:{value:!0},cameraAnimating:{get:function(){return this._cameraAnimating},set:function(e){this.cameraAnimatingXVel=0,this.cameraAnimatingYVel=0,this._cameraAnimating=e}},cameraAnimatingXVel:{value:0},cameraAnimatingYVel:{value:0},draw:{value:function(){var e=this;if(null==this.width||null==this.height)return;this.cameraAnimating&&(this.cameraAnimatingXVel<.0013&&(this.cameraAnimatingXVel+=1e-5),this.cameraAnimatingYVel>-0.0005&&(this.cameraAnimatingYVel-=5e-6),this.camera.orbit(this.cameraAnimatingXVel,this.cameraAnimatingYVel),this.needsDraw=!0);var t=this.getWebGLContext(),n,r,i;t&&(t.clearColor(0,0,0,0),t.clear(t.DEPTH_BUFFER_BIT|t.COLOR_BUFFER_BIT)),this.delegate&&this.delegate.willDraw(this);if(this.scene){n=this.engine.renderer;if(t){this.canvas.setAttribute("width",this._width),r=this._width,this.canvas.setAttribute("height",this._height),i=this._height;if(this.scaleFactor>1){var s=-(this.width/2),o=-(this.height/2),u=1/this.scaleFactor;this.canvas.style["-webkit-transform"]="scale("+u+","+u+") translateZ(0) translate("+s+"px,"+o+"px)"}var a=this.engine.rootPass.inputs.viewPoint;if(!a)return;t.viewport(0,0,r,i);var f=this.carNode,l=[0,0,0];this.materialForName("interior1").inputs.specularColor=l,this.materialForName("material_12").inputs.specularColor=l,this.materialForName("body3").inputs.specularColor=l,this.materialForName("material_6").inputs.specularColor=l,t.depthFunc(t.LESS),t.enable(t.DEPTH_TEST),t.frontFace(t.CW);var c=this.camera.getViewMat();mat4.inverse(c,a.transform);var h=mat4.create();mat4.set(f.transform,h),t.depthMask(!0),a.cameras[0].projection.aspectRatio=r/i,a.cameras[0].projection.zfar=1e4,a.cameras[0].projection.zmin=.1;if(a.id==="__default_camera"){var p=mat4.scale(mat4.identity(),[1,1,-1]);mat4.multiply(f.transform,p)}this.engine.render(),t.depthMask(!0),mat4.set(h,f.transform),t.frontFace(t.CCW),t.disable(t.DEPTH_TEST),t.depthMask(!1),this.drawGradient(),this.drawFloor(c),t.depthMask(!0),t.depthFunc(t.LESS),t.enable(t.DEPTH_TEST),t.enable(t.CULL_FACE),t.disable(t.BLEND),this.engine.render();var d=t.getError();d!=t.NO_ERROR&&console.log("gl error"+t.getError())}}}},didDraw:{value:function(){this.delegate&&typeof this.delegate.didDraw=="function"&&this.delegate.didDraw(this)}},resourceAvailable:{value:function(e){this.needsDraw=!0}},templateDidLoad:{value:function(){var e=TranslateComposer.create(),t=this;translateComposer=e,translateComposer.hasMomentum=!0,this.addComposerForElement(e,this.canvas);var n=null;translateComposer.addPropertyChangeListener("translateY",function(e){t._consideringPointerForPicking=!1,t.needsDraw=!0}),translateComposer.addPropertyChangeListener("translateX",function(e){t._consideringPointerForPicking=!1,t.needsDraw=!0}),translateComposer.addEventListener("translateStart",function(e){t.cameraAnimating=!1,n&&clearTimeout(n)},!1),translateComposer.addEventListener("translateEnd",function(){n=setTimeout(function(){t.cameraAnimating=!0,t.needsDraw=!0},3e3)},!1)}},handleAnimationValueUpdate:{value:function(){this.needsDraw=!0}}});var translateComposer=null,MontageOrbitCamera=OrbitCamera;MontageOrbitCamera.prototype=Montage.create(OrbitCamera.prototype),MontageOrbitCamera.prototype._hookEvents=function(e){var t=this,n=!1,r,i;translateComposer.addEventListener("translateStart",function(e){n=!0,r=e.translateX,i=e.translateY},!1),translateComposer.addPropertyChangeListener("translateY",function(e){if(n){var s=e.target.translateX-r,o=e.target.translateY-i;r=e.target.translateX,i=e.target.translateY,t.orbit(s*.013,o*.013)}}),translateComposer.addPropertyChangeListener("translateX",function(e){if(n){var s=e.target.translateX-r,o=e.target.translateY-i;r=e.target.translateX,i=e.target.translateY,t.orbit(s*.013,o*.013)}}),translateComposer.addEventListener("translateEnd",function(){n=!1},!1),e.addEventListener("mousewheel",function(e){t.setDistance(-t._distance[2]+e.wheelDeltaY*t.distanceStep),e.preventDefault()},!1),e.addEventListener("gesturestart",function(e){t.initialDistance=t._distance[2],e.preventDefault()},!1),e.addEventListener("gesturechange",function(e){t.setDistance(-1*t.initialDistance/e.scale),e.preventDefault()},!1)}