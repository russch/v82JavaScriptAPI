//////////////////////////////////////////////////////////////////////////////
// Utilities
//////////////////////////////////////////////////////////////////////////////
/**
* Converts a hex color in the form #rrggbb to an array with each color separated
* and within the range [0, 255].
*
* @param  String  color     The hex color string
* @return Array             The RGB representation
*/
function hexToRgb(color) {
  var r = color.substring(1, 3), g = color.substring(3, 5), b = color.substring(5, 7);
  r = parseInt(r, 16); g = parseInt(g, 16); b = parseInt(b, 16);
  return [r, g, b];
}

/**
* Converts an array of RGB color values to a hex string in the form #rrggbb.
*
* @param    Array  rgb    An array with the red, green, and blue color values
* @return   String        The hex color string
*/
function rgbToHex(rgb) {
  var r = Math.round(rgb[0]).toString(16),
    g = Math.round(rgb[1]).toString(16),
    b = Math.round(rgb[2]).toString(16);
  r = (r.length === 1 ? "0" : "") + r;
  g = (g.length === 1 ? "0" : "") + g;
  b = (g.length === 1 ? "0" : "") + b;
  return "#" + r + g + b;
}

/*
* Modified from http://www.pvladov.com/2012/09/make-color-lighter-or-darker.html.
*/
function changeColorBrightness(rgb, correctionFactor) {
  var r = rgb[0], g = rgb[1], b = rgb[2];
  if (correctionFactor < 0) {
    correctionFactor = 1 + correctionFactor;
    r *= correctionFactor;
    g *= correctionFactor;
    b *= correctionFactor;
  } else {
    r = (255 - r) * correctionFactor + r;
    g = (255 - g) * correctionFactor + g;
    b = (255 - b) * correctionFactor + b;
  }

  return [Math.floor(r), Math.floor(g), Math.floor(b)];
}



function logError(e) {
  console.log(e);
}

function alertOrConsole(msg) {

if ($('input:radio[name=alertOrConsole]:checked').val()=="Alert") {alert(msg);} else {console.log(msg);}

}


//////////////////////////////////////////////////////////////////////////////
// Initialization
//////////////////////////////////////////////////////////////////////////////

function initialize() {
  // Order is important.

  initializeLayout();
  initializeColors();
  initializeSideBar() ;

}



function initializeLayout() {
  layout = $("#layoutContainer").layout({
    closable: false,
    resizable: false,
    slidable: false,

    north__spacing_open: 0,
    south__spacing_open: 0,
	west__spacing_open: 0,
    west__size: 300
  });

//Hide center container until it is properly localized.
  var vizSectionLayout = $("#vizsSectionLayoutContainer").layout({
    resizable: false,
    closable: false,
    slidable: false,
    north__spacing_open: 0,
//	center__initClosed: true,
    south__size: .5
  });
}


function initializeColors() {
  forEachActivity(function (group, activity) {
    var rgb = hexToRgb(activity.color);
    rgb = changeColorBrightness(rgb, 0.8);
    activity.lightColor = rgbToHex(rgb);
  });
}

function initializeSideBar() {
  var sideBar = $("#tasksSideBar");
  var groups = {};

  // Create the group headings for each activity type
  forEachActivity(function (group, activity) {
    var ul = groups[group.displayName];
    if (!ul) {
      ul = $("<ul>").addClass("noTextSelection");
      sideBar.append($("<h4>").text(group.displayName)).append(ul);
      groups[group.displayName] = ul;
    }

    // Create each activity.
    if (!activity.hide) {
      li = $("<li>").addClass("activity").text(activity.displayName);
      ul.append(li);

      // Add a reference to the data so we can access it later.
      $.data(li[0], "activity", activity);

      // Hook up the event handlers.
      li.click(handleActivityClick).hover(handleActivityMouseEnter, handleActivityMouseExit);
    }
  });
}


//////////////////////////////////////////////////////////////////////////////
// Utilities
//////////////////////////////////////////////////////////////////////////////

function detectLocale() {
    var tempLocale = (navigator.language || navigator.userLanguage).substring(0,2);
	switch(tempLocale) {
	case "en": 
		return 1033; break;
	case "fr": 
		return 1036; break;	
	case "es": 
		return 3082; break;	
	default: 
		return 1033; break;
	}
}

function forEachActivity(callback) {
  var i, ilen, j, jlen, group, activity;

  for (i = 0, ilen = sideBarData.length; i < ilen; i++) {
    group = sideBarData[i];

    for (j = 0, jlen = group.activities.length; j < jlen; j++) {
      activity = group.activities[j];
      callback(group, activity);
    }
  }
}
function selectActivityElement(activityElement) {
  // Get the activity.
  var activity = $.data(activityElement, "activity");
  if (!activity) { return; }

  // Make the previous selected activity inactive.
  $(".activity.ui-state-active").removeClass("ui-state-active").css("backgroundColor", "");

  // Change the visual state of the active activity.
  $(activityElement).addClass("ui-state-active").css("backgroundColor", activity.lightColor);

  // "Raise" an event by calling a named function if it exists.
  if (typeof activityClick === "function") {
    activityClick(activity);
  }
}

//////////////////////////////////////////////////////////////////////////////
// Event Handlers
//////////////////////////////////////////////////////////////////////////////

function handleActivityMouseEnter(e) {
  var activity = $.data(this, "activity");
  $(this).addClass("ui-state-hover");
  if (activity) {
    $(this).css("backgroundColor", activity.lightColor);
	$("#h2").text(activity.describe);
  }
}

function handleActivityMouseExit(e) {
  var activity = $.data(this, "activity");
  $(this).removeClass("ui-state-hover");
  if (activity && !$(this).hasClass("ui-state-active")) {
    $(this).css("backgroundColor", "");
  }
}

function handleActivityClick(e) {
  selectActivityElement(this);
}
