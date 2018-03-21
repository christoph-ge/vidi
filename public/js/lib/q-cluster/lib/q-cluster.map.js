{"version":3,"file":"lib/q-cluster.min.js","sources":["clustering.js","point-clusterer.js","make-donuts.js","utils.js"],"names":["QCluster","module","addPinsWithinRange","points","index","direction","currentCluster","resolution","tolerance","clusterwidth","finished","searchindex","pMax","xDis","yDis","length","c","Math","abs","x","y","push","clusterPoints","mapBounds","clusterTolerance","withinBounds","xmin","xmax","ymin","ymax","ctr","clusters","pLength","i","id","xSum","ySum","cX","cY","j","iMax","k","kMax","moreThanOneCluster","getBufferedMercatorMapBounds","bounds","edgeBuffer","mapEdgeBuffer","L","CRS","EPSG3857","project","_southWest","_northEast","getResolution","leafletMap","mapWidth","getSize","sortGeoRef","a","b","georef","geodeticToGeoRef","longitude","latitude","precision","convertMinutesToString","minutes","divisor","min","minLength","padding","minStr","pow","floor","toString","long_min","lat_min","origin_long","origin_lat","division1Lng","division2Lng","division1Lat","division2Lat","LATITUDE_LOW","LATITUDE_HIGH","LONGITUDE_LOW","LONGITUDE_HIGH","MIN_PER_DEG","GEOREF_MINIMUM","GEOREF_MAXIMUM","GEOREF_LETTERS","MAX_PRECISION","LETTER_I","LETTER_M","LETTER_O","LETTER_Q","LETTER_Z","LETTER_A_OFFSET","ZERO_OFFSET","QUAD","ROUND_ERROR","ABC","letter_number","GEOREFString","PI","ceil","webMercToGeodetic","mercatorY","mercatorX","lng","lat","console","error","atan","exp","processGeoJson","geoJson","features","Array","concat","Object","keys","err","key","pointData","feature","pointObj","properties","geometry","coordinates","webMerc","latLng","$","extend","sort","processPointArray","pointArr","len","PointClusterer","layerId","map","clusterCssClass","opts","options","pointArrLength","this","clickHandler","defaultClickHandler","mouseoverHandler","defaultMouseoverHandler","mouseoutHandler","defaultMouseoutHandler","backgroundColor","dataFormat","toLowerCase","pointIdProperty","Utils","HypotenuseOfMapAsInt","layerVisibility","reportingProperty","reportingDictionary","defaultPalette","mapOrder","reportingValueNA","color","label","donutIRFrac","activeCluster","makeClusters","on","mapMove","removeIndicatorPoints","prototype","layer","clusterArr","clusterDictionary","cnt","divHtml","divClass","myIcon","clusterMarker","classificationIds","webMercMapBounds","clusterLength","clusterMarkers","lats","lngs","_container","is","removeLayer","getBounds","split","divIcon","className","html","lngLat","marker","icon","round","n","idProperty","jMax","featureGroup","addLayer","css","makeDonuts","markActiveCluster","_layers","latlng","_latlng","_icon","toggleClass","removeActiveCluster","off","replaceLayer","e","clusterLayer","cluster","currentZoom","maxZoom","target","getMaxZoom","getZoom","getZoomScale","setView","mouseoverGroup","mouseoverCluster","layerGroup","p","prop","circle","CircleMarker","radius","fillOpacity","opacity","addTo","dataDictionary","tmpDataset","dataset","width","height","wrapper","pie","arc","svg","path","reportingArr","rId","numReportingCtr","hasOwnProperty","count","alias","mergedOther","d3","layout","innerRadius","outerRadius","select","append","attr","selectAll","data","dataObjArr","dataArr","pieData","enter","d","utils","FacetColorLibrary","facetId","facetName","facetValues","propMap","colorPalette","maxColors","otherColor","facet","name","values_keyVal","values_arr","_","each","fVal","facetValue","el","getContainer","w","h","sqrt"],"mappings":"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"}