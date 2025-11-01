var posts=["2025/10/23/hexo使用技巧/","2025/10/29/linux常用指令/","2025/10/26/lingo使用指南/","2025/10/26/六级备考/","2025/10/23/天气数据分析处理/","2025/10/28/气象局使用注意事项/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };