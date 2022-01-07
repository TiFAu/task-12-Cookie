console.info ( location.href )

document.cookie = "userName=Ирина"

var res = document.cookie
    .split ( "; " )
    .map (
        x => Object.assign (
            {}, { [ x.split ( "=" )[0] ] : x.split ( "=" )[1] }
        )
    )

console.log ( res )
