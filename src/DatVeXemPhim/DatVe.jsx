import React, { Component } from "react";
import './style.css';

export default class DatVe extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <div>
            <p className="fs-2 text-light bg-dark">MOVIE SEAT SELECTION</p>
            <div>
              <p className="text-warning bg-dark">Fill The Required Details Below And Select Your Seats</p>
              <div className="header">
                <div className="input-group mb-3">
                  <label>
                    Name<span className="start">*</span>
                  </label>
                  <input type="text" className="w-25"/>
                </div>
                <div>
                  <label>
                    Number of Seats <span>*</span>
                  </label>
                  <input type="number" required min="1" />
                </div>
              </div>
              <button className="btn btn-light">Start Selecting</button>
              <div className="chonGhe w-25 m-auto">
                <table>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td className="khoangCach"></td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td><input type="checkbox" value="A1"/></td>
                        <td><input type="checkbox" value="A2"/></td>
                        <td><input type="checkbox" value="A3"/></td>
                        <td><input type="checkbox" value="A4"/></td>
                        <td><input type="checkbox" value="A5"/></td>
                        <td className="khoangCach"></td>
                        <td><input type="checkbox" value="A6"/></td>
                        <td><input type="checkbox" value="A7"/></td>
                        <td><input type="checkbox" value="A8"/></td>
                        <td><input type="checkbox" value="A9"/></td>
                        <td><input type="checkbox" value="A10"/></td>
                        <td><input type="checkbox" value="A11"/></td>
                        <td><input type="checkbox" value="A12"/></td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td><input type="checkbox" value="B1"/></td>
                        <td><input type="checkbox" value="B2"/></td>
                        <td><input type="checkbox" value="B3"/></td>
                        <td><input type="checkbox" value="B4"/></td>
                        <td><input type="checkbox" value="B5"/></td>
                        <td className="khoangCach"></td>
                        <td><input type="checkbox" value="B6"/></td>
                        <td><input type="checkbox" value="B7"/></td>
                        <td><input type="checkbox" value="B8"/></td>
                        <td><input type="checkbox" value="B9"/></td>
                        <td><input type="checkbox" value="B10"/></td>
                        <td><input type="checkbox" value="B11"/></td>
                        <td><input type="checkbox" value="B12"/></td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td><input type="checkbox" value="C1"/></td>
                        <td><input type="checkbox" value="C2"/></td>
                        <td><input type="checkbox" value="C3"/></td>
                        <td><input type="checkbox" value="C4"/></td>
                        <td><input type="checkbox" value="C5"/></td>
                        <td className="khoangCach"></td>
                        <td><input type="checkbox" value="C6"/></td>
                        <td><input type="checkbox" value="C7"/></td>
                        <td><input type="checkbox" value="C8"/></td>
                        <td><input type="checkbox" value="C9"/></td>
                        <td><input type="checkbox" value="C10"/></td>
                        <td><input type="checkbox" value="C11"/></td>
                        <td><input type="checkbox" value="C12"/></td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td><input type="checkbox" value="D1"/></td>
                        <td><input type="checkbox" value="D2"/></td>
                        <td><input type="checkbox" value="D3"/></td>
                        <td><input type="checkbox" value="D4"/></td>
                        <td><input type="checkbox" value="D5"/></td>
                        <td className="khoangCach"></td>
                        <td><input type="checkbox" value="D6"/></td>
                        <td><input type="checkbox" value="D7"/></td>
                        <td><input type="checkbox" value="D8"/></td>
                        <td><input type="checkbox" value="D9"/></td>
                        <td><input type="checkbox" value="D10"/></td>
                        <td><input type="checkbox" value="D11"/></td>
                        <td><input type="checkbox" value="D12"/></td>
                    </tr>
                    <tr>
                        <td>E</td>
                        <td><input type="checkbox" value="E1"/></td>
                        <td><input type="checkbox" value="E2"/></td>
                        <td><input type="checkbox" value="E3"/></td>
                        <td><input type="checkbox" value="E4"/></td>
                        <td><input type="checkbox" value="E5"/></td>
                        <td className="khoangCach"></td>
                        <td><input type="checkbox" value="E6"/></td>
                        <td><input type="checkbox" value="E7"/></td>
                        <td><input type="checkbox" value="E8"/></td>
                        <td><input type="checkbox" value="E9"/></td>
                        <td><input type="checkbox" value="E10"/></td>
                        <td><input type="checkbox" value="E11"/></td>
                        <td><input type="checkbox" value="E12"/></td>
                    </tr>
                    <tr className="khoangCachDong"></tr>
                    <tr>
                        <td>F</td>
                        <td><input type="checkbox" value="F1"/></td>
                        <td><input type="checkbox" value="F2"/></td>
                        <td><input type="checkbox" value="F3"/></td>
                        <td><input type="checkbox" value="F4"/></td>
                        <td><input type="checkbox" value="F5"/></td>
                        <td className="khoangCach"></td>
                        <td><input type="checkbox" value="F6"/></td>
                        <td><input type="checkbox" value="F7"/></td>
                        <td><input type="checkbox" value="F8"/></td>
                        <td><input type="checkbox" value="F9"/></td>
                        <td><input type="checkbox" value="F10"/></td>
                        <td><input type="checkbox" value="F11"/></td>
                        <td><input type="checkbox" value="F12"/></td>
                    </tr>
                    <tr>
                        <td>G</td>
                        <td><input type="checkbox" value="G1"/></td>
                        <td><input type="checkbox" value="G2"/></td>
                        <td><input type="checkbox" value="G3"/></td>
                        <td><input type="checkbox" value="G4"/></td>
                        <td><input type="checkbox" value="G5"/></td>
                        <td className="khoangCach"></td>
                        <td><input type="checkbox" value="G6"/></td>
                        <td><input type="checkbox" value="G7"/></td>
                        <td><input type="checkbox" value="G8"/></td>
                        <td><input type="checkbox" value="G9"/></td>
                        <td><input type="checkbox" value="G10"/></td>
                        <td><input type="checkbox" value="G11"/></td>
                        <td><input type="checkbox" value="G12"/></td>
                    </tr>
                    <tr>
                        <td>H</td>
                        <td><input type="checkbox" value="H1"/></td>
                        <td><input type="checkbox" value="H2"/></td>
                        <td><input type="checkbox" value="H3"/></td>
                        <td><input type="checkbox" value="H4"/></td>
                        <td><input type="checkbox" value="H5"/></td>
                        <td className="khoangCach"></td>
                        <td><input type="checkbox" value="H6"/></td>
                        <td><input type="checkbox" value="H7"/></td>
                        <td><input type="checkbox" value="H8"/></td>
                        <td><input type="checkbox" value="H9"/></td>
                        <td><input type="checkbox" value="H10"/></td>
                        <td><input type="checkbox" value="H11"/></td>
                        <td><input type="checkbox" value="H12"/></td>
                    </tr>
                    <tr>
                        <td>I</td>
                        <td><input type="checkbox" value="I1"/></td>
                        <td><input type="checkbox" value="I2"/></td>
                        <td><input type="checkbox" value="I3"/></td>
                        <td><input type="checkbox" value="I4"/></td>
                        <td><input type="checkbox" value="I5"/></td>
                        <td className="khoangCach"></td>
                        <td><input type="checkbox" value="I6"/></td>
                        <td><input type="checkbox" value="I7"/></td>
                        <td><input type="checkbox" value="I8"/></td>
                        <td><input type="checkbox" value="I9"/></td>
                        <td><input type="checkbox" value="I10"/></td>
                        <td><input type="checkbox" value="I11"/></td>
                        <td><input type="checkbox" value="I12"/></td>
                    </tr>
                    <tr>
                        <td>J</td>
                        <td><input type="checkbox" value="J1"/></td>
                        <td><input type="checkbox" value="J2"/></td>
                        <td><input type="checkbox" value="J3"/></td>
                        <td><input type="checkbox" value="J4"/></td>
                        <td><input type="checkbox" value="J5"/></td>
                        <td className="khoangCach"></td>
                        <td><input type="checkbox" value="J6"/></td>
                        <td><input type="checkbox" value="J7"/></td>
                        <td><input type="checkbox" value="J8"/></td>
                        <td><input type="checkbox" value="J9"/></td>
                        <td><input type="checkbox" value="J10"/></td>
                        <td><input type="checkbox" value="J11"/></td>
                        <td><input type="checkbox" value="J12"/></td>
                    </tr>
                </table>
              </div>
              <div className="footer">
                    <div className="screen">SCREEN THIS WAY</div>
                    <button className="btn btn-light">Confirm Selection</button>
              </div>
              <div className="table_info">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Number of Seats</td>
                            <td>Seats</td>
                        </tr>
                        <tbody></tbody>
                    </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
