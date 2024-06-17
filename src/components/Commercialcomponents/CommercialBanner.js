import React, { Fragment, useEffect, useState } from "react";
import "./Commercial.css";
import axios from "axios";

function CommercialBanner() {
  const [com, setcom] = useState([]);
  useEffect(() => {
    const fetchCom = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL_ECOSOCH}/api/auth/list/CommercialTop`
        );
        // console.log(res.data[0]);
        setcom(res.data[0]);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchCom();
  }, []);

  return (
    <Fragment>
      <div className="rts-bread-crumb-area com-bg bg-bread">
        <div className="container ptb--65">
          <div className="row">
            <div className="col-lg-12">
              <div className="con-tent-main">
                <div className="wrapper">
                  <div className="title  bread">
                    <div className="word-line">
                      <p className="img-hv">{com.Title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CommercialBanner;
