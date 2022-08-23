const messages = [
  {
    message: "Great job, this is a message from the API",
  },
  {
    message: "And this is another message from the API",
  },
];

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.message.length) {
      res
        .status(400)
        .json({ success: false, error: "Du har ikke skrevet noe" });
    } else {
      messages.push(data);
      res.status(201).json({ success: true, data: messages });
    }
  } else if (req.method === "PUT") {
    res.status(405).end();
  } else {
    res.status(200).json({ success: true, data: messages });
  }
}
