import {RoadmapWrapper,BoxWrappSection} from './HomeStyled';
import {Grid,Box, Typography} from '@mui/material'
import image from 'assets/images/pitbull_section1.png';
import section4_pitbull from 'assets/images/section4_pitbull.png';
import roadmap from 'assets/images/road_map.png';
import Image from 'next/image';

const Roadmap = () => {

    return <RoadmapWrapper id="roadmap">
                <Box className='road-map_img'>
                    <img src={roadmap.src} width={424} height={808}/>
                </Box>
    </RoadmapWrapper>
}

export default Roadmap;