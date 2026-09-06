import { sendContactEmail, validateContactPayload } from "../../server/contact";

export async function onRequest({ request, env }: { request: Request; env: Record<string, string | undefined> }) {
  if (request.method !== "POST") {
    return new Response(null, { status: 405, headers: { Allow: "POST" } });
  }
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      {
        success: false,
        message: "The request body could not be read.",
      },
      { status: 400 },
    );
  }

  const { data, fieldErrors } = validateContactPayload(payload);

  if (data?.website) {
    return Response.json({
      success: true,
      message: "Thanks. We will review your note and follow up shortly.",
    });
  }

  if (!data || fieldErrors) {
    return Response.json(
      {
        success: false,
        message: "Please fix the highlighted fields and try again.",
        fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail(data, env);

    return Response.json({
      success: true,
      message:
        "Thanks. Your note is in, and the Quanta team will follow up shortly.",
    });
  } catch (error) {
    console.error("Contact submission failed", error);

    return Response.json(
      {
        success: false,
        message:
          "Your note could not be delivered right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
