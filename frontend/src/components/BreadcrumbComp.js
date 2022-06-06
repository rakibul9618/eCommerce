import {Box , Breadcrumbs ,Link } from "@mui/material";
import  { Link as  RouterLink} from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const BreadcrumbComp = (props)=> {
    return (
        <Box role="presentation" sx={{ display:'flex' , alignItems: 'end',height:'15vh'  }} >
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateBeforeIcon />} >
                <Link color='inherit' underline="hover" component={RouterLink}  sx={{ cursor:'pointer'}} to='/'>الرئيسية</Link>
                { props.children }
            </Breadcrumbs>
        </Box>
    );
}

export default BreadcrumbComp;