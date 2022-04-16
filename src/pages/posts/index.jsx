import './../../App.css'
import React, { useState, useEffect } from 'react'
//-------------компоненты страницы---------------
import PostsList from './postsList';
import PostsForm from './postsForm';
import PostsFilter from './postsFilter';
//------------UI компоненты-------------------
import MyModal from './../../components/UI/MyModal/MyModal';
import MyButton from './../../components/UI/button/MyButton';
import Loader from './../../components/UI/Loader/Loader';
import Pagination from './../../components/UI/pagination/Pagination';
//------------Остальное-----------------------------
import { usePosts } from '../../hooks/usePosts';
import PostService from './../../API/PostService';
import { useFetching } from '../../hooks/useFetching';
import { getPagesArray, getPagesCount } from './../../utils/pages';
import classes from './index.module.css'



function PostsPage() {
   const [posts, setPosts] = useState([])
   const [filter, setFilter] = useState({ sort: '', query: '' })
   const [modal, setModal] = useState(false)
   const [totalPages, setTotalPages] = useState(0)
   const [limit, setLimit] = useState(10)
   const [page, setPage] = useState(1)
   const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

   const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data)
      const totalCount = response.headers['x-total-count']
      setTotalPages(getPagesCount(totalCount, limit))
   })

   useEffect(() => { fetchPosts(limit, page) }, [])

   const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
   }

   const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
   }

   const changePage = (page) => {
      setPage(page)
      fetchPosts(limit, page)
   }

   return (
      <div className={classes.postsPage}>
         <MyModal visible={modal} setVisible={setModal}>
            <PostsForm create={createPost} />
         </MyModal>
         <PostsFilter filter={filter} setFilter={setFilter} />
         <div className={classes.createPostWrapper}>
            <MyButton onClick={() => setModal(true)}>
               Создать пост
            </MyButton>
         </div>
         {postError && <h1>Произошла ошибка ${postError}</h1>}
         {isPostsLoading ? <div className={classes.loaderContainer}><Loader /></div> : <PostsList remove={removePost} posts={sortedAndSearchedPosts} title='' />}
         <Pagination page={page} changePage={changePage} totalPages={totalPages} />
      </div>
   );
}

export default PostsPage;