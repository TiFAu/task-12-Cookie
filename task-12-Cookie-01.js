console.info ( location.href )

var res = document.cookie
    .split ( "; " )
    .map ( x =>  {
        var tmp = x.split ( "=" )
        var elem = {}
        elem [ tmp [0] ] = tmp [1]
        return elem
})
console.log ( res )