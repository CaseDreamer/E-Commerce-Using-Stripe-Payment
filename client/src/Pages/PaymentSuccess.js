import React, { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Button from "../Components/Buttons"

export default function PaymentSuccess() {
  const [isSaveOk, setIsSaveOk] = useState(null)
  const { paymentToken } = useParams()

  const savePurchase = useCallback(async () => {
    fetch(process.env.REACT_APP_API_URL + "/payments/save-purchase/" + paymentToken, {
      method: 'POST',
      credentials: 'include'
    }).then(result => {
      return result.json()
    }).then(result => {
      setIsSaveOk(result.isSaveOk)
    })
  }, [paymentToken])

  useEffect(() => { savePurchase() }, [savePurchase])

  function getPaymentResult() {
    if (isSaveOk === 1) {
      return <React.Fragment>
        <img src={require('../Assets/Images/success-purchase.svg').default} alt="Purchase" />
        <h1>Pembayaran Berhasil!</h1>
        <p>Berhasil melakukan pembayaran terhadap produk tersebut!</p>
        <Button onClick={() => { window.location.href = "/shop" }} type="solid-btn-success">Confirm</Button>
      </React.Fragment>
    }
    else if (isSaveOk === 0) {
      return <React.Fragment>
        <img src={require('../Assets/Images/success-purchase.svg').default} alt="Purchase" />
        <h1>Pembayaran Berhasil!</h1>
        <p>Histori pembayaran berada di tab 'purchase'</p>
        <Button onClick={() => { window.location.href = "/shop" }} type="solid-btn-primary">Ok</Button>
      </React.Fragment>
    }
    else if (isSaveOk === -1) window.location.href = "/shop"
    else return null
  }

  return (
    <section id="payment-result">
      <div className="container">
        <div className="success wrapper">
          {getPaymentResult()}
        </div>
      </div>
    </section>
  )
}