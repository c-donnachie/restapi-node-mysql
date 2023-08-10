import { pool } from "../db.js"

export const getVentas = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM resumenventa");
    res.json(rows);

  } catch (e) {
    return res.status(500).json();
  }
};

export const createVenta = async(req, res) => {
 const {TOTAL, COMISION, LOCAL, FECHA} = req.body
  try {
    const [rows] = await pool.query("INSERT INTO resumenventa(TOTAL, COMISION, LOCAL, FECHA) VALUES (?, ?, ?, ?)", [TOTAL, COMISION, LOCAL, FECHA])

    res.send({
      TOTAL,
      COMISION,
      LOCAL,
      FECHA
    })

  } catch (e) {
    return res.status(500).json()
  }
}