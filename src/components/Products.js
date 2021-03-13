import {Grid} from '@material-ui/core'
import Product from './Product'

const products = [
    {id: 1, name: 'shoe', description: 'running shoes', price: '$5'},
    {id: 2, name: 'laptop', description: 'laptop hp spectre', price: '$10'},
    {id: 3, name: 'laptop', description: 'laptop hp spectre', price: '$10'},
    {id: 4, name: 'laptop', description: 'laptop hp spectre', price: '$10'},
]
const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;