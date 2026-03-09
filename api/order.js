export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const {
      apiKey,
      name,
      phone,
      email,
      pickup,
      address,
      summary,
      subtotal,
      discount,
      total
    } = req.body;

    // API Key 驗證
    if (apiKey !== process.env.ORDER_API_KEY) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // 基本驗證
    if (!name || !phone || !summary) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const GAS_URL = process.env.GAS_ORDER_URL;

    if (!GAS_URL) {
      console.error("GAS_ORDER_URL is not set");
      return res.status(500).json({ error: "Server misconfiguration" });
    }

    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        pickup,
        address,
        summary,
        subtotal,
        discount,
        total
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("GAS responded with error:", response.status, errText);
      return res.status(502).json({ error: "GAS error", detail: errText });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    console.error("Order handler error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}