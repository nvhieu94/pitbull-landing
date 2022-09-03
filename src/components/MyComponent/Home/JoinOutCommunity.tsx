import {JoinOutCommunityWrapper,BoxWrappSection,PageSection3} from './HomeStyled';
import {Grid,Box, Typography, Container} from '@mui/material'

import bscScanImage from 'assets/images/bscScan.png';

import coin_watch from 'assets/images/coin_watch.png';
import avedex from 'assets/images/avedex.png';
import dex_tools from 'assets/images/dex_tools.png';
import CoinMarketCap from 'assets/images/CoinMarketCap.png';
import coinGecko from 'assets/images/coinGecko.png';
import pancake_swap from 'assets/images/pancake_swap.png';
import pinksale from 'assets/images/pinksale.png';
import poo_coin from 'assets/images/poo_coin.png';
import section5_pitbull from 'assets/images/section5_pitbull.png';

import Image from 'next/image';



const JoinOutCommunity = () => {

    return <JoinOutCommunityWrapper>
        <Container>
        <Box className='header'>
                        JOIN OUR COMMUNITY
                    </Box>
                    <Box className='description'>
                        <Typography>
                        Extremely active community that loves our mission and doges! Our telegram is filled with community members 24/7 that would love to help you. Do not trust random messages of people claiming to be “support” or ever give out your wallet info to anyone.
                        </Typography>
                        
                    </Box>
                  
        </Container>
            
    </JoinOutCommunityWrapper>
}

export default JoinOutCommunity;