import { sendMessage } from "../messaging";
/**
 * sends a navigation message to a wix main window
 * @param to the url to navigate to
 * @see README.md file for details
 */
export function navigate(to) {
    sendNavigationMessage({
        to,
    });
}
function sendNavigationMessage(message) {
    const navigationMessage = {
        ...message,
        messageType: "navigation-message",
    };
    return sendMessage(navigationMessage);
}
//# sourceMappingURL=navigate.js.map