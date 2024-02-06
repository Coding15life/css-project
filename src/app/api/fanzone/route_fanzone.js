/*
import OAuth from 'oauth-1.0a'; // You may need to install an OAuth library
import axios from 'axios';

// Define your Yahoo Fantasy Sports API credentials
const consumerKey = 'dj0yJmk9YWlzdzlodFp0N1BhJmQ9WVdrOWJrNXdXWHBVV0VFbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWY0';


// Initialize OAuth with "PLAINTEXT" signature method
const oauth = OAuth({
  consumer: {
    key: consumerKey,
  },
  signature_method: 'PLAINTEXT',
  hash_function(base_string, key) {
    return key; // PLAINTEXT doesn't require hashing
  },
});

// Define Yahoo OAuth endpoints
const requestTokenURL = 'https://api.login.yahoo.com/oauth/v2/get_request_token';
const authorizeURL = 'https://api.login.yahoo.com/oauth/v2/request_auth';
const accessTokenURL = 'https://api.login.yahoo.com/oauth/v2/get_token';

// Initialize Axios with OAuth headers
const httpClient = axios.create();

// Function to get an OAuth request token
export const getRequestToken = async () => {
  try {
    const requestData = {
      url: requestTokenURL,
      method: 'POST',
    };

    const response = await httpClient.post(requestTokenURL, {
      headers: oauth.toHeader(oauth.authorize(requestData)),
    });

    // Extract and return the request token
    const { oauth_token, oauth_token_secret } = response.data;
    return { oauth_token, oauth_token_secret };
  } catch (error) {
    console.error('Error getting request token:', error);
    throw error;
  }
};

// Function to redirect the user to Yahoo for authorization
export const redirectToYahooAuthorization = (requestToken) => {
  const authURL = `${authorizeURL}?oauth_token=${requestToken.oauth_token}`;
  window.location.href = authURL;
};

// Function to exchange the request token for an access token
export const getAccessToken = async (requestToken, verifier) => {
  try {
    const requestData = {
      url: accessTokenURL,
      method: 'POST',
    };

    const response = await httpClient.post(accessTokenURL, {
      headers: oauth.toHeader(oauth.authorize(requestData, requestToken)),
      data: { oauth_verifier: verifier },
    });

    // Extract and return the access token
    const { oauth_token, oauth_token_secret } = response.data;
    return { oauth_token, oauth_token_secret };
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

// Function to make authorized API requests
export const makeApiRequest = async (url, accessToken) => {
  try {
    const requestData = {
      url,
      method: 'GET',
    };

    // Use the access token to sign the request
    const headers = oauth.toHeader(oauth.authorize(requestData, accessToken));

    // Make the API request
    const response = await httpClient.get(url, { headers });

    // Return the API response
    return response.data;
  } catch (error) {
    console.error('Error making API request:', error);
    throw error;
  }
};

*/

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const clientId = 'dj0yJmk9NmRBMUQwMGMwaU5ZJmQ9WVdrOVJrdDBjVXN6Y1RRbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTU2'; // Replace with your Yahoo client ID
    const clientSecret = '41dc98d9bb7ec0b5596267de0d637b4e063f274c'; // Replace with your Yahoo client secret
    const redirectUri = 'https://localhost:3000/callback'; // Replace with your redirect URI

    const code = req.query.code;

    // Exchange authorization code for access token
    try {
      const response = await axios.post(
        'https://api.login.yahoo.com/oauth2/get_token',
        `code=${code}&redirect_uri=${redirectUri}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=authorization_code`
      );

      const accessToken = response.data.access_token;
      
      // Store the accessToken securely or use it as needed in your application

      res.status(200).json({ message: 'Access token obtained successfully' });
    } catch (error) {
      console.error('Error obtaining access token:', error.message);
      res.status(500).json({ error: 'Error obtaining access token' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}

