/**
 * Created by diamondrubix on 6/19/17.
 */

let url = 'ws://localhost/test'

var ws = new WebSocket(url);

ws.onopen = () => {
    // connection opened
    console.warn('did it send?')
    ws.send('something'); // send a message
};
/*
ws.onmessage = (e) => {
    // a message was received
    console.log(e.data);
};
*/
ws.onerror = (e) => {
    // an error occurred
    console.log(e.message);
};

ws.onclose = (e) => {
    // connection closed
    console.log(e.code, e.reason);
};
