

let p = require("path")
let filesystem = require('fs')
let  server = require("http");

let h =  3010 ;

let  server2 = server.createServer(function (q,
                                             response)
{
  if(
    q.method == 'GET' && q.url == "/"
  ) {
    response.write('Home Page'); response.end();
  }
  else
  {
    response.write('Error 404: Page Not Found'); response.end();
  }
})

server2.listen(h);


