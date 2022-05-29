import axios from 'axios';


const Routes = {
    Categories:"?c=",
    Area:"?a=",
};

Object.freeze(Routes);


export default class APIService {
 
    baseURL = "https://www.themealdb.com/api/json/v1/1/filter.php"
    instance = axios.create()

    async getRecipesByArea(area){
        
         const url = `${this.baseURL}${Routes.Area}${area}`
        
         try {
            var res = await axios.get(url)
          
            return res
          
        } catch (err) {
           
            console.log(`ERROR: ${err}`);
            return []
          }
        
    }


    getRecipesByCat(category){
        return `${this.baseUrl}${Routes.Categories}${category}`
     }
}

