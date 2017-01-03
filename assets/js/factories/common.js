mockups.factory('Factory', function ($http) {
    return {
        getWaitingList: function (file) {
            var url = 'waiting.json';
                        return $http.get(url)
        }
    }
})