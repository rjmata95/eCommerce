const {
  REACT_APP_API,
  REACT_APP_LOGIN_URL,
  REACT_APP_SIGNIN_URL,
  REACT_APP_SIGNUP_URL,
} = process.env;

export const signin = async (credentials) => {
  try {
    const response = await fetch(
      `${REACT_APP_API}${REACT_APP_LOGIN_URL}${REACT_APP_SIGNIN_URL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials), // body data type must match "Content-Type" header
      }
    );
    const parsedResponse = await response.json();
    console.log(parsedResponse);
    return parsedResponse;
  } catch (error) {
    console.log(`Error during fetch (login): ${error}`);
    return null;
  }
};

export const signup = async (credentials) => {
  try {
    const response = await fetch(
      `${REACT_APP_API}${REACT_APP_LOGIN_URL}${REACT_APP_SIGNUP_URL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials), // body data type must match "Content-Type" header
      }
    );
    const parsedResponse = await response.json();
    console.log(parsedResponse);
    return parsedResponse;
  } catch (error) {
    console.log(`Error during fetch (login): ${error}`);
    return null;
  }
};
