import {IconButton, styled , Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  { Link as  RouterLink} from 'react-router-dom';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const CartIcon = ()=>{
 return  <IconButton component={RouterLink} to='/cart' sx={{ marginRight:'auto' }} aria-label="cart">
     <StyledBadge  badgeContent={4} color="info">
         <ShoppingCartIcon />
     </StyledBadge>
 </IconButton>
};

export default CartIcon;