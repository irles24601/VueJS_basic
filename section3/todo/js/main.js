new Vue({
  el: '#app',
  data: {
  	newItem: '',
    todos: []
  },
  methods: {
  	addItem: function(event){
      // alert();
      // newItemが空ならその後の処理を行わない
      if(this.newItem == '') return;

      // todoにnewItemを追加する
      var todo = {
      	item: this.newItem,
        isDone: false
      };
      this.todos.push(todo);

      // 追加後のインプット欄を空にする
      this.newItem = '';
    },
    deleteItem: function(index){
      // alert(index);
      this.todos.splice(index, 1);
    }
  }
})