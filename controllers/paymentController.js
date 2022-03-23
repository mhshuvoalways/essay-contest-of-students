const Razorpay = require("razorpay");
const Payment = require("../Model/Payment");
const IsPaySubmit = require("../Model/IsPaySubmit");
const QuarterAnnounce = require("../Model/Quarter&Announce");
const serverError = require("../utils/serverError");

const createOrder = (req, res) => {
  QuarterAnnounce.find()
    .then(async (findqa) => {
      if (findqa.length && findqa[0].toggleStartStop) {
        try {
          const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
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
      } else {
        res.status(400).json({
          message: "Quarterly didn't start yet",
        });
      }
    })
    .catch(() => {
      serverError(res);
    });
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
  res.status(200).json(process.env.RAZORPAY_KEY_ID);
};

const getAllPayments = (req, res) => {
  Payment.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch(() => {
      serverError(res);
    });
};

module.exports = {
  createOrder,
  payOrder,
  getKey,
  getAllPayments,
};
