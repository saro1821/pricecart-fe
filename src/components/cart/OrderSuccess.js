import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function OrderSuccess() {
    let navigate =useNavigate()
    return (
        <div className="row justify-content-center">
            <div className="col-6 mt-5 text-center">
                <img className="my-5 img-fluid d-block mx-auto" src="/images/success.png" alt="Order Success" width="200" height="200" />

                <h2>Your Order has been placed successfully.</h2>

                <Button onClick ={()=>navigate ('/orders')}>go to orders</Button>
            </div>

        </div>
    )
}