/**
 * Created by diamondrubix on 5/29/17.
 */

    exports.login = function(username,password){
        fetch('http://172.18.100.133:8090/phoneLogin/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
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