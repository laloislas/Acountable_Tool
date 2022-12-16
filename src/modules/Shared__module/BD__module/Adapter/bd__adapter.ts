import mysqlConnection from "./../Infraestructure/bd__connection";
export default class AdapterDB {
  private conectionDB: any;

  constructor() {
    this.conectionDB = new mysqlConnection();
  }

  public async runConsult(
    comand: String,
    conectionRemplace?: any,
    values?: Array<any>
  ) {
    let connection: any;
    try {
      if (conectionRemplace) {
        if (values) {
          const [rows, fields] = await conectionRemplace.query(
            comand,
            [values]
          );
          
          return rows;
        } else {
          const [rows, fields] = await conectionRemplace.query(comand);
          
          return rows;
        }
      } else {
        connection = await this.conectionDB.createConnection();
        const [rows, fields] = await connection.execute(comand);
        connection.end();
        return rows;
      }
    } catch (error) {
      if (conectionRemplace) {
        await conectionRemplace.query("ROLLBACK");
        return null;
      } else {
        connection.end();
      }
      return null;
    }
  }

  public async beginTransaction(): Promise<any> {
    let connection: any;
    try {
      connection = await this.conectionDB.createPoolConnection();
      await connection.query("START TRANSACTION");
      return connection;
    } catch (error) {
      console.log(error);
      await connection.query("ROLLBACK");
      return null;
    }
  }

  public async endTransaction(conectionRemplace: any): Promise<any> {
    let connection: any;
    try {
      connection = conectionRemplace;
      await connection.query("COMMIT");
      return connection;
    } catch (error) {
      console.log(error);
      await connection.query("ROLLBACK");
      return null;
    }
  }
}
