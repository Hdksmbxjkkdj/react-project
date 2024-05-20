export const productData=[]

for(let i=1;i <= 8;i++){
    var title,id,price,img;
    productData.push(
         {
                    
        //          title:`book+${i}`,
                //  key: i+1,
                //  price:200+i,
                 img:`https://picsum.photos/20${i}`,
                 id:i,
                 title:`book ${i}`,
                 price:300+i,
                 qty:1,

        }
    )

    

}