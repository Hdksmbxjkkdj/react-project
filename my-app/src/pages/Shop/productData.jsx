export const productData=[]

for (let i=1;i <= 9;i++){
    productData.push(
        {        id : i,
                 title:'book ${i} ',
                 key: i+1,
        }

    )
    console.log(productData)
}