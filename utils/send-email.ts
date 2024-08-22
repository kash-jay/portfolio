// import { FormData } from "@/app/contact/page";

// export function sendEmail(data: FormData) {
//   console.log(data);

//   const apiEndpoint = "/api/email";

//   fetch(apiEndpoint, {
//     method: "POST",
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((response) => {
//       alert(response.message);
//     })
//     .catch((err) => {
//       alert(err);
//     });
// }

import { FormData } from "@/app/contact/page";

export async function sendEmail(data: FormData): Promise<string> {
  try {
    const apiEndpoint = "/api/email";
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to send email.");
    }

    return result.message || "Email sent successfully!";
  } catch (err) {
    return (
      (err as Error).message || "An error occurred while sending the email."
    );
  }
}
