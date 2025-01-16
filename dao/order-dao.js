const db = require("../config/db");

class OrderDao {
    async addOrder(cartid, restaurantid, addressid, courierusername, customerusername, status) {
        await db.query("INSERT INTO orders (cartid, restaurantid, addressid, courierusername, customerusername, status) VALUES ($1, $2, $3, $4, $5, $6)", [cartid, restaurantid, addressid, courierusername, customerusername, status]).catch(console.log);
        return;
    }

    async getOrderById(id) {
        let result = await db.query("SELECT * FROM orders WHERE id = $1", [id]).catch(console.log);
        return result.rows[0];
    }

    async getOrdersByCustomer(customerusername) {
        let result = await db.query("SELECT * FROM orders WHERE customerusername = $1", [customerusername]).catch(console.log);
        return result.rows;
    }

    async getActiveCustomerOrder(customerusername) {
        let result = await db.query("SELECT * FROM orders WHERE customerusername = $1 AND status = $2", [customerusername, "inprogress"]).catch(console.log);
        return result.rows[0];
    }

    async getOrdersByCourier(courierusername) {
        let result = await db.query("SELECT * FROM orders WHERE courierusername = $1", [courierusername]).catch(console.log);
        return result.rows;
    }

    async getActiveOrderByCourier(courierusername) {
        let result = await db.query("SELECT * FROM orders WHERE courierusername = $1 AND status = 'active'", [courierusername]).catch(console.log);
        return result.rows[0];
    }

    async getOrdersByRestaurant(restaurantid) {
        let result = await db.query("SELECT * FROM orders WHERE restaurantid = $1", [restaurantid]).catch(console.log);
        return result.rows;
    }

    async getActiveOrdersByRestaurant(restaurantid) {
        let result = await db.query("SELECT * FROM orders WHERE restaurantid = $1 AND status = 'active'", [restaurantid]).catch(console.log);
        return result.rows;
    }

    async getDeliverableOrders() {
        let result = await db.query("SELECT * FROM orders WHERE courierusername = '' ", []).catch(console.log);
        return result.rows;
    }

    async updateOrderStatus(id, status) {
        await db.query("UPDATE orders SET status = $1 WHERE id = $2", [status, id]).catch(console.log);
        return;
    }

    async updateOrderCourier(id, courier) {
        await db.query("UPDATE orders SET courierusername = $1 WHERE id = $2", [courier, id]).catch(console.log);
        return;
    }

    async deleteOrder(id) {
        await db.query("DELETE FROM orders WHERE id = $1", [id]).catch(console.log);
        return;
    }
}

module.exports = OrderDao;