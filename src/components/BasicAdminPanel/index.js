import axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.css";
const Admin = () => {
  const [list, setList] = useState([]);
  const [detail, setDetail] = useState({
    first: "",
    last: "",
    desc: "",
    streetadd: "",
    zipcode: "",
    stte: "",
    cty: "",
  });

  const [count, setCount] = useState(0);
  useEffect(() => {
    axios(
      "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
    ).then((res) => {
      setList(res.data);
    });
  }, []);

  return (
    <>
      <main>
        <div id="table-section">
          <form action="/">
            <input
              type="text"
              placeholder="Enter something"
              name="search-box"
              id="search-box"
            />
          </form>

          <div id="table-wrapper">
            <div id="table-headers">
              <table>
                <thead>
                  <tr>
                    <th className="column1">Id</th>
                    <th className="column2">FirstName</th>
                    <th className="column3">LastName</th>
                    <th className="column4">Email</th>
                    <th className="column5">Phone</th>
                  </tr>
                </thead>
              </table>
            </div>

            <div id="table-data">
              <table>
                <tbody>
                  {list.map(
                    ({
                      firstName,
                      lastName,
                      email,
                      phone,
                      id,
                      description,
                      address,
                    }) => (
                      <tr
                        className="data-row"
                        onClick={(e) => {
                          setDetail({
                            first: firstName,
                            last: lastName,
                            desc: description,
                            streetadd: address.streetAddress,
                            zipcode: address.zip,
                            stte: address.state,
                            cty: address.city,
                          });
                        }}
                      >
                        <td className="column1">{id}</td>
                        <td className="column2">{firstName}</td>
                        <td className="column3">{lastName}</td>
                        <td className="column4">{email}</td>
                        <td className="column5">{phone}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div id="info-wrapper">
          <h1>Details</h1>
          <p>Click on a table item to get detailed information</p>
          <div>
            <div>
              <b>User selected:</b> {detail.first} {detail.last}
            </div>
            <div>
              <b>Description: </b>
              <br />
              <p>{detail.desc}</p>
            </div>
            <div>
              <b>Address:</b> {detail.streetadd}
            </div>
            <div>
              <b>City:</b> {detail.cty}
            </div>
            <div>
              <b>State:</b> {detail.stte}
            </div>
            <div>
              <b>Zip:</b> {detail.zipcode}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Admin;
