const email_code_verify = async (req, res) => {
  const info = req.info;
  try {
    if (info) {
      res.status(200).json({ success: true, data: "Email send" });
    } else {
      res.status(200).json({ success: true, data: "Email is not send" });
    }
  } catch (e) {
    res.status(500).json({ success: false, error: e });
  }
};
export { email_code_verify };
