import { pool } from "../db.js";

export const getPrecierres = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM precierres");
    res.json(rows);
  } catch (e) {
    return res.status(500).json();
  }
};

export const getPrecierre = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM precierres WHERE id_precierre = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Precierre not found",
      });

    res.json(rows[0]);
  } catch (e) {
    return res.status(500).json();
  }
};

export const createPrecierre = async (req, res) => {
  const { fecha_creacion, id_local, tipo_precierre, cajero, monto_inicial, total_b_manual, total_b_electronica, total_credito, total_debito, total_wallets, total_transferencias, total_caja_fuerte, efectivo_20mil, efectivo_10mil, efectivo_5mil, efectivo_2mil, efectivo_1mil, efectivo_500, efectivo_100, efectivo_50, efectivo_10, efectivo_5, cheques, gifcars, orden_compra, t_efectivo, t_facturas_efectivo, t_facturas_tarjeta, t_ndc_devolucion, t_gastos, subtotal_ventas, t_diferencia, t_ventas } = req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO precierres(fecha_creacion, id_local, tipo_precierre, cajero, monto_inicial, total_b_manual, total_b_electronica, total_credito, total_devito) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [fecha_creacion, id_local, tipo_precierre, cajero, monto_inicial]
    );

    res.send({
      id_precierre: rows.insertId,
      fecha_creacion,
      id_local,
      tipo_precierre,
      cajero,
      monto_inicial,
    });
  } catch (e) {
    return res.status(500).json("error");
  }
};

export const deletePrecierre = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM precierres WHERE id_precierre = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Precierre not found",
      });

    res.sendStatus(204);
  } catch (e) {
    return res.status(500).json();
  }
};

export const updatePrecierre = async (req, res) => {
  const { id_precierre } = req.params;
  const { monto_inicial, id_tipo_precierre, id_local, cajero, fecha_creacion } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE precierres SET monto_inicial = IFNULL(?, monto_inicial), id_tipo_precierre = IFNULL(?, id_tipo_precierre), id_local = IFNULL(?, id_local), cajero = IFNULL(?, cajero), fecha_creacion = IFNULL(?, fecha_creacion) WHERE id = ?",
      [monto_inicial, id_tipo_precierre, id_local, cajero, fecha_creacion, id_precierre]
    );

    const [rows] = await pool.query("SELECT * FROM precierres WHERE id_precierre = ?", [
      id_precierre,
    ]);

    res.json(rows[0]);

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Precierre not found",
      });
  } catch (e) {
    return res.status(500).json();
  }
};