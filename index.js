
  // Polyfill
  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  }
  
  var innerContainer = document.getElementById( "innerContainer" );
  
  function toggleAnimation( classname ) {
    var classes = classname;
	if( classes.indexOf( "animate" ) != -1 ){
		 classes = classes.replace( "animate", "");
	} else {
		classes = classes + " animate";
	}
	return classes.trim();
  }
  
  function handler( e ) {
	  console.log( "clicked" );  
	  let children = Array.prototype.slice.call( e.target.children );
	  children.map( function( child ) {
		  // console.log( "Before: " + child.className );
		  child.className = toggleAnimation( child.className );
		  // console.log( "After: " + child.className );
	  })
	  
  }

innerContainer.addEventListener( "click", handler, false );