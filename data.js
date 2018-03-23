'use strict';
/*module.exports = function(){*/
	var fs = require('fs'),
        xlsx = require('node-xlsx').default,
    	readObj = {};

    //验证读取的xlsx与我自己定义的模板是一致的，col指有几列，row指有几行，arrInfo指列的元素组成
    var  workSheetsFromFile = xlsx.parse('./data/newGoods.xlsx'),
         dataObj = workSheetsFromFile[0].data;
    readObj.verifyInfo = function(num,arrInfo){
	    
    	if(dataObj[0].length != num) {
    		throw('列数不对');
    		return;
    	}
    	console.log(dataObj[0]);
    	for(var i in arrInfo){
    		if(dataObj[0][i] != arrInfo[i]) {
    			throw('元素不匹配');
    			return;
    		}
    		//console.log(dataObj[0][i]);
    	}    
    }

    readObj.getData = function(Obj) {
    	var i = 0;
    	for(var key in Obj) {
    		Obj[key] = dataObj[0][i];
    		i++;
    		console.log(Obj[key]);
    	}

    }
    var arrinfo = ['商品名','商品分类','主单位','商品品牌','换算关系','辅单位','起订量','销售价格','备注'];
	var goodsObj = {
	    goodsName:'',
	    firstClassification : undefined,
	    wholeSaleUnit : undefined,
	    goodgBrand: undefined,
	    converRelationship : undefined,
	    retailUnit : undefined,
        baseSale : undefined,
        salePrice : undefined,
        preScript : undefined
	  };

    readObj.verifyInfo(9,arrinfo);
    readObj.getData(goodsObj);

        

    


/*}*/


