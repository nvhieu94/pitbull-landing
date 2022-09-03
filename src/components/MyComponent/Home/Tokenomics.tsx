import {TokenomicsSectionWrapper,BoxWrappSection} from './HomeStyled';
import {Grid,Box, Typography} from '@mui/material'
import image from 'assets/images/pitbull_section1.png';
import section4_pitbull from 'assets/images/section4_pitbull.png';
import tick from 'assets/images/tick.png';
import Image from 'next/image';

const Tokenomics = () => {

    return <TokenomicsSectionWrapper id={'tokenomics'}>
            <Grid container >
            <Grid item xs={12} md={6} xl={6}>
                <Box className='column-right-image'>
                    <img src={section4_pitbull.src} width={424} height={808}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
                <Box className='header' mb={8}>TOKENOMICS</Box>

                <Box sx={{display: "flex", }} mb={4}>
                    <Box>
                        <Image src={tick.src} width={50} height={60} />
                    </Box>
                   
                    <Box ml={5}> <Typography>TRANSACTION TAXES; 8% ON BUYS AND 8% ON SELLS.</Typography></Box>
                </Box>
                <Box sx={{display: "flex", }} mb={4}> <Box>
                        <Image src={tick.src} width={50} height={60} />
                    </Box>
                    <Box ml={5}> <Typography>LOW TAX TO KEEP LIQUIDITY POOL AT AN EXCELLENT RATIO WITH MARKET CAP.</Typography></Box>
                </Box>
                <Box sx={{display: "flex" }} mb={8}>
                    <Box sx={{width:80}}>
                        <Image src={tick.src} width={60} height={60} />
                    </Box>
                    <Box ml={5} sx={{textAlign:"start"}}> <Typography>THE TAXES ARE DIVIDED INTO THREE AREAS BASED ON EACH PURCHASE AND SALE: MARKETING & JACKPOT, CHARITY, PAY TO THE OWNER.</Typography></Box>
                </Box>
            </Grid>
           
            </Grid >
    </TokenomicsSectionWrapper>
}

export default Tokenomics;