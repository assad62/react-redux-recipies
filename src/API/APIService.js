import axios from 'axios';


const Routes = {
    Categories:"?c=",
    Area:"?a=",
};

Object.freeze(Routes);

export default class APIService {
 
    baseURL = "https://www.themealdb.com/api/json/v1/1/filter.php"
    baseURLList = "https://www.themealdb.com/api/json/v1/1/list.php"
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

    async getAllAreas(){
        const url = `${this.baseURLList}${Routes.Area}list`
        
        try {
           var res = await axios.get(url)
         
           return res
         
       } catch (err) {
          
           console.log(`ERROR: ${err}`);
           return []
         }
    }

    async getAllCategories(){
        const url = `${this.baseURLList}${Routes.Categories}list`
       
        
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

