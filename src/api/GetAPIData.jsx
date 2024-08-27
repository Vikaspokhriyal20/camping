
const getMovieData = async () => {

  
  try {
    const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ae816189&s=titanic&page=2`);
    const data = response.json();
    return data; 

  } catch (error) {
    console.log(error);
  }
};


export default getMovieData

