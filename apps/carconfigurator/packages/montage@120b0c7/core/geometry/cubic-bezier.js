var Montage=require("montage").Montage,Point=require("core/geometry/point").Point,CubicBezier=exports.CubicBezier=Montage.create(Montage,{init:{enumerable:!1,value:function(e){return e!==null&&(e.length===2?(this.p1=e[0],this.p2=e[1]):e.length===4&&(this.p0=e[0],this.p1=e[1],this.p2=e[2],this.p3=e[3])),this}},position:{enumerable:!1,value:function(e){if(e<0||e>1)return;e=1-e;var t=e*e*e,n=3*e*e*(1-e),r=3*e*(1-e)*(1-e),i=(1-e)*(1-e)*(1-e);return Montage.create(Point).init(this.p0.x*t+this.p1.x*n+this.p2.x*r+this.p3.x*i,this.p0.y*t+this.p1.y*n+this.p2.y*r+this.p3.y*i)}},split:{enumerable:!1,value:function(e){return this.makeScaffolding(e),CubicBezier.create(CubicBezier).init([this.p0,this.p01,this.p012,this.p0123])}},splitToTimingFunction:{enumerable:!1,value:function(e){this.makeScaffolding(e);var t=this.p0123.x,n=this.p0123.y;return CubicBezier.create(CubicBezier).init([Montage.create(Point).init(this.p01.x/t,this.p01.y/n),Montage.create(Point).init(this.p012.x/t,this.p012.y/n)])}},makeScaffolding:{enumerable:!1,value:function(e){e=1-e;var t=1e6;Montage.defineProperty(this,"p01",{value:Point.interpolate(e,this.p0,this.p1,t)}),Montage.defineProperty(this,"p12",{value:Point.interpolate(e,this.p1,this.p2,t)}),Montage.defineProperty(this,"p23",{value:Point.interpolate(e,this.p2,this.p3,t)}),Montage.defineProperty(this,"p012",{value:Point.interpolate(e,this.p01,this.p12,t)}),Montage.defineProperty(this,"p123",{value:Point.interpolate(e,this.p12,this.p23,t)}),Montage.defineProperty(this,"p0123",{value:Point.interpolate(e,this.p012,this.p123,t)})}},p0:{enumerable:!0,value:Montage.create(Point).init(0,0)},p1:{enumerable:!0,value:Montage.create(Point).init(0,0)},p2:{enumerable:!0,value:Montage.create(Point).init(1,1)},p3:{enumerable:!0,value:Montage.create(Point).init(1,1)}})