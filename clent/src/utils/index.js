class ifile {
    constructor(file,obj){
        // console.log(file,obj)
        this.type=file.type.slice(file.type.indexOf("/"))
        this.sizi=file.sizi
        this.res=obj.type
        this.obj=obj
        // this.init()
    }
    init(){
      return  this.res.includes(this.type)
    }
    number(){
        return this.sizi<=this.obj.sizi
    }
}
export default ifile