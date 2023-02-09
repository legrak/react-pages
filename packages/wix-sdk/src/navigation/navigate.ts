import { sendMessage } from "../messaging";
import { NavigationMessage } from "./types";

/**
 * sends a navigation message to a wix main window
 * @param to the url to navigate to
 * @see README.md file for details
 */
export function navigate(to: string): void {
  sendNavigationMessage({
    to,
  });
}

function sendNavigationMessage(
  message: Omit<NavigationMessage, "messageType">
): void {
  const navigationMessage: NavigationMessage = {
    ...message,
    messageType: "navigation-message",
  };
  return sendMessage(navigationMessage);
}
