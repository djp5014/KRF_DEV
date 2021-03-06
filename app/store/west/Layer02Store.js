Ext.define('KRF_DEV.store.west.Layer02Store', {
	
	extend: 'Ext.data.TreeStore',
	autoLoad: true,

	constructor: function(params1){
		console.log("@@params1@@");
		console.info(params1);
		console.log("@@params1@@");
		load(params1);
		this.callParent();
	}
});
	

// beforeload, load, afterload
//beforeload: function(params1) {
 function load(params1) {
	 
	 	console.log("@@params1@~!@@");
		console.info(params1);
		console.log("@@params1@~!@@");

var queryTask = new esri.tasks.QueryTask('http://112.217.167.123:6080/arcgis/rest/services/reach/MapServer'); // 레이어 URL
var query = new esri.tasks.Query();
query.returnGeometry = false;
query.where = "권역 = '한강권역'";
query.outFields = ["*"];

queryTask.execute(query, function(result){
	
	var jsonStr = "[";
	
	Ext.each(result.layers, function(objLayer, idx, objLayers){
		// 상위 node일때
		if(objLayer.parentLayerId == -1){
			jsonStr += "{\n";
			jsonStr += "	\"id\": \"" + objLayer.id + "\",\n";
			jsonStr += "	\"text\": \"" + objLayer.name + "\",\n";
			jsonStr += "	\"cls\": "+'"'+"khLee-x-tree-node-text-bold"+'"'+",\n";
			jsonStr += "	\"iconCls\": 'layerNoneImg',\n";
			jsonStr += "	\"checked\": true,\n";
			
			// children node가 있을때
			if(objLayer.subLayerIds != null){
				jsonStr += "	\"expanded\": true,\n"; // 펼치기..
				jsonStr += "\n	\"children\": [";
				for(i = 0; i < objLayer.subLayerIds.length; i++){
					jsonStr += "{\n";
					jsonStr += "		\"id\": \"" + objLayers[objLayer.subLayerIds[i]].id + "\",\n";
					jsonStr += "		\"text\": \"" + objLayers[objLayer.subLayerIds[i]].name + "\",\n";
					jsonStr += "		\"cls\": "+'"'+"khLee-x-tree-node-text-small-nounder"+'"'+",\n";
					jsonStr += "		\"iconCls\": "+'"'+"layerIconSize layer"+objLayers[objLayer.subLayerIds[i]].id+'"'+",\n";
					jsonStr += "		\"leaf\": true,\n";
					jsonStr += "		\"checked\": true\n";
					jsonStr += "	}, ";
					if(i == objLayer.subLayerIds.length - 1){
						jsonStr = jsonStr.substring(0, jsonStr.length - 2); // 마지막에 "," 빼기
						jsonStr += "]\n}, ";
					}
				}
			}
			// children node가 없을때
			else{
				jsonStr += "	\"leaf\": true"; 
				jsonStr += "\n}, "
			}
		}
		
	});
	
	jsonStr = jsonStr.substring(0, jsonStr.length - 2); // 마지막에 "," 빼기
	jsonStr += "]";
	
	
	
	//console.log("##1##");
	//console.info(jsonStr);
	//console.log("##1##");
	//store.setData(JSON.parse(jsonStr));
	var bbb = JSON.parse(jsonStr);
	console.log("Bbb");
	console.info(bbb);
	
	
});



//this.setData(Ext.JSON.decode(jsonStr));

dojo.connect(queryTask, "onError", function(err) {
	alert(err);
});

//this.callParent();
}



	
