Router.map(function() {
  this.route('about');
  this.route('home', {
    path: "/",
  });

  this.route('articles', {
    data: function() {
      // return Articles.find()
      return Articles.find()
    }
  });

  this.route('article', {
    path: '/article/:_id',
      data: function() {
        return Articles.findOne({
          _id: this.params._id
        })
      },
      template: 'fullArticle'

  });

});
