import "./WidgetSmall.css";
import { MdVisibility } from "react-icons/md";
import Button from '../button/Button';


export default function WidgetSmall() {
  return (
    <div className="widgetSmall">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmItem">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mukesh Ambani</span>
            <span className="widgetSmUserTitle">Reliance Industries</span>
          </div>
          <Button className="widgetSmButton" icon={MdVisibility}>
            Display
          </Button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mukesh Ambani</span>
            <span className="widgetSmUserTitle">Reliance Industries</span>
          </div>
          <Button className="widgetSmButton" icon={MdVisibility}>
            Display
          </Button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mukesh Ambani</span>
            <span className="widgetSmUserTitle">Reliance Industries</span>
          </div>
          <Button className="widgetSmButton" icon={MdVisibility}>
            Display
          </Button>
        </li>
        <li className="widgetSmItem">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Mukesh Ambani</span>
            <span className="widgetSmUserTitle">Reliance Industries</span>
          </div>
          <Button className="widgetSmButton" icon={MdVisibility}>
            Display
          </Button>
        </li>
      </ul>
    </div>
  );
  
}
