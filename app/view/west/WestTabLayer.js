Ext.define('KRF_DEV.view.west.WestTabLayer', {
	
	extend: 'Ext.tab.Panel',
	
	xtype: 'app-westTabLayer',
	
	id: 'westTabLayer', // view.west.WestTabLayerController에서 사용
	
	requires: [
		'KRF_DEV.view.west.WestTabLayerController'
	],

	title: 'KRF 레이어',
	header: false,
	
	autoScroll: true,
	
	tabBar: {
        border: false
    },
    
    width: '100%',
    height: '100%',
    
    defaults: {
        textAlign: 'center',
        bodyPadding: 5
    },
	
	items: [{
		title: 'reach',
		xtype: 'treepanel',
		scroll: false,
		viewConfig: {
			style: { overflow: 'auto', overflowX: 'hidden' }
		},
		store : Ext.create('KRF_DEV.store.west.WestTabLayerStore1'),
		controller: 'westTabLayerController',
		id: 'DynamicLayer1', // view.map.DynamicLayerAdmin의 layer.id와 일치시키자..
		rootVisible: false,
		useArrows: true,
		border: 0,
		bufferedRenderer: false,
		height: Ext.getBody().getViewSize().height - 100 // size 조절기능 추가요함.
		//rowLines: true
	}/*, {
		title: 'Layer2',
		xtype: 'treepanel',
		store : Ext.create('KRF_DEV.store.west.WestTabLayerStore2'),
		controller: 'westTabLayerController',
		id: 'DynamicLayer2', // view.map.DynamicLayerAdmin의 layer.id와 일치시키자..
		rootVisible: false,
		useArrows: true,
		border: 0,
		bufferedRenderer: false
		//rowLines: true
	}*/]
});