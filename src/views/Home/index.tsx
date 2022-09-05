import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@pancakeswap/wagmi'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import FirstSection from '../../components/MyComponent/Home/FirstSection';
import SectionJackpot from '../../components/MyComponent/Home/SectionJackpot';
import HomeSection3 from '../../components/MyComponent/Home/HomeSection3';
import Exchanges from '../../components/MyComponent/Home/Exchanges';
import AboutUs from '../../components/MyComponent/Home/AboutUs';
import Tokenomics from '../../components/MyComponent/Home/Tokenomics';
import RoadmapWrapper from '../../components/MyComponent/Home/Roadmap';
import ScurityCertification from '../../components/MyComponent/Home/ScurityCertification';
import CommunityTransaction from '../../components/MyComponent/Home/CommunityTransaction'
import JoinOutCommunity from '../../components/MyComponent/Home/JoinOutCommunity';
import Partner from '../../components/MyComponent/Home/Partner';

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const { chainId } = useActiveChainId()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <FirstSection />
      <SectionJackpot />
      <HomeSection3 />
      <Exchanges />
      <Partner />
      <AboutUs />
      <Tokenomics />
      <RoadmapWrapper />
      <ScurityCertification />
      <CommunityTransaction />
      <JoinOutCommunity />
    </>
  )
}

export default Home
