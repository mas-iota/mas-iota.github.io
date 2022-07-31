---
id: geodata
title: GeoData
sidebar_label: GeoData
keywords:
  - buildfire
  - geodata
  - geo
  - data
  - geojson
  - geospatial
  - geolocation
slug: /geodata
---

# GeoData

`GeoData` is a service to help developers to manipulate and handle geospatial data properly. Whenever you want to save geospatial data and query operations (nearest location) on it, `GeoData` is the right way to do it. All methods are accessible in [`publicData`](/docs/public-data), [`userData`](/docs/user-data) and [App Data](/docs/app-data), but you will need to pay attention to pass the **Geospatial Data** in the right structure.

## Inserting Geolocation Data

This is the most important part, because the rest will follow like any other type of data. So when you insert the geospatial data you need to put it like the below JSON structure:

```json
{
  "_buildfire": {
    "geo": {
      "type": "<GeoJSON type>",
      "coordinates": ["<longitude>", "<latitude>"]
    }
  }
}
```

Available **GeoJSON** types :

- **`Point`**
- **`MultiPoint`**
- **`LineString`**
- **`MultiLineString`**
- **`Polygon`**
- **`MultiPolygon`**
- **`GeometryCollection`**

:::warning important
Please note that we will save whatever data you provide, even if it didn't follow the above JSON structure. This might break the GEO functionality, thus it won't work as expected.
:::

---

## Insert Example

```javascript
function addNewLocation(location) {
  buildfire.publicData.insert(location, "places", false, function (err, data) {
    if (err) console.log("there was a problem saving your data");
    else console.log("saved successfully");
  });
}

var geoLocation = {
  _buildfire: {
    geo: {
      type: "Point",
      coordinates: [-73.97, 40.77],
    },
  },
};

addNewLocation(geoLocation);
```

---

## Search Example

The following query uses the **`$near` geospatial query operator** to return documents that are at least 1000 meters from and at most 5000 meters from the specified `GeoJSON` point, sorted in order from nearest to farthest:

```javascript
function addNewLocation(location) {
  buildfire.publicData.insert(location, "places", false, function (err, data) {
    if (err) alert("there was a problem saving your data");
    else alert("saved successfully");
  });
}

var place_1 = {
  _buildfire: {
    geo: {
      type: "Point",
      coordinates: [-73.97, 40.77], //[long,lat]
    },
  },
};

var place_2 = {
  _buildfire: {
    geo: {
      type: "Point",
      coordinates: [-73.9928, 40.7193], //[long,lat]
    },
  },
};

var place_3 = {
  _buildfire: {
    geo: {
      type: "Point",
      coordinates: [-73.9375, 40.8303], //[long,lat]
    },
  },
};

addNewLocation(place_1);
addNewLocation(place_2);
addNewLocation(place_3);

/*
The following query uses the $near operator to return documents that are at least 1000 meters from and at most 5000 meters from the specified GeoJSON point
*/

var searchUsingNear = {
  filter: {
    "_buildfire.geo": {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [-73.9667, 40.78], //[long,lat]
        },
        $minDistance: 1000,
        $maxDistance: 5000,
      },
    },
  },
};

/*
This should only returns "Place 1" because the distance between them is 1147 Meters, which is between the min & max distance in filter
*/

buildfire.publicData.search(searchUsingNear, "places", function (err, records) {
  if (err) alert("there was a problem retrieving your data");
  else {
    alert("found " + records.length + " record(s)");
    alert(JSON.strigify(records.length));
  }
});

/*
NOTE:
  1. Distance between the coordinates in filter and place 1 is "1147 Meters"
  2. Distance between the coordinates in filter and place 2 is "7101 Meters"
  3. Distance between the coordinates in filter and place 3 is "6111 Meters"
*/

/*
The following query uses the $geoWithin operator to selects all Places data that exist entirely within a GeoJSON Polygon.

IMPORTANT: Please note that Polygon has to close (the first and last point must be the same).
*/

var searchUsingGeoWithin = {
  filter: {
    "_buildfire.geo": {
      $geoWithin: {
        $geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-73.9634036, 40.8247236],
              [-73.9098452, 40.7878222],
              [-73.9894961, 40.6790779],
              [-74.046831, 40.7040684],
              [-73.96342, 40.8247071],
              [-73.9634036, 40.8247236],
            ],
          ],
        },
      },
    },
  },
};

buildfire.publicData.search(
  searchUsingGeoWithin,
  "places",
  function (err, records) {
    if (err) alert("there was a problem retrieving your data");
    else {
      alert("found " + records.length + " record(s)");
      alert(JSON.strigify(records.length));
    }
  }
);

/*
The following query uses the $geoWithin operator to select all Places data that intersect with the Polygon defined by the coordinates array.
*/

var searchUsingGeoIntersects = {
  filter: {
    "_buildfire.geo": {
      $geoIntersects: {
        $geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-73.9634036, 40.8247236],
              [-73.9098452, 40.7878222],
              [-73.9894961, 40.6790779],
              [-74.046831, 40.7040684],
              [-73.96342, 40.8247071],
              [-73.9634036, 40.8247236],
            ],
          ],
        },
      },
    },
  },
};

buildfire.publicData.search(
  searchUsingGeoIntersects,
  "places",
  function (err, records) {
    if (err) alert("there was a problem retrieving your data");
    else {
      alert("found " + records.length + " record(s)");
      alert(JSON.strigify(records.length));
    }
  }
);
```

:::warning important
Please note that **Polygon** has to close (the first and last point must be the same).
:::

Available Geospatial query operators:

- **`$near`**: Returns geospatial objects in proximity to a point.
- **`$geoWithin`**: Selects geometries within a bounding GeoJSON geometry.
- **`$geoIntersects`**: Selects geometries that intersect with a GeoJSON geometry
- **`$nearSphere`**: Returns geospatial objects in proximity to a point on a sphere.
