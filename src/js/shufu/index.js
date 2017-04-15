var loader = new THREE.OBJLoader();
loader.load('../../models/shufu/ClarmClock.obj',function (obj){
    console.log(obj)
})
var promise = new Promise(resolve=>{
    resolve('success')
})
const pr= async ()=>{
    const a = await promise
    console.log(a)
}
pr()
console.log(Promise)