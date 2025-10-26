var posts=["2025/10/23/hexo使用技巧/","2025/10/26/lingo使用指南/","2025/10/23/半小时代码处理/","2025/10/26/六级备考/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };