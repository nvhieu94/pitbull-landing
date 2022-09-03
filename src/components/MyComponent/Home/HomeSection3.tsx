import {PageSectionJackpot,BoxWrappSection,PageSection3} from './HomeStyled';
import {Grid,Box, Typography} from '@mui/material'
import jackpotImage from 'assets/images/jackpot.png';
import section2_pitbull_image from 'assets/images/section2_pitbull_image.png';
import section2_wallet from 'assets/images/section2_wallet.png';
import shape_1 from 'assets/images/shape_1.png';
import section2_pitbull_title from 'assets/images/section2_pitbull_title.png';

import Image from 'next/image';
const HomeSection3 = () => {

    return <PageSection3>
            <Grid container >
            <Grid item xs={12} md={3} xl={3}>
                <Image  src={section2_pitbull_image.src} width={387} height={485}/>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
                <Box className='jackpot-right'>
                    <Image src={shape_1.src} width={669} height={77}/>
                    <Image src={section2_pitbull_title.src} width={540} height={76}/>
                   
                    <Typography>JUST HOLD PITBULL INU AND EARN PASSIVE $PITI REWARDS.</Typography>
                    <Box sx={{height:50}}></Box>
          
                    <Typography>PITBULL INU BSC CREATE A STEP TO A STANDARD CODE! HOLDERS ARE</Typography>
                    <Typography>REWARDED WITH 2% BUY/SELL TAX ON XXX REWARDS, WHICH CAN BE HELD/SOLD/INVESTED IN PITBULL INU.</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={3} xl={3}>
                <Image  src={section2_wallet.src} width={395} height={431}/>
            </Grid>
            </Grid >
    </PageSection3>
}

export default HomeSection3;