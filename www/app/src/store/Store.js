const store = () => {
  
  const dataStore = {};
  const addData = (key, data) => {
    dataStore[key] = data;

    console.log("--------------------------------------------------");
    console.log(dataStore);
    console.log("--------------------------------------------------");
  }

  const getDataByKey = (key) => {
    return dataStore[key];
  }

  const findMovieById = (_id) => {
    const moviesList = dataStore['movies'].docs;
    return moviesList.find(value => value._id === _id);
  }

  const searchMovies = (search) => {
    const moviesList = dataStore['movies'].docs;

    search = search.toLowerCase();

    const result = moviesList.filter(function(value) {
      let { title, category, actors, director, production } = value;

      if (title.toLowerCase().indexOf(search) !== -1) return true;
      else if (category.toLowerCase().indexOf(search) !== -1) return true;
      else if (actors.toLowerCase().indexOf(search) !== -1) return true;
      else if (director.toLowerCase().indexOf(search) !== -1) return true;
      else if (production.toLowerCase().indexOf(search) !== -1) return true;

      return false;
    });
    
    return {"docs": result};
  }




    const posts = ['post 1'];
    const postsSubscribers = [];
  
    const addPost = (post) => {
      posts.push(post);
  
      callPostsSubscribers();
    }
  
    const removePost = () => {
      posts.pop();
      callPostsSubscribers();
    }
  
    const getPosts = () => {
      return posts;
    }
  
    const callPostsSubscribers = () => {
      postsSubscribers.forEach((subscriber) => {
        subscriber(posts);
      });
    }
  
    const subscribePosts = (cb) => {
      cb(posts);
      postsSubscribers.push(cb);
    }
  
    return {
      addData,
      getDataByKey,
      findMovieById,
      searchMovies,


      addPost,
      getPosts,
      subscribePosts,
      removePost
    }
  };

  export {
      store
  }