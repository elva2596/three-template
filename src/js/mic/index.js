var loader = new THREE.OBJLoader();


var promise = new Promise(resolve=>{
    loader.load('../../models/shufu/ClarmClock.obj',function (obj){
        resolve(obj)
    })

})
const pr= async ()=>{
    const a = await promise
    console.log(a)
}
pr()