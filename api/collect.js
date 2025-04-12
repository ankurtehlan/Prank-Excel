export default async function handler(req, res) {
    if (req.method === "POST") {
      const { ip, files } = req.body || {};
      console.log("Received:", ip, files);
      res.status(200).send("Data received!");
    } else {
      res.status(405).send("Only POST allowed");
    }
  }
  
