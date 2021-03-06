Ext.define('KRF_DEV.view.north.North', {
	
	xtype: 'app-default-north',
	
	//extend: 'Ext.panel.Panel',
	extend: 'Ext.toolbar.Toolbar',
	
	requires: [
	    'KRF_DEV.view.north.NorthController'
   ],
	
	controller: 'north',
	
	//padding: 10,
	
	height: 64,
	
	//padding: 0,
	
	cls: 'x-toolbar-default-north-khLee',
	
	layout: {
		type: 'hbox',
		align: 'middle'
	},
	
	items: [{
		xtype: 'container',
		width: 20
	}, {
		xtype: 'image',
		id: 'top-logo-khLee',
		width: 534,
		height: 37,
		//cls: 'khLee-x-box-item',
		src: './resources/images/button/top_logo.png'
	}, {
		xtype: 'container',
		layout: {
			type: 'hbox',
			align: 'middle',
			pack: 'end'
		},
		cls: 'khLee-x-north-right',
		flex: 1,
		items: [{
			xtype: 'image',
	    	title: '지리정보',
	    	listeners: {
	    		el: {
	    			click: 'onButtonClick'
	    		}
	    	},
	    	params: {title: '지리정보', contents: '지리정보 클릭', msgBox: 'alert'},
	    	src: './resources/images/button/top_btn1_off.png'			
		}, {
			xtype: 'image',
	    	title: '데이터',
	    	listeners: {
	    		el: {
	    			click: 'onButtonClick'
	    		}
	    	},
	    	params: {title: '데이터', contents: '데이터 클릭', msgBox: 'alert'},
	    	src: './resources/images/button/top_btn2_off.png'
		}, {
			xtype: 'image',
	    	title: '로그아웃',
	    	listeners: {
	    		el: {
	    			click: 'onButtonClick'
	    		}
	    	},
	    	params: {title: '로그아웃', contents: '로그아웃 클릭', msgBox: 'alert'},
	    	src: './resources/images/button/top_btn3_off.png'
		}, {
			xtype: 'container',
			width: 50
		}]
	}]
  
});