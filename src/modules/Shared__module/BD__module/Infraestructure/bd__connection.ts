import dotenv from 'dotenv'
const mysql = require('mysql2/promise');
dotenv.config();
class mysqlConnection {

    dataConnection: any;

    connectionDEV = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'accounting'
    };

    connectionPRO = {
        host: '50.62.177.143',
        user: 'atpAdmin',
        password: 'facil123',
        database: 'atp-db'
    };

    constructor() {
        this.dataConnection = this.connectionDEV;
    }

    public async createConnection() {
        let connection: any;
        try {
            connection = await mysql.createConnection(this.dataConnection);
        } catch (error) {
            connection = error;
        }
        return connection;
    }

    public async createPoolConnection(){
        let connection: any;
        try {
            connection = await mysql.createPool(this.dataConnection);
        } catch (error) {
            connection = error;
        }
        return connection;
    }

}

export default mysqlConnection;