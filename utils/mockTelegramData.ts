export interface TelegramInitData {
  query_id?: string;
  user?: {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
  };
  chat?: {
    id: number;
    type: "private" | "group" | "supergroup";
    title?: string;
  };
  start_param?: string;
  auth_date?: number;
}

export const mockLocalInitData: TelegramInitData = {
  query_id: "test_query_123456",
  user: {
    id: 12345,
    first_name: "Test",
    last_name: "User",
    username: "testuser",
  },
  chat: {
    id: 67890,
    type: "private",
    title: "Test Chat",
  },
  start_param: "test_start",
  auth_date: Math.floor(Date.now() / 1000),
};
