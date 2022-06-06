import products from "../products";
import  { Link as  RouterLink} from 'react-router-dom';
import {Box, Card, CardContent, CardMedia, Link, Rating, Typography} from "@mui/material";
import RtlProvider from "../ CacheProvider";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const CardItem = ({ _id,image , name , description , price ,countInStock , rating  , numReviews })=>{
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return <>
            <Card sx={{width: matches ? '100%' : '255px' , borderRadius:'20px' ,  boxShadow: '0.3em 0.3em 0.7em #00000015'}}>
                <Link component={RouterLink} to={`/product/${_id}`}>
                    <CardMedia  component='img'  image={image}  height="250"/>
                </Link>
                <CardContent sx={{p:'30px 30px' }} >
                        <Box sx={{  height:'50px' }}>
                            <Link underline='none' component={RouterLink} to={`/product/${_id}`} >
                                <Typography sx={{ color:'black' , fontSize:'16px' , fontWeight:'500' }}>
                                    {name}
                                </Typography>
                            </Link>
                        </Box>

                    <Box sx={{display:'flex' ,  justifyContent:'space-between' , alignItems: 'center',  marginTop:'40px'}}>

                        <Typography fontWeight='700'>
                            ${price}
                        </Typography>
                        <RtlProvider>

                        <Box sx={{display:'flex' , alignItems:'center' }}>
                                    <Rating name="size-small" readOnly precision={0.5} defaultValue={rating}    size="small" />
                            <Typography sx={{ fontSize:'12px' , marginRight:'4px'  }}>({numReviews})</Typography>
                        </Box>
                        </RtlProvider>

                    </Box>

                </CardContent>
            </Card>

    </>
};

export default CardItem;