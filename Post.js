/**
 * Created by diamondrubix on 5/29/17.
 */

url = '172.18.100.133'
//url = '10.0.0.99'
port = '8090'

exports.login = function(username,password){
    return fetch('http://'+url+':'+port+'/phoneloginvalidate/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
            logged: "true"
        })
    })
        /*
        .then(function(msg){
            console.warn("return ok "+msg.thing)
        })
        .catch(function (err) {
            console.warn("return error "+err)
        })
        */
}

//* this post request works
exports.testConnection =  function() {
    fetch('http://'+url+':'+port+'/phone/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
        })
    })
}
