/**
 * @file Shared API helpers for submitting contact and quote forms to the Strapi backend.
 *
 * This module centralizes HTTP calls used by form components, so pages only deal with
 * typed functions instead of raw fetch calls.
 */

/**
 * Base URL of the Strapi backend.
 *
 * By default, this targets a local Strapi instance on port 1337.
 * You can override this at build time by defining the environment variable
 * EAST_GABON_API_URL (via your bundler / CI configuration).
 */
const API_BASE_URL: string =
  (typeof process !== 'undefined' &&
    typeof process.env !== 'undefined' &&
    (process.env.EAST_GABON_API_URL as string)) ||
  'http://localhost:1337'

/**
 * Generic shape of a successful submission response from Strapi.
 */
export interface SubmissionResponse {
  /**
   * Indicates whether the submission was processed successfully.
   */
  ok: boolean
  /**
   * Identifier of the created entity in Strapi (quote-request or contact-message).
   */
  id?: number
  /**
   * Optional error message when the submission fails.
   */
  message?: string
}

/**
 * Payload expected by the contact-message submission endpoint.
 *
 * This mirrors the Strapi content-type `contact-message`.
 */
export interface ContactFormPayload {
  /** Sender full name. */
  name: string
  /** Sender email address. */
  email: string
  /** Optional phone number. */
  phone?: string
  /** Subject of the message. */
  subject: string
  /** Main message body. */
  message: string
  /**
   * Optional reCAPTCHA v3 token sent by the frontend.
   * Can be omitted in local development if captcha is not configured on the backend.
   */
  captchaToken?: string
  /**
   * Optional string indicating from which page the form was submitted (e.g. "contact", "home").
   */
  sourcePage?: string
}

/**
 * Payload expected by the quote-request submission endpoint.
 *
 * This mirrors the Strapi content-type `quote-request`.
 */
export interface QuoteRequestPayload {
  /** Client or company name. */
  clientName: string
  /** Contact email for the quote. */
  clientEmail: string
  /** Optional phone number. */
  clientPhone?: string
  /** Optional project type (selected in the UI). */
  projectType?: string
  /** Optional location of the project. */
  location?: string
  /** Optional budget indication (free text or range). */
  budget?: string
  /** Detailed description of the project / needs. */
  projectDetails: string
  /**
   * Optional reCAPTCHA v3 token.
   * Can be omitted in local development if captcha is not configured on the backend.
   */
  captchaToken?: string
  /**
   * Optional string indicating from which page the form was submitted (e.g. "quote", "services").
   */
  sourcePage?: string
}

/**
 * Internal helper performing a JSON POST request to the Strapi API.
 *
 * @param path - Relative API path (e.g. "/api/contact-messages/submit").
 * @param body - Request body object that will be JSON-stringified.
 * @returns A typed submission response.
 * @throws Error if the network request fails or the backend returns a non-2xx status.
 */
async function postJson(path: string, body: unknown): Promise<SubmissionResponse> {
  const url = `${API_BASE_URL.replace(/\/$/, '')}${path}`

  // 🚨 AJOUTEZ cette ligne - WRAP dans { data: ... }
  const strapiBody = { data: body }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(strapiBody), // 🚨 Envoyez strapiBody, pas body directement
  })

  // Attempt to parse JSON response; Strapi uses JSON for both success and error payloads.
  const data = (await response.json().catch(() => ({}))) as Partial<SubmissionResponse>;

  if (!response.ok || data.ok === false) {
    const message =
      data.message ||
      `Form submission failed with status ${response.status}${
        response.statusText ? ` (${response.statusText})` : ''
      }`
    throw new Error(message)
  }

  return {
    ok: true,
    id: data.id,
    message: data.message,
  }
}

/**
 * Submits a contact form to the Strapi backend.
 *
 * This function should be used by the Contact page / component when the user
 * validates the contact form.
 *
 * @param payload - Data collected from the contact form.
 * @returns A promise resolving to the submission response.
 */
export async function submitContactMessage(
  payload: ContactFormPayload,
): Promise<SubmissionResponse> {
  return postJson('/api/contact-messages/submit', payload)
}

/**
 * Submits a quote request form to the Strapi backend.
 *
 * This function should be used by the Quote page / component when the user
 * validates the quote request form.
 *
 * @param payload - Data collected from the quote request form.
 * @returns A promise resolving to the submission response.
 */
export async function submitQuoteRequest(
  payload: QuoteRequestPayload,
): Promise<SubmissionResponse> {
  return postJson('/api/quote-requests/submit', payload)
}