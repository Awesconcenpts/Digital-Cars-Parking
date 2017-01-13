var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    args.request=req;
    res.render('index', {title:App.getConfig('app_name')});    
});
router.get('/enter.html', function(req, res, next) {
    args.request=req;
    /* user profile is already assigned from hyperAgent.startScan() method so following line is committed */
    //args.toView={"image":"images/default.jpg","name":"Krishna Sharma","date":"987897979","from":"","to":"","security":"7787"};
    res.render('index', {title:App.getConfig('app_name')}); 
    
});
router.get('/exit.html', function(req, res, next) {
    args.request=req;
    args.toView={"image":"images/default.jpg","name":"Krishna Sharma","date":"987897979","from":"456456546","to":"","security":"7787"};
    res.render('index', {title:App.getConfig('app_name')}); 
    
});
router.get('/list.html', function(req, res, next) {
    args.request=req;
    args.toView=new Array({"image":"images/default.jpg","name":"Krishna Sharma","date":"987897979","from":"456456546","to":"4564565543543","security":"7787"});
    res.render('index', {title:App.getConfig('app_name')}); 
    
});
router.get('/waiting.html', function(req, res, next) {
    args.request=req;
    res.render('index', {title:App.getConfig('app_name')}); 
    
});
router.get('/load/:1?', function(req, res, next) {
    args.request=req;
    if(App.getUri(1)!=''){
        current_page=args.root + '/views/'+App.getUri(1)+'.html';
    }
    args.fs.readFile(current_page, function(err, page) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(page);
        res.end();
    });
});
// For Ajax call
router.get('/startScan.json', function(req, res, next) {

    var scaned_result=hyperAgent.startScan();
    res.json(scaned_result);
});
router.get('/waiting.json', function(req, res, next) {
    args.waiting_list.filter(function(all){
    	return all.userInParking==false;
    });
    res.json(args.waiting_list);
});
router.post("/set_user_in_park.html",function(req, res, next){
	if(typeof(req.session.user_in_park)=='undefined'){
		req.session.user_in_park=new Array();
	}
	args.waiting_list.filter(function(item){
		if(item.id==req.body.user_id){
			item.userInParking=true;
		}
		return true;
	});
});
module.exports = router;
