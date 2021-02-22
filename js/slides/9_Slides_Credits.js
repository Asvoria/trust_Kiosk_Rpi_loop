SLIDES.push({
	id: "credits",
	onstart: function(self){	
		self.add({ id:"bg", type:"Background", color:"#222" });

		// Circular Wordbox
		self.add({
			id:"text", type:"TextBox",
			x:0, y:35, width:960, height:400, align:"center",
			text_id:"credits", color:"#fff"
		});
		
		// Button
		self.add({
			id:"button", type:"Button", x:615, y:481, 
			text_id:"conclusion_btn", size:"long",
			message:"slideshow/scratch"
		});
	}
});
