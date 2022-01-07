function getCookies () {
    var res = document.cookie
        .split ( "; " )
        .map (
            x =>  {
                var tmp = x.split ( "=" )
                var elem = {}
                elem [ tmp [0] ] = tmp [1]
                return elem
            }
        )
    return Object.assign ( {}, ...res )
}
//Эта функция будет возвращать куки как объект