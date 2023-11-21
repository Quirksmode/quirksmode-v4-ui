import { PageContactFormSendMailData } from "./PageContactForm.types";

export const sendContactFormData = async (
  formData: PageContactFormSendMailData
) => {
  const res = await fetch(
    `${process.env.CMS_URL}/wp-json/quirksmode/v1/sendmail`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  return res.status === 200;
};
