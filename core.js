exports.getUri=function(e){
    var index=e;
    if(typeof(args.request)=='undefined' || typeof(args.request.params)=='undefined' || typeof(args.request.params[e])=='undefined'){
     return '';
    }else{
      return App.getRemoveSuffix(args.request.params[e]);
    }
}
exports.getRemoveSuffix=function(e){
  return e.replace('.html','');
}
exports.getConfig=function(e){
  if(e!=='' && global.args.configs.hasOwnProperty(e)){
    return global.args.configs[e];
  }else if(typeof(e)!=='undefined'){
   return ''; 
  }else{
  return global.args.configs;
  }
}
exports.getPost=function(e){
    if(e!=='' && global.args.request.body.hasOwnProperty(e)){
    return global.args.request.body[e];
    }else{
        return "";
    }
}