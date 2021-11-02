import { Container, Grid, Paper, ButtonGroup, Button, Typography, Stack, Divider } from '@mui/material'
import React from 'react'
import logo from '../images/logo.png'
// import SearchIcon from '@mui/icons-material/Search';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import Hidden from '@mui/material/Hidden';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SvgIcon from '@mui/material/SvgIcon';
// import { AiOutlineUser } from 'react-icons'
import { BiMessageDots } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { BsListUl } from "react-icons/bs";
import { GrFormDown } from "react-icons/gr";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/system';
// import RegionalSettings from './RegionalSettings';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';





export default function Navbar() {
    return (
        <div>
            <Hidden mdDown={true}>
                <Paper elevation={2} children={
                    <Box>
                        <Container sx={{ py: 3 }} >


                            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>

                                <Grid item md={2} lg={2} justifySelf={'start'}>
                                    <img src={logo} alt="" width='160px' />
                                </Grid>
                                <Grid item md={7} lg={7}>
                                    <div className='searchInputDiv'>
                                        <div >
                                            <select name="" id="" className='searchBy ps-3 pe-1 py-1 border-0'>
                                                <option value="" >Products</option>
                                                <option value="" >Supliers</option>
                                            </select>
                                            <span className=''>
                                                <input type="text" className='searchInput border-0' placeholder='What are you looking for...' />
                                            </span >
                                        </div>

                                        <div className='d-flex align-items-center'><PhotoCameraOutlinedIcon sx={{ color: 'lightGray' }} />
                                            <button className='searchBtn'><SvgIcon sx={{ fontSize: 22 }} spacing={0}> <IoSearchOutline /> </SvgIcon> Search</button>
                                        </div>
                                    </div>
                                </Grid>


                                <Grid item md={3} lg={3}>
                                    <Stack direction="row" spacing={0} sx={{ fontWeight: 'light', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Stack direction="row" spacing={1} >


                                            <SvgIcon sx={{ fontSize: 29 }} spacing={0}> <AiOutlineUser /></SvgIcon><Typography fontSize={13} noWrap={true}>Sign in <br /> Join Free
                                            </Typography>
                                        </Stack>

                                        <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <SvgIcon sx={{ fontSize: 23 }}> <BiMessageDots /></SvgIcon><Typography fontSize={12}>Messages
                                            </Typography>
                                        </Stack>

                                        <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <SvgIcon sx={{ fontSize: 23 }}> < AccountCircleOutlinedIcon sx={{ fontSize: 23 }} /> </SvgIcon><Typography fontSize={12}>Orders
                                            </Typography>
                                        </Stack>

                                        <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <SvgIcon sx={{ fontSize: 23 }}> < BsCart2 /></SvgIcon><Typography fontSize={12}>Cart
                                            </Typography>
                                        </Stack>

                                    </Stack>

                                </Grid>
                            </Grid>
                        </Container>


                        <Divider />

                        <Container>
                            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>

                                <Grid item md={12} lg={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Stack direction="row" spacing={2} sx={{ fontWeight: 'light', display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <SvgIcon sx={{ fontSize: 23 }} color={'disabled'}> <BsListUl /></SvgIcon>
                                            <Typography>Categories </Typography> <SvgIcon sx={{ fontSize: 20 }} > <GrFormDown /> </SvgIcon>
                                        </Stack>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                            <Typography sx={{ color: 'rgba(0, 0, 0, 0.26)' }}> |</Typography> </Stack>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                            <Typography noWrap>{('Personal Protective Equipment').slice(0, 20)}</Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                            <Typography noWrap>Buyer Central</Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                            <Typography noWrap >Sell on Alibaba</Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                                            <Typography noWrap>Help</Typography>
                                        </Stack>
                                    </Stack>



                                    <Stack direction="row" spacing={2} sx={{ fontWeight: 'light', display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>


                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography noWrap>Get the App</Typography>
                                        </Stack>


                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography sx={{ color: 'rgba(0, 0, 0, 0.26)' }}> |</Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography noWrap>English-PKR</Typography> <SvgIcon sx={{ fontSize: 20 }} > <GrFormDown /> </SvgIcon>
                                        </Stack>


                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography sx={{ color: 'rgba(0, 0, 0, 0.26)' }}> |</Typography>
                                        </Stack>

                                        <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Typography noWrap>Ship to: </Typography><img
                                                loading="lazy"
                                                width="20"
                                                srcSet={`https://flagcdn.com/w40/pk.png 2x`}
                                                alt=""
                                            /><SvgIcon sx={{ fontSize: 20 }} color={'disabled'} > <GrFormDown /> </SvgIcon>
                                        </Stack>


                                    </Stack>





                                </Grid>
                            </Grid>
                        </Container>


                    </Box>
                } />



            </Hidden>


            <Hidden mdUp={true} mdDown={false}>
                <Paper elevation={2} children={
                    <Container sx={{ py: 3 }} >

                        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>

                            <Grid item sm={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                <MenuIcon />

                                <img src={logo} alt="" width='180px' />


                                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography noWrap>English-PKR</Typography> <SvgIcon sx={{ fontSize: 20 }} > <GrFormDown /> </SvgIcon>
                                </Stack>
                            </Grid>
                        </Grid>
















                        <Grid container spacing={2} sx={{py:2, display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>


                            <Grid item sm={1}>

                                <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <SvgIcon sx={{ fontSize: 23 }}> < BsCart2 /></SvgIcon>
                                </Stack>

                            </Grid>



                            <Grid item sm={10}>
                                <div className='searchInputDiv'>
                                    <div >
                                        <select name="" id="" className='searchBy ps-3 pe-1 py-1 border-0'>
                                            <option value="" >Products</option>
                                            <option value="" >Supliers</option>
                                        </select>
                                        <span className=''>
                                            <input type="text" className='searchInput border-0' placeholder='What are you looking for...' />
                                        </span >
                                    </div>

                                    <div className='d-flex align-items-center'>
                                        <button className='searchBtn'> <SvgIcon sx={{ fontSize: 22 }} spacing={0}> <IoSearchOutline /> </SvgIcon></button>
                                    </div>
                                </div>
                            </Grid>


                            <Grid item sm={1}>

                                <Stack direction="column" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <SvgIcon sx={{ fontSize: 23 }}> < BsCart2 /></SvgIcon>
                                </Stack>

                            </Grid>

                        </Grid>



                    </Container>
                } />



            </Hidden>

        </div >
    )
}
