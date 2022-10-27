function insidePolygon(point, polygon) {
  var latitude = point[0],
    longitude = point[1];

  var inside = false;
  for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    var xi = polygon[i][0];
    var yi = polygon[i][1];
    var xj = polygon[j][0];
    var yj = polygon[j][1];

    var intersect =
      yi > longitude != yj > longitude &&
      latitude < ((xj - xi) * (longitude - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
}

module.exports = insidePolygon;
