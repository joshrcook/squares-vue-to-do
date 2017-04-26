var app = new Vue({
	el: '#app',
	data: {
		lists: [
			{
				title: 'Something', 
				isActive: true, 
				todos: [
					{
						title: 'Something',
						isComplete: false
					}
				]
			}, 
			{
				title: 'Something else', 
				isActive: false, 
				todos: []
			}
		]
	}, 
	computed: {
		activeList: function() {

		},
		activeLists: function() {
			return this.lists.filter( function( list ) {
				return list.isActive;
			});
		}
	},
	methods: {
		activateList: function( listIndex ) {
			for( var i = 0; i < this.lists.length; i++ ) {
				this.lists[i].isActive = ( listIndex === i ) ? true : false ;
			}
		}, 
		addList: function() {
			this.lists.push( {
				title: 'Untitled List', 
				isActive: false,
				todos: []
			});
			this.activateList( this.lists.length - 1 );
		}
	}
});