const Account = require("../models/bankModel");

const getBalance = async (req, res) => {
  try {
    const userId = req.userId;
    const userbal = await Account.findOne({ userId: userId });

    if (!userbal) {
      return res
        .status(411)
        .json({ message: "Error while fetching the balance" });
    }
    res
      .status(200)
      .json({ message: "The balance fetched", balance: userbal.balance });
  } catch (error) {
    console.log(error);
    return res
      .status(411)
      .json({ message: "Error while Fetching the balance" });
  }
};

const tranfer = async (req, res) => {};

module.exports = { getBalance, tranfer };
