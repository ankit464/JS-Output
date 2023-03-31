function* timestampGenerator() {
  var ts = Date.now();
  console.log("Original Time :" + ts);
  yield ts;
  var additionalTime = yield;
  console.log("Addtional Time:" + additionalTime);
  if (additionalTime) {
    ts = ts + additionalTime;
  }0

  console.log("Updated Time :" + ts);
}
const it = timestampGenerator();
const originalTimeStamp = it.next(); ///gets the value as an object passed by  yield function .

console.log(originalTimeStamp);
it.next();
//it.next(1000 * 60);
