import { NextResponse } from "next/server";
import { sendContactEmail, validateContactPayload } from "@/lib/contact";
import type { ContactResponse } from "@/lib/contact-types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json<ContactResponse>(
      {
        success: false,
        message: "The request body could not be read.",
      },
      { status: 400 },
    );
  }

  const { data, fieldErrors } = validateContactPayload(payload);

  if (data?.website) {
    return NextResponse.json<ContactResponse>({
      success: true,
      message: "Thanks. We will review your note and follow up shortly.",
    });
  }

  if (!data || fieldErrors) {
    return NextResponse.json<ContactResponse>(
      {
        success: false,
        message: "Please fix the highlighted fields and try again.",
        fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail(data);

    return NextResponse.json<ContactResponse>({
      success: true,
      message:
        "Thanks. Your note is in, and the Quanta team will follow up shortly.",
    });
  } catch (error) {
    console.error("Contact submission failed", error);

    return NextResponse.json<ContactResponse>(
      {
        success: false,
        message:
          "Your note could not be delivered right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
