import { WixIFrameMessage } from "./types";

/**
 * Sends a message to a wix main window
 * @param message the message to send
 * @see README.md file for more details
 */
export function sendMessage<T extends WixIFrameMessage>(message: T): void {
  if (!window.parent) {
    throw new Error(
      "This function should be used in a WIX frame container. See README.md for details"
    );
  }

  window.parent.postMessage(message, "*");
}
