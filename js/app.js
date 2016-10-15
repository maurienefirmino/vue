
var app = new Vue({
	el:"#app",
	data:{
		books:[],
		MySeach:''
	},
	methods:{},
	ready: function(){
		var self = this;

		self.$http.get('http://localhost:8000',{'Accept':'application/json'},{"X-Requested-With": "XMLHttpRequest"},{"Access-Control-Allow-Origin": "*"
}).then(function(res){
			self.books = res.data;
			console.log(res.data.headers);
		});
	}
});