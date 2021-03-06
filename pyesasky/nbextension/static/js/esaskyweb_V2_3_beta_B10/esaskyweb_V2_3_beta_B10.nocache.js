function esaskyweb_V2_3_beta_B10(){
  var $wnd_0 = window;
  var $doc_0 = document;
  sendStats('bootstrap', 'begin');
  function isHostedMode(){
    var query = $wnd_0.location.search;
    return query.indexOf('gwt.codesvr.esaskyweb_V2_3_beta_B10=') != -1 || query.indexOf('gwt.codesvr=') != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd_0.__gwtStatsEvent) {
      $wnd_0.__gwtStatsEvent({moduleName:'esaskyweb_V2_3_beta_B10', sessionId:$wnd_0.__gwtStatsSessionId, subSystem:'startup', evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  esaskyweb_V2_3_beta_B10.__sendStats = sendStats;
  esaskyweb_V2_3_beta_B10.__moduleName = 'esaskyweb_V2_3_beta_B10';
  esaskyweb_V2_3_beta_B10.__errFn = null;
  esaskyweb_V2_3_beta_B10.__moduleBase = 'DUMMY';
  esaskyweb_V2_3_beta_B10.__softPermutationId = 0;
  esaskyweb_V2_3_beta_B10.__computePropValue = null;
  esaskyweb_V2_3_beta_B10.__getPropMap = null;
  esaskyweb_V2_3_beta_B10.__installRunAsyncCode = function(){
  }
  ;
  esaskyweb_V2_3_beta_B10.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  esaskyweb_V2_3_beta_B10.__gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  esaskyweb_V2_3_beta_B10.__gwt_getMetaProperty = function(){
    return null;
  }
  ;
  var __propertyErrorFunction = null;
  var activeModules = $wnd_0.__gwt_activeModules = $wnd_0.__gwt_activeModules || {};
  activeModules['esaskyweb_V2_3_beta_B10'] = {moduleName:'esaskyweb_V2_3_beta_B10'};
  esaskyweb_V2_3_beta_B10.__moduleStartupDone = function(permProps){
    var oldBindings = activeModules['esaskyweb_V2_3_beta_B10'].bindings;
    activeModules['esaskyweb_V2_3_beta_B10'].bindings = function(){
      var props = oldBindings?oldBindings():{};
      var embeddedProps = permProps[esaskyweb_V2_3_beta_B10.__softPermutationId];
      for (var i_0 = 0; i_0 < embeddedProps.length; i_0++) {
        var pair = embeddedProps[i_0];
        props[pair[0]] = pair[1];
      }
      return props;
    }
    ;
  }
  ;
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc_0.createElement('iframe');
    scriptFrame.src = 'javascript:""';
    scriptFrame.id = 'esaskyweb_V2_3_beta_B10';
    scriptFrame.style.cssText = 'position:absolute; width:0; height:0; border:none; left: -1000px;' + ' top: -1000px;';
    scriptFrame.tabIndex = -1;
    $doc_0.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentDocument;
    if (!frameDoc) {
      frameDoc = scriptFrame.contentWindow.document;
    }
    frameDoc.open();
    var doctype = document.compatMode == 'CSS1Compat'?'<!doctype html>':'';
    frameDoc.write(doctype + '<html><head><\/head><body><\/body><\/html>');
    frameDoc.close();
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc_0.readyState == 'undefined') {
          return typeof $doc_0.body != 'undefined' && $doc_0.body != null;
        }
        return /loaded|complete/.test($doc_0.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc_0.removeEventListener) {
            $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc_0.addEventListener) {
        $doc_0.addEventListener('DOMContentLoaded', onBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , 50);
    }

    function installCode(code_0){
      var doc = getInstallLocationDoc();
      var docbody = doc.body;
      var script = doc.createElement('script');
      script.language = 'javascript';
      script.src = code_0;
      if (esaskyweb_V2_3_beta_B10.__errFn) {
        script.onerror = function(){
          esaskyweb_V2_3_beta_B10.__errFn('esaskyweb_V2_3_beta_B10', new Error('Failed to load ' + code_0));
        }
        ;
      }
      docbody.appendChild(script);
      sendStats('moduleStartup', 'scriptTagAdded');
    }

    sendStats('moduleStartup', 'moduleRequested');
    setupWaitForBodyLoad(function(){
      installCode(filename);
    }
    );
  }

  esaskyweb_V2_3_beta_B10.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  esaskyweb_V2_3_beta_B10.__installRunAsyncCode = function(code_0){
    var doc = getInstallLocationDoc();
    var docbody = doc.body;
    var script = doc.createElement('script');
    script.language = 'javascript';
    script.text = code_0;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc_0.getElementsByTagName('meta');
    for (var i_0 = 0, n = metas.length; i_0 < n; ++i_0) {
      var meta = metas[i_0], name_1 = meta.getAttribute('name'), content_0;
      if (name_1) {
        name_1 = name_1.replace('esaskyweb_V2_3_beta_B10::', '');
        if (name_1.indexOf('::') >= 0) {
          continue;
        }
        if (name_1 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value_1, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_1 = content_0.substring(0, eq);
              value_1 = content_0.substring(eq + 1);
            }
             else {
              name_1 = content_0;
              value_1 = '';
            }
            metaProps[name_1] = value_1;
          }
        }
         else if (name_1 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_1 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value_0 = metaProps[name_0];
      return value_0 == null?null:value_0;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    esaskyweb_V2_3_beta_B10.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    function ensureAbsoluteUrl(url_0){
      if (url_0.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc_0.createElement('img');
        img.src = url_0 + 'clear.cache.gif';
        url_0 = getDirectoryOfFile(img.src);
      }
      return url_0;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty('baseUrl');
      if (metaVal != null) {
        return metaVal;
      }
      return '';
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc_0.getElementsByTagName('script');
      for (var i_0 = 0; i_0 < scriptTags.length; ++i_0) {
        if (scriptTags[i_0].src.indexOf('esaskyweb_V2_3_beta_B10.nocache.js') != -1) {
          return getDirectoryOfFile(scriptTags[i_0].src);
        }
      }
      return '';
    }

    function tryBaseTag(){
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return '';
    }

    function isLocationOk(){
      var loc = $doc_0.location;
      return loc.href == loc.protocol + '//' + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == '') {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == '') {
      tempBase = tryBaseTag();
    }
    if (tempBase == '' && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc_0.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return esaskyweb_V2_3_beta_B10.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId = 0;
    function unflattenKeylistIntoAnswers(propValArray, value_0){
      var answer = answers;
      for (var i_0 = 0, n = propValArray.length - 1; i_0 < n; ++i_0) {
        answer = answer[propValArray[i_0]] || (answer[propValArray[i_0]] = []);
      }
      answer[propValArray[n]] = value_0;
    }

    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value_0 = providers[propName](), allowedValuesMap = values[propName];
      if (value_0 in allowedValuesMap) {
        return value_0;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunction) {
        __propertyErrorFunction(propName, allowedValuesList, value_0);
      }
      throw null;
    }

    providers['log_level'] = function(){
      var log_level;
      if (log_level == null) {
        var regex = new RegExp('[\\?&]log_level=([^&#]*)');
        var results = regex.exec(location.search);
        if (results != null) {
          log_level = results[1];
        }
      }
      if (log_level == null) {
        log_level = __gwt_getMetaProperty('log_level');
      }
      if (!__gwt_isKnownPropertyValue('log_level', log_level)) {
        var levels = ['TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL', 'OFF'];
        var possibleLevel = null;
        var foundRequestedLevel = false;
        for (i in levels) {
          foundRequestedLevel |= log_level == levels[i];
          if (__gwt_isKnownPropertyValue('log_level', levels[i])) {
            possibleLevel = levels[i];
          }
          if (i == levels.length - 1 || foundRequestedLevel && possibleLevel != null) {
            log_level = possibleLevel;
            break;
          }
        }
      }
      return log_level;
    }
    ;
    values['log_level'] = {DEBUG:0, OFF:1};
    providers['user.agent'] = function(){
      var ua = navigator.userAgent.toLowerCase();
      var docMode = $doc_0.documentMode;
      if (function(){
        return ua.indexOf('webkit') != -1;
      }
      ())
        return 'safari';
      if (function(){
        return ua.indexOf('msie') != -1 && (docMode >= 10 && docMode < 11);
      }
      ())
        return 'ie10';
      if (function(){
        return ua.indexOf('msie') != -1 && (docMode >= 9 && docMode < 11);
      }
      ())
        return 'ie9';
      if (function(){
        return ua.indexOf('msie') != -1 && (docMode >= 8 && docMode < 11);
      }
      ())
        return 'ie8';
      if (function(){
        return ua.indexOf('gecko') != -1 || docMode >= 11;
      }
      ())
        return 'gecko1_8';
      return '';
    }
    ;
    values['user.agent'] = {gecko1_8:0, ie10:1, ie8:2, ie9:3, safari:4};
    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    esaskyweb_V2_3_beta_B10.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        if (values.hasOwnProperty(key)) {
          result[key] = computePropValue(key);
        }
      }
      return result;
    }
    ;
    esaskyweb_V2_3_beta_B10.__computePropValue = computePropValue;
    $wnd_0.__gwt_activeModules['esaskyweb_V2_3_beta_B10'].bindings = esaskyweb_V2_3_beta_B10.__getPropMap;
    sendStats('bootstrap', 'selectingPermutation');
    if (isHostedMode()) {
      return computeUrlForResource('esaskyweb_V2_3_beta_B10.devmode.js');
    }
    var strongName;
    try {
      unflattenKeylistIntoAnswers(['OFF', 'gecko1_8'], '2B7EE66AB88A414FC8791F42D0D58029');
      unflattenKeylistIntoAnswers(['DEBUG', 'gecko1_8'], '3852508DCCE67771A3F80FFF37062DCF');
      unflattenKeylistIntoAnswers(['DEBUG', 'ie8'], '676274E0227FDE47F3E94ECF537D193C');
      unflattenKeylistIntoAnswers(['OFF', 'ie9'], '6C562404FE76A2A86F20DE748ECC38B3');
      unflattenKeylistIntoAnswers(['OFF', 'ie10'], '8236C96D7B77F87B45BB0E9D28DBA0DF');
      unflattenKeylistIntoAnswers(['DEBUG', 'ie10'], '9C9E3AF7D22CCC86532C2B84BDE22E88');
      unflattenKeylistIntoAnswers(['DEBUG', 'safari'], 'B64C4F2EE18016FD4EE0BF949CE832F3');
      unflattenKeylistIntoAnswers(['OFF', 'ie8'], 'BC16C54A8AB813A600A6EE2C46B5677B');
      unflattenKeylistIntoAnswers(['OFF', 'safari'], 'BE90AF958CB9B7D9A570B7D3FA953026');
      unflattenKeylistIntoAnswers(['DEBUG', 'ie9'], 'D455689DBF4C05309770EA82E567E900');
      strongName = answers[computePropValue('log_level')][computePropValue('user.agent')];
      var idx = strongName.indexOf(':');
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + 1), 10);
        strongName = strongName.substring(0, idx);
      }
    }
     catch (e) {
    }
    esaskyweb_V2_3_beta_B10.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + '.cache.js');
  }

  function loadExternalStylesheets(){
    if (!$wnd_0.__gwt_stylesLoaded) {
      $wnd_0.__gwt_stylesLoaded = {};
    }
    function installOneStylesheet(stylesheetUrl){
      if (!__gwt_stylesLoaded[stylesheetUrl]) {
        var l = $doc_0.createElement('link');
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', computeUrlForResource(stylesheetUrl));
        $doc_0.getElementsByTagName('head')[0].appendChild(l);
        __gwt_stylesLoaded[stylesheetUrl] = true;
      }
    }

    sendStats('loadExternalRefs', 'begin');
    installOneStylesheet('gwt/dark/dark.css');
    installOneStylesheet('gwt/aladinlite/aladin.min.css');
    sendStats('loadExternalRefs', 'end');
  }

  processMetas();
  esaskyweb_V2_3_beta_B10.__moduleBase = computeScriptBase();
  activeModules['esaskyweb_V2_3_beta_B10'].moduleBase = esaskyweb_V2_3_beta_B10.__moduleBase;
  var filename_0 = getCompiledCodeFilename();
  if ($wnd_0) {
    var devModePermitted = !!($wnd_0.location.protocol == 'http:' || $wnd_0.location.protocol == 'file:');
    $wnd_0.__gwt_activeModules['esaskyweb_V2_3_beta_B10'].canRedirect = devModePermitted;
    function supportsSessionStorage(){
      var key = '_gwt_dummy_';
      try {
        $wnd_0.sessionStorage.setItem(key, key);
        $wnd_0.sessionStorage.removeItem(key);
        return true;
      }
       catch (e) {
        return false;
      }
    }

    if (devModePermitted && supportsSessionStorage()) {
      var devModeKey = '__gwtDevModeHook:esaskyweb_V2_3_beta_B10';
      var devModeUrl = $wnd_0.sessionStorage[devModeKey];
      if (!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(devModeUrl)) {
        if (devModeUrl && (window.console && console.log)) {
          console.log('Ignoring non-whitelisted Dev Mode URL: ' + devModeUrl);
        }
        devModeUrl = '';
      }
      if (devModeUrl && !$wnd_0[devModeKey]) {
        $wnd_0[devModeKey] = true;
        $wnd_0[devModeKey + ':moduleBase'] = computeScriptBase();
        var devModeScript = $doc_0.createElement('script');
        devModeScript.src = devModeUrl;
        var head = $doc_0.getElementsByTagName('head')[0];
        head.insertBefore(devModeScript, head.firstElementChild || head.children[0]);
        return false;
      }
    }
  }
  loadExternalStylesheets();
  sendStats('bootstrap', 'end');
  installScript(filename_0);
  return true;
}

esaskyweb_V2_3_beta_B10.succeeded = esaskyweb_V2_3_beta_B10();
