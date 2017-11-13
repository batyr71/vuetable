new Vue({
	el: '#nakladnaya',
	data: {
		goods: [ 
			{name: "Товар 1", quantity: 8, price: 3.99, show: true}, 
			{name: "Товар 2", quantity: 6, price: 5.99, show: true},
			{name: "Товар 3", quantity: 5, price: 9.99, show: true} ],
	},

	computed: {

	},
	methods: {
		
		addGoods: 
			function() {
				this.goods.push({
					name: this.goods.name,
					quantity: this.goods.quantity,
					price: this.goods.price,
					show: true
				});
			},
		
		deleteGoods: function(index) {
			this.goods.splice(index, 1) 
		},
		
		editGoods: function(index) {
			this.goods[index].show = false
		},
		
		saveGoods: function(index) {
			this.goods[index].show = true
		},

		total: function () {
			var x = 0;
			for ( var i=0; i<this.goods.length; i++) {
				x = parseFloat(this.goods[i].price) + x; 		
			}
			return x;
		},

	}

});
