var _testUrl = null;
var _serviceUrl = null;

var store = Ext.create('Ext.data.Store', {
	autoLoad: true,
	
	fields: [{
		name: 'MapserviceUrl'
	}],

	proxy: {
		type: 'ajax',
		url: './resources/data/AppVariable.json',
		reader: {
			type: 'json'
		}
	},
	
	listeners: {
		beforeload: function(a, b, c){
			//console.info(this.data.record);
			_testUrl = "sss";
		}
	}
});

store.load(function(a, b, c){
	this.each(function(record, cnt, totCnt){
		//console.info(record);
		if(record.id == "ServiceUrl"){
			_serviceUrl = record.data;
			console.info(_serviceUrl);
		}
	});
	console.info(_serviceUrl);
});

/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'KRF_DEV',

    //extend: 'KRF_DEV.Application',
    
    autoCreateViewport: 'KRF_DEV.view.main.Main',
    
    arcServiceUrl:'http://112.217.167.123:6080/arcgis',
    //arcServiceUrl:'http://fireftp.iptime.org:6080/arcgis',
    layer1Url: 'http://112.217.167.123:6080/arcgis/rest/services/reach/MapServer/',
    //layer1Url: 'http://fireftp.iptime.org:6080/arcgis/rest/services/drone/MapServer',
    //requires: ['Ext.chart.Chart'],
    
    stores: [
        'KRF_DEV.store.south.PrototypeGrid'
 		/*'KRF_DEV.store.dev_test.GridStoreTest',
 		'KRF_DEV.store.dev_test.WestTabLayerStore',
 		'KRF_DEV.store.west.WestTabSearch_ADM_GRID'*/
 	],
 	
 	launch: function(){
 		
 		Ext.WestTabChange = function(tabIdx){
 			var westContents = Ext.getCmp("westContents");
 			westContents.setActiveItem(tabIdx);
 		}
 		
 		//Ext.WestTabChange(1);
 		
 		// 이미지 on/off
 		Ext.SetSrc = function(currCtl){
 			var parentCtl = currCtl.findParentByType('container');
 			var items = parentCtl.items.items;
 			var groupCnt = 0;
 			
 			for(i = 0; i < items.length; i++){
 				if(currCtl.groupId == items[i].groupId){
 					var srcPath = items[i].src;
 					
 					if(currCtl != items[i]){
 						items[i].setSrc(srcPath.replace("_on", ""));
 					}
 					
 					groupCnt++;
 				}
 			}
 			
 			if(groupCnt > 1){
 				if(currCtl.src.indexOf("_on") == -1)
					currCtl.setSrc(currCtl.src.replace(".png", "_on.png"));
 			}
 			else{
				if(currCtl.src.indexOf("_on") == -1)
					currCtl.setSrc(currCtl.src.replace(".png", "_on.png"));
				else
					currCtl.setSrc(currCtl.src.replace("_on.png", ".png"));
 			}
 		}
 		
 		var listWinCtl = null;
 		var infoWinCtl = null;
 		
 		// 지점 목록 창 띄우기
 		Ext.ShowSiteListWindow = function(searchText){
 			
 			if(Ext.getCmp("btnModeNomal").src.indexOf("_on") > -1){
 				listWinCtl = Ext.getCmp("siteListWindow");
 	 			
 				if(listWinCtl == undefined)
 					listWinCtl = Ext.create('KRF_DEV.view.east.SiteListWindow');
 				
 				listWinCtl.show();
 				
 				var listWinX = Ext.getBody().getViewSize().width - listWinCtl.width;
 				var listWinY = 98;
 				
 				listWinCtl.setX(listWinX);
 				listWinCtl.setY(listWinY);
			}
			else{
				listWinCtl = Ext.getCmp("siteListWindow_reach");
	 			
				if(listWinCtl == undefined)
					listWinCtl = Ext.create('KRF_DEV.view.east.SiteListWindow_Reach');
				
				listWinCtl.show();
				
				var listWinX = Ext.getBody().getViewSize().width - listWinCtl.width;
				var listWinY = 98;
				
				listWinCtl.setX(listWinX);
				listWinCtl.setY(listWinY);
			}
			
 		}
 		
 		// 지점 목록 창 닫기
 		Ext.HideSiteListWindow = function(currCtl){
 			
 			listWinCtl = Ext.getCmp("siteListWindow");
 			
 			if(listWinCtl != undefined)
 				listWinCtl.close();
 			
			listWinCtl = Ext.getCmp("siteListWindow_reach");
 			
 			if(listWinCtl != undefined)
 				listWinCtl.close();
			
 		}
 		
 		// 지점 정보 창 띄우기
 		Ext.ShowSiteInfoWindow = function(siteId){
 			
 			infoWinCtl = Ext.getCmp("siteInfoWindow");
 			
			if(infoWinCtl == undefined)
				infoWinCtl = Ext.create('KRF_DEV.view.east.SiteInfoWindow');
			
			infoWinCtl.show();
			
			//console.info(infoWinCtl.visible);
			
			var infoWinX = Ext.getBody().getViewSize().width - infoWinCtl.width;
			if(listWinCtl != null && listWinCtl != undefined){
				infoWinX = infoWinX - listWinCtl.width;
			}
			var infoWinY = 98;
			
			infoWinCtl.setX(infoWinX);
			infoWinCtl.setY(infoWinY);
			
 		}
 		
 		// 지점 정보 창 닫기
 		Ext.HideSiteInfoWindow = function(){
 			
 			var infoWinCtl = Ext.getCmp("siteInfoWindow");
 			
			if(infoWinCtl != undefined)
				infoWinCtl.hide();
			
 		}
 		
 		// 차트정보창 띄우기
 		Ext.ShowChartResult = function(siteId, title){
 			
 			var chartWinCtl = Ext.getCmp("chartWindow");
			
			if(chartWinCtl == undefined)
				chartWinCtl = Ext.create("KRF_DEV.view.east.ChartWindow");
			
			chartWinCtl.show();
			
			var chartWinX = Ext.getBody().getViewSize().width - chartWinCtl.width;
			var chartWinY = 388;
			
			chartWinCtl.setX(chartWinX);
			chartWinCtl.setY(chartWinY);
 			
 		}
 		
 		// 차트정보창 닫기
 		Ext.HideChartResult = function(){
 			
 			var chartWinCtl = Ext.getCmp("chartWindow");
			
			if(chartWinCtl != undefined)
				chartWinCtl.hide();
 			
 		}
 		
 		// 검색결과창 띄우기
 		Ext.ShowSearchResult = function(tabId, title){
 			console.info(tabId);
 			var tabCtl = Ext.getCmp(tabId);
 			
 			if(tabCtl == undefined){ 			
	 			Ext.create('KRF_DEV.view.common.Window', {
	 				params: {
	 					xtype: 'south-grid-prototype',
	 					id: tabId,
	 					title: title
	 				}
	 			});
 			}
 			else{
 				var tabContainer = Ext.getCmp("datawindow-tabpanel");
 				if(tabContainer != undefined){
 					tabContainer.setActiveTab(tabCtl);
 				}
 			}
 			
 			var winContainer = Ext.getCmp("datawindow-container");
 			winContainer.setTitle(title);
 			winContainer.show();
 			//winContainerY = Ext.getBody().getViewSize().height - winContainer.height;
 			//winContainer.setY(winContainerY);
 			
 		}
 		
 		// 검색결과창 닫기
 		Ext.HideSearchResult = function(){
 			
 			var winContainer = Ext.getCmp("datawindow-container");
 			
 			if(winContainer != undefined)
 				winContainer.close();
 			
 		}
 		
 		var rToolbar = Ext.create('KRF_DEV.view.center.ReachToolbar', {
			region: 'north',
			cls: 'khLee-x-reachtoolbar khLee-x-reachtollbar-default khLee-x-box-target'
		})
 		
 		Ext.ShowReachToolbar = function(evtArgs, el){
 			
			var cContainer = Ext.getCmp("center_container");
			cContainer.add(rToolbar);
			
 		}
 		
 		Ext.HideReachToolbar = function(){
 			var cContainer = Ext.getCmp("center_container");
 			cContainer.remove(rToolbar, false);
 		}
 		
 	}
});
