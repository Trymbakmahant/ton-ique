import { TelegramInitData } from "./mockTelegramData";

export function validateInitData(initData: TelegramInitData): boolean {
  // Basic validation logic
  if (!initData.user) return false;
  if (!initData.user.id) return false;
  if (!initData.auth_date) return false;

  // Additional custom validation can be added
  return true;
}
