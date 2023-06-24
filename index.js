const http = require("http");
const fs = require("fs");
const server = http.createServer(function (req, res) {
  const method = req.method;
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first page </title><head>");
    res.write("<body>");
    res.write("<h1>hello from my page update </h1>");
    res.write(
      "<form action='/test' method='POST'><input type='text' name='msg'><button type='submit'>Send</button></form>"
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/test" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const msg = parseBody.split("=")[0];
      fs.writeFileSync("trangTest.txt", msg);
    });
    fs.writeFileSync("test.txt", "Trang update");
    res.statusCode = 200;
    return res.end();
  }
});
server.listen(3000);
