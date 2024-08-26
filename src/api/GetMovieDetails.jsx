
const getMovieDetails = async ({params}) => {
    const id = params.planID;



    try {
      const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=ae816189`);
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
  
  export default getMovieDetails