app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Hi there'; 
  $scope.promo = "Be awesome, because it's gonna be legen - wait for it... - dairy! Legendary!";
  $scope.products = [ 
    { 
      name: 'The Book of Trees', 
      price: 19, 
      pubdate: new Date('2014', '03', '08'), 
      cover: 'img/the-book-of-trees.jpg' ,
      likes: 0,
      dislikes: 0
    }, 
    { 
      name: 'Program or be Programmed', 
      price: 8, 
      pubdate: new Date('1997', '06', '26'), 
      cover: 'img/program-or-be-programmed.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      price: 35, 
      pubdate: new Date('1997', '26', '06'), 
      cover: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
      likes: 0,
      dislikes: 0
    },
    {
      name: "Harry Potter and the Chamber of Secrets",
      price: 38, 
      pubdate: new Date('1998', '02', '07'), 
      cover: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg',
      likes: 0,
      dislikes: 0
    }
  ];
  $scope.plusOne = function(index) { 
    $scope.products[index].likes += 1; 
  };
  $scope.minusOne = function(index) { 
    $scope.products[index].dislikes += 1; 
  };
}]);