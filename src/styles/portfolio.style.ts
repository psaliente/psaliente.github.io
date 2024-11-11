
import { ai_bg } from "../assets/images"

const useStyle = () => {
    return {
        PortfolioPage: {
            paddingBottom: 60,
            backgroundImage: `url(${ai_bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'contain',
        }
    }
}

export default useStyle