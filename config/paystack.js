const paystack = (request) => {
  const headers = {
    authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
    "content-type": "application/json",
    "cache-control": "no-cache",
  };

  const initializePayment = (form, mycallback) => {
    const options = {
      url: `${process.env.PAYSTACK_BASE_URL}/transaction/initialize`,
      headers,
      form,
    };
    const callback = (error, response, body) => {
      return mycallback(error, body);
    };
    request.post(options, callback);
  };

  const verifyPayment = (ref, mycallback) => {
    const options = {
      url: `${
        process.env.PAYSTACK_BASE_URL
      }/transaction/verify/${encodeURIComponent(ref)}`,
      headers,
    };
    const callback = (error, response, body) => {
      return mycallback(error, body);
    };
    request(options, callback);
  };

  return { initializePayment, verifyPayment };
};

module.exports = paystack;
