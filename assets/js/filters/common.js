mockups.filter("listtotal", function($filter){
   return function(ob,scope){
      var to=new Date($filter('date')(ob.to,'yyyy-MM-ddTHH:mm:ss.sssZ'));
      var from=new Date($filter('date')(ob.from,'yyyy-MM-ddTHH:mm:ss.sssZ'))
      var hourly_rate=$filter('config')('hourly_rate', scope);
      var day_rate=$filter('config')('day_rate', scope);
      var currency=$filter('config')('currency', scope);
      var diff=timeDifference(to,from);
      var total=0;
      if(diff.days>0){
          total=diff.days*day_rate;
      }
      if(diff.hours>0){
          total+=diff.hours*hourly_rate;
      }
      if(diff.minutes>0){
          total+=diff.minutes*(hourly_rate/60);
      }
      if(diff.seconds>0){
          total+=diff.seconds*(hourly_rate/(60*60));
      }
      return currency+" "+total.toFixed(2); 
   }
});
mockups.filter("total", function($filter){
   return function(ob,scope){
      var to=new Date(); 
      var from=new Date($filter('date')(ob.from,'yyyy-MM-ddTHH:mm:ss.sssZ')) 
      var hourly_rate=$filter('config')('hourly_rate', scope);
      var day_rate=$filter('config')('day_rate', scope);
      var currency=$filter('config')('currency', scope);
      var diff=timeDifference(to,from);
      var total=0;
      if(diff.days>0){
          total=diff.days*day_rate;
      }
      if(diff.hours>0){
          total+=diff.hours*hourly_rate;
      }
      if(diff.minutes>0){
          total+=diff.minutes*(hourly_rate/60);
      }
      if(diff.seconds>0){
          total+=diff.seconds*(hourly_rate/(60*60));
      }
      return currency+" "+total.toFixed(2); 
   }
});
mockups.filter('currentdate',['$filter',  function($filter) {
    return function() {
        return $filter('date')(new Date(), 'EEE MMM dd yyyy');
    };
}])
mockups.filter('enterdate',['$filter',  function($filter) {
    return function(e) {
        return $filter('date')(e, 'EEE MMM dd yyyy');
    };
}])
mockups.filter('entertime',['$filter',  function($filter) {
    return function(e) {
        return $filter('date')(e, 'hh:mm:ss a');
    };
}])
function timeDifference(date1,date2) {
      var difference = date1.getTime() - date2.getTime();
      var daysDifference = Math.floor(difference/1000/60/60/24);
      difference -= daysDifference*1000*60*60*24
      var hoursDifference = Math.floor(difference/1000/60/60);
      difference -= hoursDifference*1000*60*60
      var minutesDifference = Math.floor(difference/1000/60);
      difference -= minutesDifference*1000*60
      var secondsDifference = Math.floor(difference/1000);
      return {"days":daysDifference,"hours":hoursDifference,"minutes":minutesDifference,"seconds":secondsDifference};

}
function getAngObj(){
    var appElement = document.querySelector('[ng-app="mockups"]');
  return angular.element(appElement);
}
function getScope(){
  return getAngObj().scope();
}
var tick = function(ok) {
    var time=new Date();
    var h=time.getHours();
    var ampm='AM'
    if(h>12){
        h=h-12;
        ampm='PM'
    }
    var scope=getScope();
    scope.clock = h+":"+time.getMinutes()+":"+time.getSeconds() +" "+ampm;
    if(!ok)scope.$apply();
    setTimeout(tick, 1000);
}
mockups.filter("config", function(){
    return function(ob,scope){ 
        if(scope.configs==null){
            scope.configs=toView.config;
        }
        if(scope.configs.hasOwnProperty(ob)){
            return scope.configs[ob];
        }
        return ""; 
    }
});
mockups.filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                  //Also remove . and , so its gives a cleaner result.
                  if (value.charAt(lastspace-1) == '.' || value.charAt(lastspace-1) == ',') {
                    lastspace = lastspace - 1;
                  }
                  value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
});