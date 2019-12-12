<!-- Javascript file for Interactive Newsfeed-->

var apicall ='https://newsapi.org/v2/everything?q=notredame&from=2019-04-21&to=2019-04-21&sortBy=popularity&apiKey=b5c9bc3f32ba47a3b6beabf5b506300c';

$.getJSON(apicall, function (json) {
       $(json).each(function (index, value) {

         //Create variables with which to reference specific stories in the news feed.

         var outlet = value.articles.source.name;
         var headline = value.articles.title;
         var desc = value.articles.description;
         var link = value.articles.url;
         var img = value.articles.urlToImage;
         var date = value.articles.publishedAt;
         var preview = value.articles.content;

         $('.newsfeed').append(<a href='https://www.20minutes.fr/societe/2501351-20190421-vdeo-incendie-dame-paris-cathedrale-quasi-sauvee-selon-ministre-culture'> + 'Incendie à Notre-Dame de Paris: La cathédrale «quasi sauvée», selon le ministre de la culture' + </a> + "<a href='https://www.collegeparkmd.gov/' target=_blank>" + city + "</a>" + ', Maryland, ' + country +' is ' + desc + ' ' + "<img src='http://openweathermap.org/img/w/"+ icon+ ".png'/>" + " " + temp + ' degrees and ' + humidity + "% humidity." );
  });

});
