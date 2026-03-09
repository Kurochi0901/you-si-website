export default async function handler(req, res) {

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    try {
  
      const {
        name,
        phone,
        items,
        total,
        shipping,
        address
      } = req.body;
  
      // 基本驗證
      if (!name || !phone || !items) {
        return res.status(400).json({ error: "Missing fields" });
      }
  
      const GAS_URL = process.env.GAS_ORDER_URL;
  
      const response = await fetch(GAS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          phone,
          items,
          total,
          shipping,
          address
        })
      });
  
      const data = await response.json();
  
      return res.status(200).json(data);
  
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }
  }