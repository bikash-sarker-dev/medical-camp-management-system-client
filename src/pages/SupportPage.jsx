import React from "react";
import ContactService from "../components/support/callService/ContactService";
import MailContact from "../components/support/mail/MailContact";

const SupportPage = () => {
  return (
    <div>
      <ContactService />
      <MailContact />
    </div>
  );
};

export default SupportPage;
