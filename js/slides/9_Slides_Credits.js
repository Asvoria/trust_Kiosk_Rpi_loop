SLIDES.push({
	id: "credits",
	onstart: function(self){	
		self.add({ id:"bg", type:"Background", color:"#222" });
		
		self.add({
			id:"credits_btn_k", type:"Button", x:382, y:470, size:"long"
			text_id:"testing",
			active:true
		});

		// Circular Wordbox
		self.add({
			id:"text", type:"TextBox",
			x:0, y:35, width:960, height:400, align:"center",
			text_id:"credits", color:"#fff"
		});
		
		
	}
});
