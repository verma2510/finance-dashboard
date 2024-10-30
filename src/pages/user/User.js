import Button from '../../components/button/Button'
import './User.css'
import { Link } from 'react-router-dom'
import {
  MdOutlinePermIdentity,
  MdCalendarMonth,
  MdEmail,
  MdLocationPin,
} from "react-icons/md";
import { FaPhoneSquare, FaUpload } from "react-icons/fa";


export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <Button className="userCreateButton">Create</Button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Elon_Musk_2019.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Elon Musk</span>
              <span className="userShowUserTitle">Meta Universe</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <MdOutlinePermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">elonmusk2019</span>
            </div>

            <div className="userShowInfo">
              <MdCalendarMonth className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <FaPhoneSquare className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MdEmail className="userShowIcon" />
              <span className="userShowInfoTitle">elonmusk@meta.com</span>
            </div>
            <div className="userShowInfo">
              <MdLocationPin className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="username"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Elon_Musk_2019.jpg"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <FaUpload className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <Button className='userUpdateButton'>Update</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
