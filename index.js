const {productOne,productTwo}=require('./products');
async function main(){
    try{
        console.time("Measuring time");
        const valueOne = await productOne();
        const valueTwo = await productTwo();
        console.timeEnd("Measuring time")
        console.log(valueOne);
        console.log(valueTwo);
    }
    catch(e){
        console.log(e);
    }
}
main();