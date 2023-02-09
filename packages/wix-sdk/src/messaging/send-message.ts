import { WixIFrameMessage } from "./types";

/**
 * Sends a message to a wix main window
 * @param message the message to send
 * @see README.md file for more details
 */
export function sendMessage<T extends WixIFrameMessage>(message: T): void {
  window.parent.postMessage(message, "*");
}
