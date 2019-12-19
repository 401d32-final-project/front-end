'use strict';


  async function fetchHeadlines(req, async, res){
    try{
    const newsData = await fetch('https://news-hub-401-final.herokuapp.com/headlines');
    return newsData;
  } catch (error){
    console.error(error)
  };
}