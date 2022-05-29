import APIService from '../API/APIService'
import DIContainer from '../DIContainer/DIC'

export class ServiceRegister {
     registerServices(){
       DIContainer.getInstance().register('APIService',new APIService())
    }
}