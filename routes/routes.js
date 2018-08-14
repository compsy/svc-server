var service = require('/service')

var createMock = function(result, namespace, action) {
  return {
    "duration": 314,
    "name": action,
    "subject": "bluemix@compsy.nl",
    "activationId": "0d1762debbff4e279762debbffae271c",
    "publish": false,
    "annotations": [{
      "key": "path",
      "value": `${namespace}/${action}`
    }, {
      "key": "waitTime",
      "value": 431
    }, {
      "key": "kind",
      "value": "nodejs:6"
    }, {
      "key": "limits",
      "value": {
        "timeout": 30000,
        "memory": 128,
        "logs": 10
      }
    }, {
      "key": "initTime",
      "value": 299
    }],
    "version": "0.0.103",
    "response": {
      "result": result,
      "success": true,
      "status": "success"
    },
    "end": 1534258976835,
    "logs": [],
    "start": 1534258976521,
    "namespace": namespace
  };
}

var appRouter = function(app) {
  app.post("/api/v1/namespaces/:namespace/actions/:action", function(req, res) {
    var result = service(req.body)
    console.log(result);
    res.status(200).send(createMock(result, req.params.namespace, req.params.action));
  });
}



module.exports = appRouter;
