import React from 'react'

class Prices extends React.Component {
  state = {
    currency: 'USD'
  }
  render() {
    const {bpi} = this.props;
    const {currency} = this.state;
    return (
      <div className="row">
        <div className="col-md-6 col-lg-2 mt-2">
          <select defaultValue="USD" className="form-control h-100" onChange={(e) => this.setState({currency : e.target.value}) }>
            <option value="" disabled>Choose currency</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="col-md-6 col-lg-10 mt-2">
          <ul className="list-group h-100">
            <li className="list-group-item py-2">
              Bitcoin rate for {bpi[currency].description} :&nbsp;&nbsp;
              <span className="badge badge-primary position-relative" style={{bottom: 1}}>{bpi[currency].code}</span>&nbsp;
              <strong>{bpi[currency].rate}</strong>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Prices