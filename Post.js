/**
 * Created by diamondrubix on 5/29/17.
 */

    exports.login = function(username,password){
        return fetch('http://172.18.100.133:8090/phoneloginvalidate/', {
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
    }

//* this post request works
   exports.testConnection =  function() {
        fetch('http://172.18.100.133:8090/phone/', {
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
