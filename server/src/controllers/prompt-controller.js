const inputPrompt = require("../models/input-prompt");
const openai = require("../config/openai");

module.exports = {
  async sendText(request, response) {
    const openaiAPI = openai.configuration();
    const inputModel = new inputPrompt(request.body);

    try {
      const res = await openaiAPI.createCompletion(
        openai.textCompletion(inputModel)
      );
      return response.status(200).json({
        sucess: true,
        data: res.data.choices[0].text,
      });
    } catch (error) {
      return response.status(400).json({
        sucess: false,
        error: error.response ? error.response.data : "Deu erro no servidor",
      });
    }
  },
};
