var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var requirejs = ({
	shim: {
		'underscore': {exports: '_'},
		'jquery.ui': {deps: ['jquery'],exports: 'jQuery'},
		'jquery.scrollto': {deps: ['jquery'],exports: 'jQuery'}
	},
	paths: {
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min',
		'jquery.ui': 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min',
		'jquery.scrollto': 'lib/jquery/jquery.scrollTo.min',
		'underscore': 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.1/underscore-min',
		'knockout0':'http://cdnjs.cloudflare.com/ajax/libs/knockout/2.1.0/knockout-min',
		'knockout':'http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1',

		'text': 'lib/require/text',
		'domready': 'lib/require/domready'
	},
	config:{
		'scm':{
			playback:{
				'youtube':'(youtube.com|youtu.be)',
				'soundcloud':'^http(s)?\:\/\/soundcloud.com',
				'soundmanager':'.*'
			},
			playlist:{
				'youtube':'(youtube.com|youtu.be)',
				'soundcloud':'^http(s)?\:\/\/soundcloud.com',
				'rss':'.*'
			}
		}
	},
	waitSeconds: 900,
	baseUrl: 'js/'
});

soundManager.preferFlash = false;
soundManager.useHTML5Audio = true;
soundManager.url = 'swf/';
soundManager.allowScriptAccess = 'always';


}