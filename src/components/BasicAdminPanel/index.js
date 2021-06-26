import axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.css";
const Admin = () => {
  const [list, setList] = useState([]);
  const [details, setDetails] = useState({
    id: "",
    firstName: "",
    lastName: "",
    description: "",
    address: { streetAddress: "", zip: "", city: "", state: "" },
  });
  let count = 0;
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
              value=""
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
                    }) => (
                      <tr className="data-row" onClick={++count}>
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
              <b>User selected:</b> Marcellin Shrestha
            </div>
            <div>
              <b>Description: </b>
              <textarea cols="50" rows="5" readonly="true">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, quia nihil. Est, illum minima libero rerum, nihil
                distinctio placeat sint nam quae repellendus obcaecati delectus
                totam non odio. Sint, reprehenderit?
              </textarea>
            </div>
            <div>
              <b>Address:</b> 6480 Nec Ct
            </div>
            <div>
              <b>City:</b> Dinwiddie
            </div>
            <div>
              <b>State:</b> NV
            </div>
            <div>
              <b>Zip:</b> 91295
            </div>
            <div>
              <b>Count:</b> {count}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Admin;
