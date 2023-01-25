import axios from "axios";

const runCode = async (code, selectedLanguage, input) => {
  try {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };
    let bodyContent = JSON.stringify({
      code,
      input,
    });
    let reqOptions = {
      url: `/api/v1/code/exe-${selectedLanguage.value}/`,
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };
    let response = await axios.request(reqOptions);
    if (response.data.status === true) {
      return response;
    } else {
      throw new Error(error);
    }
  } catch (error) {
    throw new Error(error.response.data.data);
  }
};

export default runCode;
