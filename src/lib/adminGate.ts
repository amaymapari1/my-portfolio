export function canDeleteMessage({ apiUrl, adminKey }: { apiUrl: string; adminKey: string }) {
  if (!apiUrl) {
    return { allowed: true, scope: "local" as const };
  }
  if (adminKey.trim().length > 0) {
    return { allowed: true, scope: "api" as const };
  }
  return { allowed: false, scope: "api" as const };
}
