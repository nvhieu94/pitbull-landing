import {PartnerWrapper,BoxWrappSection,PageSection3} from './HomeStyled';
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
import partner_iamge  from 'assets/images/partner.png'

import Image from 'next/image';


const Partner = () => {

    return <PartnerWrapper>
            <Box className='exchange-header'>
                LIST PARTNER
            </Box>
            <Box mb={8}></Box>
            <Box sx={{textAlign:"center"}}>   <Image  src={partner_iamge.src} width={1202} height={500}/></Box>
         
            
    </PartnerWrapper>
}

export default Partner;