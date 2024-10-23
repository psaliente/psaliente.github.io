
import { ai_bg } from "../assets/images"

const useStyle = () => {
    return {
        PortfolioPage: {
            background: "linear-gradient(rgba(243,243,245), rgba(123,123,123))",
            backgroundColor: "#f3f3fe",
            paddingBottom: 60,
            backgroundImage: `url(${ai_bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
        }
    }
}

export default useStyle