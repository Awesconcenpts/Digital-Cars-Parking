mockups.factory('Factory', function ($http) {
    return {
        getWaitingList: function (file) {
            var url = 'waiting.json';
                        return $http.get(url)
        },
        setUserInPark: function (user_id) {
            var url = 'set_user_in_park.html';
                        return $http.post(url,{user_id:user_id})
        }
    }
})