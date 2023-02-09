# WIX side prerequisites

In order to make this SDK work correctly with WIX, you have to add a code
snippets on your wix site

## Navigation

```
import wixLocation from 'wix-location';

$w.onReady(function () {
	$w("<YOUR_IFRAME_ID>").onMessage((message) => {
		console.log(`message from frame: ${JSON.stringify(message)}`);

		if (message.data.type === 'navigation-message' && typeof message.data.to === 'string') {
			wixLocation.to(message.data.to);
		}
	})	
});
```