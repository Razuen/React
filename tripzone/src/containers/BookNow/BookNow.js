import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { User } from "../../App";
import Button from "../../components/Button/Button";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import DiscountDisplayer from "../../components/DiscountDisplayer/DiscountDisplayer";
import LargeText from "../../components/LargeText/LargeText";
import PageContainer from "../../components/PageContainer/PageContainer";
import Constants from "../../constants/Constants";

function BookNow(props) {
  console.log("Book now....", props.flightDetail);

  const [price, setprice] = useState(props.flightDetail.price);
  const [memberShipDiscount, setmemberShipDiscount] = useState(10);
  const [tax, settax] = useState(5);

  const user = useContext(User);

  useEffect(() => {
    console.log("props changes$$$$$$$$$$$$$$");
    setprice(props.flightDetail.price);
    setmemberShipDiscount(10);
    settax(5);
    calculateFlightCharge();
  }, [props.flightDetail]);

  useEffect(() => {
    console.log("tax changes $$$$$$$$$$$");
    calculateFlightCharge();
  }, [tax]);

  const calculateDiscount = (id) => {
    let discountValue = Constants.DISCOUNT_BUTTON_LIST.filter(
      (discount) => discount.id === id
    );
    setmemberShipDiscount(10 + discountValue[0].value);
  };

  const calculateTax = async (id) => {
    let taxValue = Constants.TAX_BUTTON_LIST.filter((tax) => tax.id === id);
    settax(props.flightDetail.price * (taxValue[0].value / 100));
  };

  const calculateFlightCharge = () => {
    let updatedCharge = parseFloat(props.flightDetail.price) + tax;
    setprice(updatedCharge);
  };

  return (
    <PageContainer
      heading="BOOK NOW"
      isPrime={user.prime === "true"}
      color="blue"
    >

      {useMemo(() => {
        return <LargeText text={"$" + price} />;
      }, [price])}

      <div className="tax-discount">

        {useMemo(() => {
          return (
            <DiscountDisplayer
              text="Membership Discount"
              cost={"$ " + memberShipDiscount}
            />
          );
        }, [memberShipDiscount])}
        {useMemo(() => {
          return <DiscountDisplayer text="Tax Amount" cost={"$ " + tax} />;
        }, [tax])}
      </div>
      <p>
        You can further increase your membership discount by renewing your
        membership. Choose Number of Years to Renew
      </p>

      {useMemo(() => {
        return (
          <ButtonGroup
            buttonList={Constants.DISCOUNT_BUTTON_LIST}
            onClick={(id) => {
              calculateDiscount(id);
            }}
          />
        );
      }, Constants.DISCOUNT_BUTTON_LIST)}

      <p>
        You can donate to COVID-19 Care Fund by increasing the Tax Component.
        Choose % of Tax Component to be increased.
      </p>

      {useMemo(() => {
        return (
          <ButtonGroup
            buttonList={Constants.TAX_BUTTON_LIST}
            onClick={(id) => calculateTax(id)}
          />
        );
      }, [Constants.TAX_BUTTON_LIST])}

      <p>
        Your Ticket will be emailed to your registered email and phone number.
      </p>
      <Button
        text="PROCEED TO PAY"
        onClick={useCallback(() => {
          props.bookTicket();
        }, [])}
      />
      <style jsx>
        {`
          .tax-discount {
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </PageContainer>
  );
}

export default BookNow;
