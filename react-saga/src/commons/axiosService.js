import axios from 'axios'
class AxiosService {
    // trong phạm vi class  AxiosService bạn
    // có thể truy cập đến this.instance để sử dụng 
    // dùng this.instance để đưa instance ra ngoài constructor để dùng trong class AxiosService
    constructor() {
        const instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess,this.handleError);
        this.instance = instance;
    }
    handleSuccess(response) {
        return response;
    }
    handleError(error) {
        return Promise.reject(error);
    }
    get(url) {
        return this.instance.get(url);
    }
    post(url,body){
        return this.instance.post(url,body);
    }
    put(url,body){
        return this.instance.put(url,body);
    }
    delete(url){
        return this.instance.delete(url);
    }
}
export default new AxiosService();