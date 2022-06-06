import { useState , useEffect } from 'react';
import BreadcrumbComp from "../components/BreadcrumbComp";
import {
    Typography,
    Box,
    styled,
    Grid,
    Divider,
    Rating,
    Button,
    Chip,
    CircularProgress,
    FormControl,
    MenuItem,
    InputLabel,
    Select

} from "@mui/material";
import products from '../products';
import { useParams , useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import RtlProvider from "../ CacheProvider";
import axios from "axios";
import { useDispatch , useSelector } from "react-redux";
import {fetchProductById} from "../redux/productSlice";


const ProductImg = styled('img')({
    width:'100%',
    borderRadius:'12px'
})
const AddToCartBtn = styled(Button)({
    backgroundColor:"#2d3436",
    color:'white',
    '&:hover':{
        backgroundColor:'#636e72'
    }
});

const StyleFormControl  = styled(FormControl)({
    m: '0.5',
    minWidth: '65' ,
    borderRadius:'0px',
    '&:hover':{
        borderColor:'#636e72'
    },
    '&:input:focus':{
        borderColor:'#636e72'
    }
});


const ProductScreen = ( )=>{
    const { id } = useParams();
    const navigate = useNavigate();
    const [qty , setQty] = useState(1);
    const dispatch =useDispatch();
    const product  = useSelector((state)=>state.product.data );
    const { loading , error }  = useSelector((state)=>state.product );
    useEffect(()=>{
        dispatch(fetchProductById(id));
    },[dispatch , id]);
    const qtyOnChangeHandler = (e)=>{
        setQty(e.target.value);
    }
    const addToCartHandler = ()=>{
        navigate(`/cart/${id}?qty=${qty}`)
    }


    return <>
        <BreadcrumbComp>
            <Typography color="text.primary">المنتجات</Typography>
        </BreadcrumbComp>
        <RtlProvider>
        <Wrapper>
            <Grid container gap='20px'>

            { loading && !product  && !error  &&(
                <Grid item md={12} sm={12} xs={12}>
                    <Box sx={{ width:'100%' , display:'flex'  , justifyContent:'center'  }}>
                        <CircularProgress sx={{ marginTop:'40px' }} size={80} />
                    </Box>
                </Grid>
            ) }
            {error && !product &&
                <Grid item md={12} sm={12} xs={12} >
                    <Box sx={{ width:'100%' ,  display:'flex'  , justifyContent:'center'  }}>

                <Typography variant='h4' sx={{fontSize:'26px' , fontWeight:'600' , color:'red'}}>
                    {error}
                </Typography>
                    </Box>
                </Grid>
            }


            {product &&
                <>
                    <Grid item md={5} sm={12}>

                        <Box>
                            <ProductImg src={product.image}/>
                        </Box>
                    </Grid>

                    <Grid item md={3} sm={12}>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px', p: '0px 5px 0px 5px'}}>
                            <Typography sx={{marginBottom: '10px'}}>{product.name}</Typography>
                            <Divider/>
                            <Box sx={{display: 'flex', alignItems: "center"}}>
                                <Rating name="read-only" precision={0.5} defaultValue={product.rating} readOnly
                                        size='small'/>
                                <Typography sx={{fontSize: '12px', fontWeight: 400, marginLeft: '5px'}} color='black'>
                                    {product.numReviews > 2 && product.numReviews < 10 ? ` تقيمات ${product.numReviews} ` : product.numReviews < 2 ? ` ${product.numReviews} تقييم ` : product.numReviews === 2 ? ` ${product.numReviews} تقيمان ` : ` ${product.numReviews} تقييم `}
                                </Typography>
                            </Box>
                            <Divider/>
                            <Typography sx={{fontWeight: '600'}}>السعر {product.price} $</Typography>
                            <Divider/>
                            <Typography>{product.description}</Typography>

                        </Box>
                    </Grid>
                    <Grid item md={3} sm={12}>
                        <Box sx={{border: '1px solid #E0E0E0', width: '20vw', height: 'auto', marginTop: '10px'}}>
                            <Box sx={{display: 'flex', justifyContent: 'space-around', p: "10px"}}>
                                <Typography>السعر</Typography>
                                <Typography>{product.price}$</Typography>
                            </Box>
                            <Divider/>
                            <Box sx={{display: 'flex', justifyContent: 'space-around', p: "10px"}}>
                                <Typography>الحالة</Typography>
                                <Chip label="متوفر" sx={{
                                    fontSize: '12px',
                                    p: "10px 15px",
                                    backgroundColor: '#2d3436',
                                    borderColor: 'black',
                                    color: 'white'
                                }} variant='outlined' size='small' color="primary"/>
                            </Box>
                            <Divider/>

                            {product.countInStock > 0 &&
                                <Box sx={{display: 'flex', justifyContent: 'space-around', p: "10px"}}>
                                    <Typography>الكمية</Typography>

                                    <StyleFormControl size={"small"}>
                                        <Select
                                            value={qty}
                                            displayEmpty
                                            onChange={qtyOnChangeHandler}
                                            inputProps={{'aria-label': 'Without label'}}
                                        >

                                            {
                                                [...Array(product.countInStock).keys()].map((x) => (
                                                    <MenuItem key={x+1} value={x+1} >{x+1}</MenuItem>

                                                ))}

                                        </Select>
                                    </StyleFormControl>

                                </Box>
                            }
                                    <Divider/>
                            <Box sx={{p: "10px"}}>
                                <AddToCartBtn size={"small"} onClick={ addToCartHandler } variant='contained' fullWidth>أضف إلى السلة</AddToCartBtn>
                            </Box>

                        </Box>
                    </Grid>
                    </>
            }
                </Grid>

                </Wrapper>
        </RtlProvider>

    </>
};

export default ProductScreen;