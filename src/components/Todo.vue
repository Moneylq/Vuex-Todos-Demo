<template>
	<div id="app">
		<header>
			<h1>Hello Todos！</h1>
			<input placeholder="请输入内容..." v-model="todoTitle" @keyup.enter="addTodo">
		</header>
		<section v-show="todos.length">
			<li v-for="todo in todos">
				<!-- {{ todo.id }}
				<br/> -->
				{{ todo.title }}
			<!-- 	<br/>
				{{ todo.done }}	 -->
				<button @click="delTodo(todo)">删除</button>			
			</li>			
		</section>
	</div>
</template>
<script>
	export default {
		name:'todo',
		data() {   
			return {
				todoTitle: '',
				error:''
			}
		},
		computed: {
			todos() {
				return this.$store.state.todos
			}
		} ,
		methods:{
			addTodo: function() 
			{
				if(this.todoTitle != '')
				{
				  //1.往后台post
				  this.$http.post('http://localhost:3000/todos',
				  {
				  	"title":this.todoTitle,
				  	"done":false
				  }).then((response) =>{
				      	//2.有结果返回后，返回的数据提交到state
				      	this.$store.commit('addTodo',response.body)
				      	this.todoTitle=''				   	
				      },(response) => {
				      	this.error = response.error
				      });
				}
			},  
			delTodo: function(todo) {
				this.$store.commit('delTodo',{todo:todo})
			}
		}
	}

</script>