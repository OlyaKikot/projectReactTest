import ApiService from "../../global/services/ApiService";

export class MainPageService extends ApiService{
    getMainPageData =()=> this.get({url:'people/1/'});
    getFilms =(url)=> this.get({base_api_url:'', url});
}
export default new MainPageService();