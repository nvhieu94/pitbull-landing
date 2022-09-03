import {ScurityWrapper} from './HomeStyled';
import {Grid,Box, Typography,} from '@mui/material'
import section5_pitbull from 'assets/images/section5_pitbull.png';

import Image from 'next/image';


const ScurityCertification = () => {

    return <ScurityWrapper id="audit">
        <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6} xl={6}>
                    <Box className='image_left'>
                    <img  src={section5_pitbull.src} width={300} height={70}/>
                    </Box>
                  
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                   <Box className="header" mt={10}>SECURITY AND SAFETY CERTIFICATION</Box>
                   <Box className="audit_text" mt={8} mb={4}>AUDIT & KYC – SAFU</Box>
                   <Typography>OUR PROJECT IS FOR THE COMMUNITY (TEAM HAVE NO TOKEN) AND IS COMPLETELY SAFE BECAUSE WE HAVE AUDITED THE PROJECT AND KYC DEV TEAM BY THE LEADING AUDIT COMPANY INTERFI AUDITS. IN PARTICULAR, WE HAVE ADDED A SAFU BADGE TO ENSURE EXTREME SAFETY.</Typography>
                   <Box className="btn-group" mt={4}>
                      <Box>
                      <a href='https://github.com/interfinetwork/smart-contract-audits/blob/audit-updates/PitbullInu_0xBFF96267C5A60aa61763dD7159DA14d6DF6Da371.pdf'>SEE AUDIT</a>
                       <a href='https://idopresales.com/pitbull-inu-kyc-verification/'>SEE KYC</a>
                       <a href='https://t.me/TrynosTokenTerminal/322'>SEE SAFU</a>
                      </Box>

                   </Box>
                </Grid>
               
            </Grid >
            
    </ScurityWrapper>
}

export default ScurityCertification;