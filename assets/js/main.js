var vm = new Vue({
	el: '#app',
	data: {
		lists: [
			{
				title: 'To Do', 
				isActive: true,
				isEditing: false,
				todos: [
					{
						title: 'Todo 1',
						isCompleted: false, 
						isEditing: false
					}, 
					{
						title: 'Todo 2', 
						isCompleted: false, 
						isEditing: false
					}
				]
			}, 
			{
				title: 'New Todo list',
				isActive: false,
				isEditing: false,
				todos: []
			}
		]
	}, 
	watch: {
		lists: {
			handler: function() {
				// save the data
			}, 
			deep: true
		}
	},
	computed: {
		activeLists: function() {
			return this.lists.filter( function( list ) {
				return list.isActive;
			});
		}
	},
	methods: {
		setActiveList: function( listIndex ) {
			console.log( event );
			console.log( 'I clicked on ' + listIndex );
			for( var i = 0; i < this.lists.length; i++ ) {
				if( i === listIndex ) {
					this.lists[i].isActive = true;
				} else {
					this.lists[i].isActive = false;
				}
			}
		}, 
		addNewList: function() {
			var length = this.lists.push({
				title: 'Untitled List',
				isActive: false,
				isEditing: false,
				todos: []
			});
			this.setActiveList( length - 1 );
		}, 
		addNewTodo: function() {
			this.activeLists[0].todos.push({
				title: '',
				isCompleted: false, 
				isEditing: true
			});
		}, 
		deleteList: function( listIndex ) {
			console.log( 'deleted list index' );
			this.setActiveList( this.lists.length - 1 );
		}
	}, 
	mounted: function() {
		var $this = this;
		jQuery( function( $ ) {
			$( $this.$el );
		});
	}
});













