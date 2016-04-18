# Rainier-Beer Http Framework
A simplified express style router

How to use the rainier-beer framework
## How to Install

**npm install rainier-beer**

In order to use rainier-beer you must require it in:
**const rainierBeer = require('rainier-beer');**

## How to use Router

You can create a Router by making a new constructor equal to a variable

```Javascript
 const practiceRouter = new rainierBeer();
 ```

After that you must create a server as you normally would by using http.createServer:

```Javascript
http.createServer(practiceRouter.route()).listen(3000, () => console.log('server up'));
```

Now you can begin to make easy, one line GET and POST requests.

### POST

**practiceRouter.post('/tiger', '220', 'text/plain', 'Tiger Tiger in the Night');**

#### Parameters:
There are 5 parameters for calling the .post() function
  * **routeName**: is the url path extension (ex/ '/' or '/anything')
  * **statusCode**: is the status you want to define (ex/ 200, 404, 300);
  * **Content-Type**: is the type of response you want (ex/ plain/text, application/json)
  * **write**: is what is written to the response (ex/ "Hello Rainier Beer!")

With the post request there is no option for default values but the parameters are extremely customizable.

If you want to print data that is being pushed through then you must put the *write* parameter to equal **chunk**

```Javascript
practiceRouter.post('/duck', '270', 'text/plain', 'chunk');
```


If you want to write an individualized response then substitute **chunk** for any string of your choosing.

```Javascript
practiceRouter.post('/tiger', '220', 'text/plain', 'Anything except for "chunk"');
```

### GET

**practiceRouter.get = function(routeName, statusCode, contentType, write, cb)**

#### Parameters:

There are 5 parameters for calling the .get() function
  * **routeName**: is the url path extension (ex/ '/' or '/anything')
  * **statusCode**: is the status you want to define (ex/ 200, 404, 300);
  * **Content-Type**: is the type of response you want (ex/ plain/text, application/json)
  * **write**: is what is written to the response (ex/ "Hello Rainier Beer!")

#### Default Values:

While indicating your own routeName is mandatory, inherit to the GET requests using this Router are a couple of *default values* should you choose not to input your own parameters when calling the .get() function.

  * **statusCode**: 200
  * **Content-Type**: plain/text
  * **write**: Received GET

If you want to use the default values for a get request then an example is as follows:

```javascript
practiceRouter.get('/cat');
```


If you want to customize your own you can input your own values for the parameters.

```javascript
practiceRouter.get('/moose', 210, 'text/plain', 'Hello Kat');
```


### DELETE/PUT/PATCH
While these are a;;
Unlike GET and POST, the remaining three REST verbs have a less stream-lined but can more easily be modified.

Below is an example of how to use DELETE.
```javascript
practiceRouter.delete('/delete', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('so much delete');
  res.end();
});
```
Note: PUT and PATCH each have very similar syntax to one another thus only an example of PUT can be seen below.

```javascript
practiceRouter.put('/put', (req, res) => {
  req.on('data', (chunk) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(chunk);
    res.end();
  });
});
```

## Sample Use:

If you want to view sample code of our npm being used then look at our github into the server.js file within the lib directories.

**https://github.com/kbeame/rainier-beer/blob/master/lib/server.js**

## Dependencies:
* Gulp was used for task management
* Mocha Chai (with chai-http) were used for testing

## Authors:
#### Katherine Beame and Benjamin Nolan

## Resources Used:
This framework is heavily based off of in-class demonstrations in Javascript CodeFellows 401-d7.

The authors also referred to the npm package sludgie-trucker-coffee for inspiration.
