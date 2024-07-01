import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function ContactUs() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const test_data = searchParams.get("test-data");
  console.log("******", test_data, window, params);
  return <div>ContactUs</div>;
}

export default ContactUs;
