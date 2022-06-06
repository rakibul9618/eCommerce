import { useEffect, useState } from 'react';
import {
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Rating,
  Link,
  CircularProgress,
} from '@mui/material';
// import products from "../products";
import camera from '../images/camera.jpg';
import CardItem from '../components/CardItem';
import Wrapper from '../components/Wrapper';
import axios from 'axios';
import { fetchProducts } from '../redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const [ products ,  setProducts ] = useState([]);
  // useEffect(()=>{
  //     const fetchProducts= async ()=>{
  //             const { data } = await axios.get('/api/products');
  //             setProducts(data);
  //     }
  //     fetchProducts();
  // },[]);
  return (
    <>
      <Wrapper>
        {!error && (
          <Typography variant="h4" sx={{ fontSize: '26px', fontWeight: '600' }}>
            اخر المنتجات
          </Typography>
        )}
        <Box
          sx={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            m: '40px 0px',
          }}
        >
          {error && (
            <Typography
              variant="h4"
              sx={{ fontSize: '26px', fontWeight: '600', color: 'red' }}
            >
              {error}
            </Typography>
          )}
          {loading && data.length === 0 && (
            <CircularProgress sx={{ marginTop: '40px' }} size={80} />
          )}
          {data &&
            data.map((item) => (
              <CardItem
                key={item._id}
                _id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                rating={item.rating}
                numReviews={item.numReviews}
              />
            ))}
        </Box>
      </Wrapper>
    </>
  );
};

export default HomeScreen;
