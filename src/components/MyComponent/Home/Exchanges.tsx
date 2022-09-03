import {ExchangesWrapper,BoxWrappSection,PageSection3} from './HomeStyled';
import {Grid,Box, Typography,Container} from '@mui/material'

import bscScanImage from 'assets/images/bscScan.png';

import coin_watch from 'assets/images/coin_watch.png';
import avedex from 'assets/images/avedex.png';
import dex_tools from 'assets/images/dex_tools.png';
import CoinMarketCap from 'assets/images/CoinMarketCap.png';
import coinGecko from 'assets/images/coinGecko.png';
import pancake_swap from 'assets/images/pancake_swap.png';
import pinksale from 'assets/images/pinksale.png';
import poo_coin from 'assets/images/poo_coin.png';
import pitbull_inu from 'assets/images/pitbull_inu.png';

import Image from 'next/image';


const Exchanges = () => {

    return <ExchangesWrapper>
            <Box className='exchange-header'>
                LISTED EXCHANGES
            </Box>
            <Box mb={8}></Box>
            <Container>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={bscScanImage.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={pancake_swap.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={poo_coin.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={dex_tools.src} width={300} height={70}/>
                </Grid>

                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={coinGecko.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={CoinMarketCap.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={avedex.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={coin_watch.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={pinksale.src} width={300} height={90}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <a href='/'><Image  src={pitbull_inu.src} width={300} height={90}/></a>
                    
                </Grid>
            </Grid >
            </Container>
            
    </ExchangesWrapper>
}

export default Exchanges;