import React from "react";
import ContactService from "../components/support/callService/ContactService";
import MailContact from "../components/support/mail/MailContact";
import TabTitle from "./../components/share/htmlHead/TabTitle";
import PageHead from "./../components/share/pageHead/PageHead";

const SupportPage = () => {
  return (
    <div>
      <TabTitle title={` Medical | support`} />
      <PageHead title={"Support"} pathName={"support"} />
      <ContactService />
      <MailContact />
    </div>
  );
};

export default SupportPage;
