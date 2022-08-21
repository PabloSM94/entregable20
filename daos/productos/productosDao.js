import { faker } from '@faker-js/faker';
faker.locale = 'es'

async function generarProducto(id) {
 return {
   id: id,
   title: faker.commerce.product(),
   price: faker.commerce.price(100, 200, 0, '$'),
   thumbnail: faker.image.image(),
 }
}

const productosDao = {
    getRandom: async ()=>{
        let productos = []
        for (let i=1;i<=5;i++){
            productos.push(await generarProducto(i))
        }
        return productos 
        
    }
}

export default productosDao