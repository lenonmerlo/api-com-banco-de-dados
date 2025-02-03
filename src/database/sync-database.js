const { query } = require("./index");

async function syncDatabase() {
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        stock_quantity INT NOT NULL,
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now(),
        is_active BOOLEAN DEFAULT TRUE
      );
    `);
    console.log('Created "products" table.');

    await query(`
      CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now()
      );
    `);
    console.log('Created "customers" table.');

    await query(`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        customer_id INT NOT NULL,
        total DECIMAL(10, 2) NOT NULL DEFAULT 0,
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now(),
        FOREIGN KEY (customer_id) REFERENCES customers (id) ON DELETE CASCADE
      );
    `);
    console.log('Created "orders" table.');

    await query(`
      CREATE TABLE IF NOT EXISTS order_products (
        order_id INT,
        product_id INT,
        quantity INT NOT NULL DEFAULT 1,
        created_at TIMESTAMP DEFAULT now(),
        updated_at TIMESTAMP DEFAULT now(),
        PRIMARY KEY (order_id, product_id),
        FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE,
        FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE
      );
    `);
    console.log('Created "order_products" table.');
  } catch (error) {
    console.error("Error syncing database:", error);
  } finally {
    process.exit(1);
  }
}

syncDatabase();
