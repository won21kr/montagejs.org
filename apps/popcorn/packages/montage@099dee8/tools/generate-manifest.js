function usage(){console.log("Usage: generate-manifest [ directory... ]")}function main(e,t,n){for(var r=0,i=t.length;r<i;r++){var s=t[r];s.lastIndexOf("/")===s.length-1&&(s=s.substr(0,s.length-1));var o=path.join(e,s),u=fs.statSync(o);if(u.isDirectory()){var a=n[s]={directory:!0,files:{}};main(o,fs.readdirSync(o),a.files)}else n[s]=null}return n}var fs=require("fs"),path=require("path"),manifest={files:{}},argv=process.argv;if(argv.length>2&&argv[2]==="--help")usage();else{var directories=argv.slice(2);directories.length===0&&(directories=fs.readdirSync(".")),main("",directories,manifest.files),fs.writeFileSync("manifest.json",JSON.stringify(manifest),"utf8"),console.log("Wrote manfiest.json")}