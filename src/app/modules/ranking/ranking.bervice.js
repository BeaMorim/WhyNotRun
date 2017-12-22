ranking.factory("Ranking", function($http) {

    var page = 0;

    var _getRanking = function (order, ranking) {
        if(ranking == "")
            page = 0;
        page++;
        console.log(page)
        console.log($http.get('http://localhost:55816/technologies?page=' + page + '&order=' + order))
        return $http.get('http://localhost:55816/technologies?page=' + page + '&order=' + order);
    };

    return {
        getRanking: _getRanking
    };
});