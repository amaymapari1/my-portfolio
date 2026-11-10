/**
 * Replaceable site configuration.
 *
 * API URLs and the resume location can be set here or with environment
 * variables (see .env.example). Leave an API URL empty to use the documented
 * in-browser mock. Do not put secrets in this file.
 *
 * Mock contact submissions are saved in localStorage. They are not emailed.
 * When VITE_CONTACT_API_URL is set, the form POSTs JSON:
 * { name, email, phone, message }.
 */

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export const defaultResumeUrl = "/AmayMapari_Resume.pdf";

export const config = {
  contactApiUrl: text(import.meta.env.VITE_CONTACT_API_URL),
  resumePreviewUrl: text(import.meta.env.VITE_RESUME_PREVIEW_URL) || defaultResumeUrl,
  resumeDownloadUrl: text(import.meta.env.VITE_RESUME_DOWNLOAD_URL) || defaultResumeUrl,
};

export const usesMockContact = config.contactApiUrl.length === 0;
