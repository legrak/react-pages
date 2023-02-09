import { WixIFrameMessage } from "../messaging";

export interface NavigationMessage extends WixIFrameMessage {
  messageType: "navigation-message";
  to: string;
}
