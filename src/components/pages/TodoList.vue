<template>
  <div class="todo">
    <h1>Страница с постами</h1>
    <div class="todo__btns">
      <my-button
        style="margin: 15px 0;"
        @click="showDialoge">
        Создать пост
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
      @create="createPost"/>
    </my-dialog>
    <post-list 
      :posts="posts"
      @remove="removePost"
      v-if="!isPostsLoading"/>
      <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from '../PostForm.vue';
import PostList from '../PostList.vue';
import MyDialog from '../UI/MyDialog.vue';
import MyButton from '../UI/MyButton.vue';
import axios from 'axios';

export default {
  components: {
    PostForm,
    PostList,
    MyDialog,
    MyButton,
  },
  data() {
    return {
      posts: [ ],
      dialogVisible: false,
      isPostsLoading: false, 
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержанию'},
      ]
    }
  },
  methods: {
   createPost(post) {
   this.posts.push(post);
   this.dialogVisible = false; 
   },
   removePost(post) {
    this.posts = this.posts.filter(p => p.id !== post.id)
   },
   showDialoge() {
    this.dialogVisible = true; 
   },
   async fetchPost() {
    try {
      this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
    } catch (e) {
      alert('Ошибка')
    } finally {
      this.isPostsLoading = false;
    }
   }
  },
mounted() {
    this.fetchPost();
   },
   watch: {
    selectedSort(newValue) {

    }
   }
}
</script>

<style scoped>
.todo {
  padding: 20px;
}

.todo__btns {
  display: flex; 
  margin: 15px 0;
  justify-content:space-between;
  align-items: center;
}
</style>