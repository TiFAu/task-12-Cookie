console.info ( location.href )

document.cookie = "userName=Ирина"

var res = document.cookie
    .split ( "; " )
    .map ( x =>
        Object.assign (
            {},
            (
                arr => {
                    return { [ arr [0] ] : arr [1] }
                }
            ) ( x.split ( "=" )
        )
    )
)

console.log ( res )