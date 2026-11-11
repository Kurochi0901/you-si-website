// 各欄位長度上限：超過就截斷（不退件 —— 前端送出後不等結果，退件等於這筆紀錄直接消失）
const MAX_LEN = { name: 80, phone: 40, email: 160, pickup: 20, address: 300, summary: 8000 };
const text = (v, max) => String(v == null ? "" : v).slice(0, max);
const amount = (v) => { const n = Number(v); return Number.isFinite(n) ? n : 0; };

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const body = req.body && typeof req.body === "object" ? req.body : {};

    const name     = text(body.name, MAX_LEN.name).trim();
    const phone    = text(body.phone, MAX_LEN.phone).trim();
    const email    = text(body.email, MAX_LEN.email).trim();
    const pickup   = text(body.pickup, MAX_LEN.pickup).trim();
    const address  = text(body.address, MAX_LEN.address).trim();
    const summary  = text(body.summary, MAX_LEN.summary);
    const subtotal = amount(body.subtotal);
    const discount = amount(body.discount);
    const total    = amount(body.total);

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
      // 後台沒回應時最多等 8 秒，不讓這支函式掛到平台逾時
      signal: AbortSignal.timeout(8000),
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
      // 後台的錯誤原文只寫進伺服器紀錄，不回傳給瀏覽器
      const errText = await response.text();
      console.error("GAS responded with error:", response.status, errText);
      return res.status(502).json({ error: "GAS error" });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (err) {
    console.error("Order handler error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
