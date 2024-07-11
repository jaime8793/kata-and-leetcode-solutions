function cockroachSpeed(s) {
  let distanceInMeters = s * 100000;
  console.log(distanceInMeters)
  let timeInseconds = 3600;
    console.log(distanceInMeters / timeInseconds);
    
  return Math.floor(distanceInMeters / 36000);
}
cockroachSpeed(1.614470494329961);
