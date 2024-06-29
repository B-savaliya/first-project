import React from "react";
import { useSearchParams } from "react-router-dom";

function ContactUs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const color = searchParams.get("color");
  const size = searchParams.get("size");
  return <div>Contact us</div>;
}

export default ContactUs;
