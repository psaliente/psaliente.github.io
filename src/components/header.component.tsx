import { MyInfoType } from "../types/MyInfo.type";
import useStyle from "../styles/header.style";
import ScrollAnimation from "react-animate-on-scroll";

const HeaderComponent = ({Name, Description}: MyInfoType) => {
    const styles = useStyle();

    return (<ScrollAnimation animateIn="fadeInDownBig">
        <div style={styles.Header}>
        <h1 className="display-1 text-center" style={styles.Title}>{Name}</h1>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <p className="lead" style={styles.Description}>{Description}</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>)
}

export default HeaderComponent