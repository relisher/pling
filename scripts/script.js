var myDiv = {
  'config' : {
    'container' : $('.container')
  },

  'init' : function(config) {
    if (config && typeof(config) == 'object') {
      // what does this do?
      $.extend(myDiv.config, config);
    }

    myDiv.$container = myDiv.config.container;
    myDiv.$content = $(".content");

    myDiv.$calendarLink = $("#calendar");
    myDiv.$aboutLink = $("#about");

    myDiv.linkCalendar(myDiv.$calendarLink);

    myDiv.initialized = true;
  },

  'linkCalendar' : function($calendarLink) {
    $calendarLink.click(function() {
      myDiv.$content.html('<iframe src="https://www.google.com/calendar/embed?showPrint=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=0bj916s3p6btljinbph3nrc284%40group.calendar.google.com&amp;color=%231B887A&amp;ctz=America%2FNew_York" style=" border-width:0 " width="700" height="495" frameborder="0" scrolling="no"></iframe>');
    });
  },

}

$(document).ready(myDiv.init);
