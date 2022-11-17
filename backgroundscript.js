function remove_amazon_affiliate_links( details ) {
	if ( details.url.match( /&tag=[a-zA-Z0-9\-]*/ ) != null) {
		return {
			redirectUrl: details.url.replace( /(&tag=[a-zA-Z0-9\-]*)/, '' )
		};
	}
}

function remove_aliexpress_affiliate_links( details ) {
    if ( details.url.match( /&v=[a-zA-Z0-9\-]*/ ) != null) {
		return {
			redirectUrl: details.url.replace( /(&v=[a-zA-Z0-9\-]*)/, '' )
		};
	}
	if ( details.url.match( /spm=[a-zA-Z0-9\-\.]*/ ) != null) {
		return {
			redirectUrl: details.url.replace( /(spm=[a-zA-Z0-9\-\.]*)/, '' )
		};
	}
}

chrome.webRequest.onBeforeRequest.addListener( remove_aliexpress_affiliate_links, { urls: ["*://de.aliexpress.com/*", "*://aliexpress.com/*"] }, ["blocking"] );

chrome.webRequest.onBeforeRequest.addListener( remove_amazon_affiliate_links, { urls: ["*://www.amazon.com/*", "*://www.amazon.co.uk/*", "*://amazon.com/*", "*://amazon.co.uk/*", "*://amazon.de/*", "*://www.amazon.de/*"] }, ["blocking"] );
