import "../checkout/page.css";
export default function ThankYou() {
  return (
    <>
      <div className="checkoutContainer">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16" style={{ backgroundColor: "#DFFE00", borderRadius: "50px" }}>
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
        </svg>
        <h2 className="written">THANK YOU</h2>
        <h4>
          WE ARE LOOKING FORWARD TO SEEING YOU!. <br /> <br />
        </h4>

        <p>
          Your order number is: <strong>133742069</strong>
        </p>
        <p>
          *You will receive an email with your order confirmation and printable tickets by email shortly. <br /> <br />
        </p>
      </div>
    </>
  );
}
