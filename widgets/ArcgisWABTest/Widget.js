define([
  "esri/geometry/Point",
  "esri/Color",
  "esri/symbols/SimpleFillSymbol",
  "esri/SpatialReference",
  "dojo/_base/lang",
  "esri/tasks/query",
  "esri/tasks/QueryTask",
  'dojo/dom',
  'dojo/_base/declare',
  'jimu/BaseWidget'],
  function(
    Point,
    Color,
    SimpleFillSymbol,
    SpatialReference,
    lang,
    Query,
    QueryTask,
    dom,
    declare, 
    BaseWidget) {

    return declare([BaseWidget], {


      baseClass: 'jimu-widget-WABTest',

      cargaConcellos: function(){
        console.log('cargaConcellos')

        const seleccionProvincia = dom.byId('selectProvincia')
        // const valorSelectProv = seleccionProvincia.text; //no funciona ni recoge nada?¿
        const valorSelectConcello = seleccionProvincia.value;
        // console.log('.text:',valorSelectProv)
        // console.log('.value',valorSelectConcello)

        console.log('select',valorSelectConcello)
        if (valorSelectConcello == -1) {
          const divConcellos = dom.byId('concellos')
          divConcellos.style.display = "none";
        };
        if (valorSelectConcello == 15){
          const queryTask = new QueryTask(this.config.concellosService); 
          
          const query = new Query(); 
          query.outFields = ["CODCONC", "CONCELLO"]; 
          query.where = `CODPROV = ${valorSelectConcello}`

          queryTask.execute(query, lang.hitch(this, function(results){
            console.log('resultadosQuery: ', results)
            opt = document.createElement("option"); 
            opt.value = '-1'; 
            opt.innerHTML = "Selecciona un concello"; 
            this.listaConcellos.add(opt); 

            for (var i = 0; i < results.features.length; i++) {
              opt = document.createElement("option"); 
              opt.value = results.features[i].attributes.CODCONC;
              opt.innerHTML = results.features[i].attributes.CONCELLO;
              this.listaConcellos.add(opt);
            }

            const divConcellos = dom.byId('concellos')
            divConcellos.style.display = "block";

          }))
        }
        if (valorSelectConcello == 27){
          const queryTask = new QueryTask(this.config.concellosService); 
          
          const query = new Query(); 
          query.outFields = ["CODCONC", "CONCELLO"]; 
          query.where = `CODPROV = ${valorSelectConcello}`

          queryTask.execute(query, lang.hitch(this, function(results){
            console.log('resultadosQuery: ', results)
            opt = document.createElement("option"); 
            opt.value = '-1'; 
            opt.innerHTML = "Selecciona un concello"; 
            this.listaConcellos.add(opt); 

            for (var i = 0; i < results.features.length; i++) {
              opt = document.createElement("option"); 
              opt.value = results.features[i].attributes.CODCONC;
              opt.innerHTML = results.features[i].attributes.CONCELLO;
              this.listaConcellos.add(opt);
            }

            const divConcellos = dom.byId('concellos')
            divConcellos.style.display = "block";

          }))
        }
        if (valorSelectConcello == 32){
          const queryTask = new QueryTask(this.config.concellosService); 
          
          const query = new Query(); 
          query.outFields = ["CODCONC", "CONCELLO"]; 
          query.where = `CODPROV = ${valorSelectConcello}`

          queryTask.execute(query, lang.hitch(this, function(results){
            console.log('resultadosQuery: ', results)
            opt = document.createElement("option"); 
            opt.value = '-1'; 
            opt.innerHTML = "Selecciona un concello"; 
            this.listaConcellos.add(opt); 

            for (var i = 0; i < results.features.length; i++) {
              opt = document.createElement("option"); 
              opt.value = results.features[i].attributes.CODCONC;
              opt.innerHTML = results.features[i].attributes.CONCELLO;
              this.listaConcellos.add(opt);
            }

            const divConcellos = dom.byId('concellos')
            divConcellos.style.display = "block";

          }))
        }
        if (valorSelectConcello == 36){
          const queryTask = new QueryTask(this.config.concellosService); 
          
          const query = new Query(); 
          query.outFields = ["CODCONC", "CONCELLO"]; 
          query.where = `CODPROV = ${valorSelectConcello}`

          queryTask.execute(query, lang.hitch(this, function(results){
            console.log('resultadosQuery: ', results)
            let opt = document.createElement("option"); 
            opt.value = '-1'; 
            opt.innerHTML = "Selecciona un concello"; 
            this.listaConcellos.add(opt); 

            for (var i = 0; i < results.features.length; i++) {
              let opt = document.createElement("option"); 
              opt.value = results.features[i].attributes.CODCONC;
              opt.innerHTML = results.features[i].attributes.CONCELLO;
              this.listaConcellos.add(opt);
            }

            const divConcellos = dom.byId('concellos')
            divConcellos.style.display = "block";

          }))
        }
        

        this.listaConcellos.innerHTML =""; //esto borra todas las opciones y la capacidad de poder seleccionar otra vez...
        
      }, 

      cargaParroquias:function(){
        console.log('cargaParroquias')
        const seleccionConcello = dom.byId('selectConcello')
        console.log('selectConcelloNodo', seleccionConcello)
        // const valorSelectProv = seleccionProvincia.text; //no funciona ni recoge nada?¿
        const valorSelectParroquia = seleccionConcello.value;
        console.log('valorSelect:',valorSelectParroquia)

        if (valorSelectParroquia == -1){
          const divParroquias = dom.byId('parroquias')
          divParroquias.style.display = 'none';
        }
        if (valorSelectParroquia != -1){
          const queryTask = new QueryTask(this.config.parroquiasService); 
          
          const query = new Query(); 
          query.outFields = ["*"]; 
          query.where = `CODIGOINE = ${valorSelectParroquia}`

          queryTask.execute(query, lang.hitch(this, function(results){
            console.log('resultadosQueryParroquias: ', results)
            let opt = document.createElement("option"); 
            opt.value = '-1'; 
            opt.innerHTML = "Selecciona una Parroquia"; 
            this.listaParroquias.add(opt); 

            for (var i = 0; i < results.features.length; i++) {
              let opt = document.createElement("option"); 
              opt.value = results.features[i].attributes.CODPARRO;
              opt.innerHTML = results.features[i].attributes.PARROQUIA;
              this.listaParroquias.add(opt);
            }

            const divParroquias = dom.byId('parroquias')
            divParroquias.style.display = 'block';
          }))
        }
        this.listaParroquias.innerHTML ="";
      }, 

      zoomConcello: function(){

        this.map.graphics.clear()

        esriConfig.defaults.map.panDuration= 1500;// default panDuration: 350
        esriConfig.defaults.map.panRate = 1; // default panRate: 25
        esriConfig.defaults.map.zoomDuration = 1500; // default zoomDuration: 500
        esriConfig.defaults.map.zoomRate = 1; // default zoomRate: 25

        console.log('zoomConcello')

        const seleccionConcello = dom.byId('selectConcello')
        const valorSelectConcello = seleccionConcello.value;

        const queryTask = new QueryTask(this.config.concellosService); 

        const query = new Query(); 
        query.where = `CODCONC = ${valorSelectConcello}`; 
        query.returnGeometry = true;
        query.outSpatialReference = new SpatialReference(102100);

        queryTask.execute(query, lang.hitch(this, function(results){
          // console.log('queryZoomConcello:', results)
          // console.log('result.features:', results.features)
          // console.log('queryGeometry:', results.features[0])

          if (results.features.length > 0){

          let primerAnillo = new Point(results.features[0].geometry.rings[0][0], new SpatialReference(102100));

          let zoom = 10;

          this.map.centerAndZoom(primerAnillo,zoom) 

          let polygonSymbol = new SimpleFillSymbol();
          polygonSymbol.setColor(new Color([255, 127, 255, 0.7]));

          let resultFeatures = results.features;

          resultFeatures.forEach(feature => {

            feature.setSymbol(polygonSymbol);
            this.map.graphics.add(feature);

          });
          };

        }))
      }, 

      zoomParroquia: function(){
        console.log('zoomParroquia')

        this.map.graphics.clear()

        esriConfig.defaults.map.panDuration= 1500;// default panDuration: 350
        esriConfig.defaults.map.panRate = 1; // default panRate: 25
        esriConfig.defaults.map.zoomDuration = 1500; // default zoomDuration: 500
        esriConfig.defaults.map.zoomRate = 1; // default zoomRate: 25



        const seleccionParroquia = dom.byId('selectParroquia')
        const valorSelectParroquia = seleccionParroquia.value;
        console.log(valorSelectParroquia)

        const queryTask = new QueryTask(this.config.parroquiasService); 

        const query = new Query(); 
        query.where = `CODPARRO = ${valorSelectParroquia}`; 
        query.returnGeometry = true;
        query.outSpatialReference = new SpatialReference(102100);

        queryTask.execute(query, lang.hitch(this, function(results){
          console.log('queryZoomParroquia:', results)
          console.log('result.features:', results.features)
          console.log('queryGeometry:', results.features[0])

          if (results.features.length > 0){

          let punto = new Point(results.features[0].geometry.rings[0][0], new SpatialReference(102100));

          let zoom = 12;

          this.map.centerAndZoom(punto,zoom) 

          let polygonSymbol = new SimpleFillSymbol();
          polygonSymbol.setColor(new Color([255, 127, 255, 0.7]));

          let resultFeatures = results.features;

          resultFeatures.forEach(feature => {

            feature.setSymbol(polygonSymbol);
            this.map.graphics.add(feature);

          });
          };

        }))
      },

      //methods to communication with app container:

      postCreate: function() {
        this.inherited(arguments);
        console.log('postCreate')
      },

      // startup: function() {
      //  this.inherited(arguments);
      //  this.mapIdNode.innerHTML = 'map id:' + this.map.id;
      //  console.log('startup');
      // },

      // onOpen: function(){
      //   console.log('onOpen');
      // },

      onClose: function(){
        console.log('onClose');
        this.map.graphics.clear()

      },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });