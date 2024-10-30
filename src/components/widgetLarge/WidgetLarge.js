import "./WidgetLarge.css";
import Button from "../button/Button";

export default function WidgetLarge() {
  return (
    <div className="widgetLarge">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.forbesindia.com/media/images/2016/Dec/img_90887_ratantata_bg.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ratan Tata</span>
          </td>
          <td className="widgetLgDate">25 October 2024</td>
          <td className="widgetLgAmount">₹9876.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved">Approved</Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.forbesindia.com/media/images/2016/Dec/img_90887_ratantata_bg.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ratan Tata</span>
          </td>
          <td className="widgetLgDate">25 October 2024</td>
          <td className="widgetLgAmount">₹9876.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending">Pending</Button>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.forbesindia.com/media/images/2016/Dec/img_90887_ratantata_bg.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ratan Tata</span>
          </td>
          <td className="widgetLgDate">25 October 2024</td>
          <td className="widgetLgAmount">₹9876.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined">Declined</Button>
          </td>
        </tr>
      </table>
    </div>
  );
}
