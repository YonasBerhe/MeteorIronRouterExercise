Articles = new Meteor.Collection('articles');

Router.map(function() {
  this.route('about');
  this.route('home', {
    path: "/",
  });

  this.route('articles', {
    data: function() {
      // return Articles.find()
      return {
        article: Articles.find()
      };
    }
  });

  this.route('article', {
    path '/article/:_id',
      data: function() {
        return Articles.findOne({
          _id: this.params._id
        })
      },
      template: 'fullArticle'

  });

});

if (Meteor.isServer) {

  Meteor.startup(function() {
    if (!Articles.findOne()) {
      var articles = [{
        title: 'Article 1',
        body: 'This is article 1 '
      }, {
        title: 'Article 2',
        body: 'This is article 2 '
      }, {
        title: 'Article 3',
        body: 'This is article 3'
      }];
      articles.forEach(function(article) {
        Articles.insert(article);
      })
    }

  });
}
