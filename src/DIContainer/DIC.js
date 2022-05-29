export default class DIContainer {

    static instance = null

    static getInstance(){
        if (DIContainer.instance == null){
            DIContainer.instance = new DIContainer()
        }
        return this.instance
    }

    constructor() {
      this.dependencies = {}
      this.factories = {}

    }
  

    register(name, dependency) {
      this.dependencies[name] = dependency
    }
  
    factory(name, factory) {
      this.factories[name] = factory
    }
  
    get(name) {
      if (!this.dependencies[name]) {
        const factory = this.factories[name]
        if (factory) {
          this.dependencies[name] = this.inject(factory)
        } else {
          throw new Error('No module found for: ' + name)
        }
      }
      return this.dependencies[name]
    }
  
    inject(factory) {
      const fnArgs = app.parse(factory).args.map((arg) => this.get(arg))
      return new factory(...fnArgs)
    }
}



//export default
