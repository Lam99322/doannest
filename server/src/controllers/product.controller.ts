import { Request, Response } from 'express';
import pool from '../config/database';

/*----------------------------------
-----------------------------------*/
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM products');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi lấy sản phẩm' });
    }
};

/*----------------------------------
-----------------------------------*/
export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]);

        if ((rows as any[]).length > 0) {
            res.json((rows as any[])[0]);
        } else {
            res.status(404).json({ error: 'Sản phẩm không tồn tại' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi lấy sản phẩm' });
    }
};

/*----------------------------------
-----------------------------------*/
/*
export const getProductByName = async (req: Request, res: Response): Promise<Response> => {
    const { name } = req.params;

    try {
        const [rows] = await pool.query('SELECT * FROM products WHERE name LIKE ?', [`%${name}%`]);

        if ((rows as any[]).length === 0) {
            return res.status(404).json({ error: 'Sản phẩm không tồn tại' });
        }

        return res.json((rows as any)[0]);
    } catch (err) {
        return res.status(500).json({ error: 'Lỗi máy chủ' });
    }
};
*/
/*----------------------------------
Create Product
-----------------------------------*/
export const createProduct = async (req: Request, res: Response) => {
    const { title, originalPrice, price, discount, tag, image } = req.body;

    try {
        const [result] = await pool.query(
            'INSERT INTO products (title, originalPrice, price, discount, tag, image) VALUES (?, ?, ?, ?, ?, ?)',
            [title, originalPrice, price, discount, tag, image]
        );

        res.status(201).json({
            id: (result as any).insertId,
            title,
            originalPrice,
            price,
            discount,
            tag,
            image
        });
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi thêm sản phẩm' });
    }
};


/*----------------------------------
-----------------------------------*/
export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, originalPrice, price, discount, tag, image } = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE products SET title = ?, originalPrice = ?, price = ?, discount = ?, tag = ?, image = ? WHERE id = ?',
            [title, originalPrice, price, discount, tag, image, id]
        );

        if ((result as any).affectedRows > 0) {
            res.json({ message: 'Cập nhật sản phẩm thành công' });
        } else {
            res.status(404).json({ error: 'Sản phẩm không tồn tại' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi cập nhật sản phẩm' });
    }
};


/*----------------------------------
-----------------------------------*/
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const [result] = await pool.query('DELETE FROM products WHERE id = ?', [id]);

        if ((result as any).affectedRows > 0) {
            res.json({ message: 'Xoá sản phẩm thành công' });
        } else {
            res.status(404).json({ error: 'Sản phẩm không tồn tại' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi xoá sản phẩm' });
    }
};
