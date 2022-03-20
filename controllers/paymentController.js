const Razorpay = require("razorpay");
const Payment = require("../Model/Payment");
const IsPaySubmit = require("../Model/IsPaySubmit");
const serverError = require("../utils/serverError");

const createOrder = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: "rzp_test_MK6e9xBvaWxbV1",
      key_secret: "xXMSflaKCIIPRDnaxroKwEnQ",
    });
    const options = {
      amount: req.body.amount,
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    if (!order) return serverError(res);
    res.send(order);
  } catch {
    serverError(res);
  }
};

const payOrder = (req, res) => {
  const { amount, orderId, paymentId, signature } = req.body;
  const obj = {
    author: req.user._id,
    amount,
    razorpay: {
      orderId,
      paymentId,
      signature,
    },
  };
  new Payment(obj)
    .save()
    .then(() => {
      IsPaySubmit.findOneAndUpdate(
        { author: req.user._id },
        { isPayment: true },
        { new: true }
      )
        .then(() => {
          res.status(200).json({
            message: "Thanks for payment!",
          });
        })
        .catch(() => {
          serverError(res);
        });
    })
    .catch(() => {
      serverError(res);
    });
};

const getKey = (req, res) => {
  res.status(200).json("rzp_test_MK6e9xBvaWxbV1");
};

module.exports = {
  createOrder,
  payOrder,
  getKey,
};
