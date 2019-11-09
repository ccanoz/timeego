// This file holds and exports our firebase auth config settings

export const uiConfig = {
	callbacks        : {
		signInSuccessWithAuthResult : function(authResult, redirectUrl) {
			// User successfully signed in.
			// Return type determines whether we continue the redirect automatically
			// or whether we leave that to developer to handle.
			return true;
		},
		uiShown                     : function() {
			// The widget is rendered.
			// Hide the loader.
			document.getElementById('loader').style.display = 'none';
		}
	},
	// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
	signInFlow       : 'popup',
	signInSuccessUrl : 'dashboard.html',
	signInOptions    : [
		firebase.auth.EmailAuthProvider.PROVIDER_ID
	],
	// Terms of service url.
	tosUrl           : 'dashboard.html',
	// Privacy policy url.
	privacyPolicyUrl : 'dashboard.html'
};
