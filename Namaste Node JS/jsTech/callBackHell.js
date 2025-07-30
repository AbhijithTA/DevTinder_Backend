doSomething(function (result1) {
  doSomethingElse(result1, function (result2) {
    doAnotherThing(result2, function (result3) {
      doFinalThing(result3, function (finalResult) {
        console.log("Final Result:", finalResult);
      });
    });
  });
});


doSomething ().then(result1 => doSo)