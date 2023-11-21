"use server";

import { revalidatePath } from "next/cache";
import { PageContactFormSendMailData } from "./PageContactForm.types";
import { sendContactFormData } from "./PageContactForm.services";

export const submitContactFormData = async (
  formData: PageContactFormSendMailData
) => {
  await sendContactFormData(formData);
  revalidatePath("/");
};
